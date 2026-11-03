"use strict";

// motion.jsx — setup global: Lenis smooth scroll + GSAP ScrollTrigger + helpers compartidos.
// Respeta prefers-reduced-motion. En móvil (<900px) desactiva 3D y tilt.

window.SOLYN_MOTION = function () {
  var reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
  var enable3D = !reduced && !isMobile;
  var lenis = null;
  function init() {
    if (window.__solyn_motion_inited) return;
    window.__solyn_motion_inited = true;
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (!reduced && window.Lenis) {
      var _raf = function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(_raf);
      };
      lenis = new Lenis({
        duration: 1.15,
        easing: function easing(t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
        smoothWheel: true,
        smoothTouch: false
      });
      requestAnimationFrame(_raf);
      if (window.ScrollTrigger) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function (t) {
          return lenis.raf(t * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }
  }

  // Magnético — mueve el elemento hacia el cursor
  function attachMagnetic(el) {
    var strength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.35;
    if (!el || reduced || isMobile) return function () {};
    var onMove = function onMove(e) {
      var r = el.getBoundingClientRect();
      var x = e.clientX - (r.left + r.width / 2);
      var y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.5,
        ease: 'power3.out'
      });
    };
    var onLeave = function onLeave() {
      return gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return function () {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }

  // Tilt 3D — rotateX/Y según mouse position
  function attachTilt(el) {
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
    if (!el || reduced || isMobile) return function () {};
    el.style.transformStyle = 'preserve-3d';
    el.style.transition = 'transform 0.3s cubic-bezier(.16,1,.3,1)';
    var onMove = function onMove(e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var rx = (0.5 - py) * max;
      var ry = (px - 0.5) * max;
      el.style.transform = "perspective(1000px) rotateX(".concat(rx, "deg) rotateY(").concat(ry, "deg) translateZ(0)");
    };
    var onLeave = function onLeave() {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return function () {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }

  // Counter — anima un número de 0 a value cuando entra en viewport
  function counter(el, value) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
    if (!el) return;
    if (reduced) {
      el.textContent = "".concat(prefix).concat(value).concat(suffix);
      return;
    }
    var obj = {
      v: 0
    };
    gsap.to(obj, {
      v: value,
      duration: duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      },
      onUpdate: function onUpdate() {
        el.textContent = "".concat(prefix).concat(Math.round(obj.v)).concat(suffix);
      }
    });
  }

  // useTilt / useMagnetic hooks para componentes React
  function useMagnetic(strength) {
    var ref = React.useRef(null);
    React.useEffect(function () {
      return attachMagnetic(ref.current, strength);
    }, [strength]);
    return ref;
  }
  function useTilt(max) {
    var ref = React.useRef(null);
    React.useEffect(function () {
      return attachTilt(ref.current, max);
    }, [max]);
    return ref;
  }
  return {
    init: init,
    reduced: reduced,
    isMobile: isMobile,
    enable3D: enable3D,
    attachMagnetic: attachMagnetic,
    attachTilt: attachTilt,
    counter: counter,
    useMagnetic: useMagnetic,
    useTilt: useTilt,
    get lenis() {
      return lenis;
    }
  };
}();