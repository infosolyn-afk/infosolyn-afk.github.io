"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Process.jsx — light. Pinned scrollytelling: número 3D rotando + steps que entran.

function Process() {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    active = _React$useState2[0],
    setActive = _React$useState2[1];
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var wrapRef = React.useRef(null);
  var numRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.gsap || !window.ScrollTrigger || SOLYN_MOTION.reduced) return;
    var rows = wrapRef.current.querySelectorAll('[data-step]');
    rows.forEach(function (r, i) {
      ScrollTrigger.create({
        trigger: r,
        start: 'top 60%',
        end: 'bottom 60%',
        onEnter: function onEnter() {
          return setActive(i);
        },
        onEnterBack: function onEnterBack() {
          return setActive(i);
        }
      });
      gsap.fromTo(r, {
        opacity: 0.3,
        x: 30
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: r,
          start: 'top 80%',
          once: true
        }
      });
    });
  }, []);
  React.useEffect(function () {
    if (!window.gsap || !numRef.current || SOLYN_MOTION.reduced) return;
    gsap.fromTo(numRef.current, {
      rotateY: -90,
      opacity: 0
    }, {
      rotateY: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'expo.out'
    });
  }, [active]);
  var s = {
    wrap: {
      background: '#F5F1EA',
      padding: '160px 52px',
      borderTop: '1px solid rgba(26,23,21,0.08)',
      borderBottom: '1px solid rgba(26,23,21,0.08)'
    },
    inner: {
      maxWidth: 1400,
      margin: '0 auto'
    },
    label: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#8C8278',
      marginBottom: 32
    },
    head: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(56px, 8vw, 100px)',
      lineHeight: 0.9,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: '#1A1715',
      margin: 0,
      marginBottom: 80
    },
    muted: {
      color: '#8C8278'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 60,
      alignItems: 'flex-start'
    },
    sticky: {
      position: 'sticky',
      top: 120,
      perspective: '1200px'
    },
    bigNum: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(180px, 22vw, 320px)',
      lineHeight: 0.85,
      color: '#F26B1F',
      letterSpacing: '-0.02em',
      display: 'block',
      transformStyle: 'preserve-3d',
      willChange: 'transform',
      textShadow: '6px 6px 0 #1A1715'
    },
    rows: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    },
    row: function row(a) {
      return {
        padding: '40px 24px',
        borderTop: '1px solid rgba(26,23,21,0.12)',
        transition: 'background 400ms',
        cursor: 'default',
        background: a ? 'rgba(242,107,31,0.06)' : 'transparent',
        position: 'relative'
      };
    },
    rowBar: function rowBar(a) {
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 3,
        height: '100%',
        background: '#F26B1F',
        transform: a ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'transform 500ms cubic-bezier(.16,1,.3,1)'
      };
    },
    rowMono: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '2px',
      color: '#8C8278',
      marginBottom: 12
    },
    rowTitle: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(36px, 4vw, 56px)',
      lineHeight: 1,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      margin: '0 0 16px',
      color: '#1A1715'
    },
    rowDesc: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 16,
      color: '#5C544C',
      lineHeight: 1.75,
      margin: 0,
      maxWidth: 720
    }
  };
  var rows = [['01', 'process_r1_t', 'process_r1_d'], ['02', 'process_r2_t', 'process_r2_d'], ['03', 'process_r3_t', 'process_r3_d'], ['04', 'process_r4_t', 'process_r4_d'], ['05', 'process_r5_t', 'process_r5_d']];
  return /*#__PURE__*/React.createElement("section", {
    ref: wrapRef,
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.label
  }, t('process_label')), /*#__PURE__*/React.createElement("h2", {
    style: s.head
  }, t('process_head_1'), " ", /*#__PURE__*/React.createElement("span", {
    style: s.muted
  }, t('process_head_2'))), /*#__PURE__*/React.createElement("div", {
    style: s.grid
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sticky
  }, /*#__PURE__*/React.createElement("span", {
    ref: numRef,
    style: s.bigNum
  }, rows[active][0])), /*#__PURE__*/React.createElement("div", {
    style: s.rows
  }, rows.map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 3),
      n = _ref2[0],
      tk = _ref2[1],
      dk = _ref2[2];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      "data-step": true,
      style: s.row(active === i)
    }, /*#__PURE__*/React.createElement("div", {
      style: s.rowBar(active === i)
    }), /*#__PURE__*/React.createElement("div", {
      style: s.rowMono
    }, "STEP ", n), /*#__PURE__*/React.createElement("h3", {
      style: s.rowTitle
    }, t(tk)), /*#__PURE__*/React.createElement("p", {
      style: s.rowDesc
    }, t(dk)));
  })))));
}
Object.assign(window, {
  Process: Process
});