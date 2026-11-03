function initSphere(mount) {
  if (!window.THREE || !mount) return;
  const THREE = window.THREE;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    // Force canvas to fill its wrapper via CSS — setSize(_, _, false) keeps the
    // drawing buffer at devicePixelRatio without inflating the on-screen size.
    Object.assign(renderer.domElement.style, {
      width: '100%', height: '100%', display: 'block',
      position: 'absolute', inset: '0',
    });

    // Shader — gradiente sol naranja + distorsión noise
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorHot: { value: new THREE.Color('#FFB347') },
      uColorMid: { value: new THREE.Color('#F26B1F') },
      uColorDeep: { value: new THREE.Color('#C44A0F') },
    };
    const geometry = new THREE.IcosahedronGeometry(1, 64);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec3 vNormal;
        varying vec3 vPos;

        // Simplex-style cheap noise
        vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){
          const vec2 C=vec2(1.0/6.0,1.0/3.0);
          const vec4 D=vec4(0.0,0.5,1.0,2.0);
          vec3 i=floor(v+dot(v,C.yyy));
          vec3 x0=v-i+dot(i,C.xxx);
          vec3 g=step(x0.yzx,x0.xyz);
          vec3 l=1.0-g;
          vec3 i1=min(g.xyz,l.zxy);
          vec3 i2=max(g.xyz,l.zxy);
          vec3 x1=x0-i1+C.xxx;
          vec3 x2=x0-i2+C.yyy;
          vec3 x3=x0-D.yyy;
          i=mod289(i);
          vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
          float n_=0.142857142857;
          vec3 ns=n_*D.wyz-D.xzx;
          vec4 j=p-49.0*floor(p*ns.z*ns.z);
          vec4 x_=floor(j*ns.z);
          vec4 y_=floor(j-7.0*x_);
          vec4 x=x_*ns.x+ns.yyyy;
          vec4 y=y_*ns.x+ns.yyyy;
          vec4 h=1.0-abs(x)-abs(y);
          vec4 b0=vec4(x.xy,y.xy);
          vec4 b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.0+1.0;
          vec4 s1=floor(b1)*2.0+1.0;
          vec4 sh=-step(h,vec4(0.0));
          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
          vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);
          vec3 p1=vec3(a0.zw,h.y);
          vec3 p2=vec3(a1.xy,h.z);
          vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
          m=m*m;
          return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }

        void main() {
          vNormal = normal;
          float n = snoise(position * 1.4 + uTime * 0.25);
          float displacement = n * 0.18 + uMouse.x * 0.06 + uMouse.y * 0.06;
          vec3 newPos = position + normal * displacement;
          vPos = newPos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorHot;
        uniform vec3 uColorMid;
        uniform vec3 uColorDeep;
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          float fres = pow(1.0 - dot(normalize(vNormal), vec3(0.0,0.0,1.0)), 1.6);
          float topLight = clamp(dot(normalize(vNormal), normalize(vec3(0.3, 0.7, 0.6))), 0.0, 1.0);
          vec3 base = mix(uColorDeep, uColorMid, topLight);
          vec3 col = mix(base, uColorHot, fres);
          col += uColorHot * 0.15 * fres;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler — match container square. updateStyle=false because we
    // already locked the canvas to 100%/100% above; setSize would otherwise
    // double-apply pixelRatio to the inline width/height style.
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouse = (e) => {
      const r = mount.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left - r.width / 2) / r.width;
      mouse.ty = -(e.clientY - r.top - r.height / 2) / r.height;
    };
    window.addEventListener('mousemove', onMouse);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      uniforms.uTime.value = t;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      uniforms.uMouse.value.set(mouse.x, mouse.y);
      mesh.rotation.y = t * 0.18 + mouse.x * 0.4;
      mesh.rotation.x = mouse.y * 0.4;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

}
