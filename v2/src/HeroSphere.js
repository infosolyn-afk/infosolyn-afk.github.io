"use strict";

// HeroSphere.jsx — Three.js esfera con shader de gradiente SOLYN + distorsión por noise.
// Se desactiva en móvil y reduced-motion.

function HeroSphere() {
  var containerRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.SOLYN_MOTION.enable3D || !window.THREE) return;
    var THREE = window.THREE;
    var mount = containerRef.current;
    if (!mount) return;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 3;
    var renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    // Force canvas to fill its wrapper via CSS — setSize(_, _, false) keeps the
    // drawing buffer at devicePixelRatio without inflating the on-screen size.
    Object.assign(renderer.domElement.style, {
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      inset: '0'
    });

    // Shader — gradiente sol naranja + distorsión noise
    var uniforms = {
      uTime: {
        value: 0
      },
      uMouse: {
        value: new THREE.Vector2(0, 0)
      },
      uColorHot: {
        value: new THREE.Color('#FFB347')
      },
      uColorMid: {
        value: new THREE.Color('#F26B1F')
      },
      uColorDeep: {
        value: new THREE.Color('#C44A0F')
      }
    };
    var geometry = new THREE.IcosahedronGeometry(1, 64);
    var material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: "\n        uniform float uTime;\n        uniform vec2 uMouse;\n        varying vec3 vNormal;\n        varying vec3 vPos;\n\n        // Simplex-style cheap noise\n        vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}\n        vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}\n        vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}\n        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}\n        float snoise(vec3 v){\n          const vec2 C=vec2(1.0/6.0,1.0/3.0);\n          const vec4 D=vec4(0.0,0.5,1.0,2.0);\n          vec3 i=floor(v+dot(v,C.yyy));\n          vec3 x0=v-i+dot(i,C.xxx);\n          vec3 g=step(x0.yzx,x0.xyz);\n          vec3 l=1.0-g;\n          vec3 i1=min(g.xyz,l.zxy);\n          vec3 i2=max(g.xyz,l.zxy);\n          vec3 x1=x0-i1+C.xxx;\n          vec3 x2=x0-i2+C.yyy;\n          vec3 x3=x0-D.yyy;\n          i=mod289(i);\n          vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));\n          float n_=0.142857142857;\n          vec3 ns=n_*D.wyz-D.xzx;\n          vec4 j=p-49.0*floor(p*ns.z*ns.z);\n          vec4 x_=floor(j*ns.z);\n          vec4 y_=floor(j-7.0*x_);\n          vec4 x=x_*ns.x+ns.yyyy;\n          vec4 y=y_*ns.x+ns.yyyy;\n          vec4 h=1.0-abs(x)-abs(y);\n          vec4 b0=vec4(x.xy,y.xy);\n          vec4 b1=vec4(x.zw,y.zw);\n          vec4 s0=floor(b0)*2.0+1.0;\n          vec4 s1=floor(b1)*2.0+1.0;\n          vec4 sh=-step(h,vec4(0.0));\n          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n          vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n          vec3 p0=vec3(a0.xy,h.x);\n          vec3 p1=vec3(a0.zw,h.y);\n          vec3 p2=vec3(a1.xy,h.z);\n          vec3 p3=vec3(a1.zw,h.w);\n          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n          p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;\n          vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);\n          m=m*m;\n          return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));\n        }\n\n        void main() {\n          vNormal = normal;\n          float n = snoise(position * 1.4 + uTime * 0.25);\n          float displacement = n * 0.18 + uMouse.x * 0.06 + uMouse.y * 0.06;\n          vec3 newPos = position + normal * displacement;\n          vPos = newPos;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);\n        }\n      ",
      fragmentShader: "\n        uniform vec3 uColorHot;\n        uniform vec3 uColorMid;\n        uniform vec3 uColorDeep;\n        varying vec3 vNormal;\n        varying vec3 vPos;\n        void main() {\n          float fres = pow(1.0 - dot(normalize(vNormal), vec3(0.0,0.0,1.0)), 1.6);\n          float topLight = clamp(dot(normalize(vNormal), normalize(vec3(0.3, 0.7, 0.6))), 0.0, 1.0);\n          vec3 base = mix(uColorDeep, uColorMid, topLight);\n          vec3 col = mix(base, uColorHot, fres);\n          col += uColorHot * 0.15 * fres;\n          gl_FragColor = vec4(col, 1.0);\n        }\n      "
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler — match container square. updateStyle=false because we
    // already locked the canvas to 100%/100% above; setSize would otherwise
    // double-apply pixelRatio to the inline width/height style.
    var resize = function resize() {
      var w = mount.clientWidth;
      var h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    var ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Mouse parallax
    var mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0
    };
    var onMouse = function onMouse(e) {
      var r = mount.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left - r.width / 2) / r.width;
      mouse.ty = -(e.clientY - r.top - r.height / 2) / r.height;
    };
    window.addEventListener('mousemove', onMouse);
    var raf = 0;
    var start = performance.now();
    var _tick = function tick() {
      var t = (performance.now() - start) / 1000;
      uniforms.uTime.value = t;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      uniforms.uMouse.value.set(mouse.x, mouse.y);
      mesh.rotation.y = t * 0.18 + mouse.x * 0.4;
      mesh.rotation.x = mouse.y * 0.4;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(_tick);
    };
    _tick();
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      ro.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  // Fallback CSS si no hay Three.js o es móvil
  if (!window.SOLYN_MOTION.enable3D) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, #FFB347 0%, #F26B1F 45%, #C44A0F 80%, transparent 100%)',
        filter: 'blur(2px)'
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  });
}
Object.assign(window, {
  HeroSphere: HeroSphere
});