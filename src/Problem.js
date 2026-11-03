"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Problem.jsx — light. Tilt 3D rows + bar draw on scroll.

function Problem() {
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var sectionRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.gsap || !window.ScrollTrigger || SOLYN_MOTION.reduced) return;
    var rows = sectionRef.current.querySelectorAll('[data-row]');
    rows.forEach(function (r) {
      gsap.fromTo(r, {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: r,
          start: 'top 88%',
          once: true
        }
      });
    });
  }, []);
  var s = {
    wrap: {
      background: '#F5F1EA',
      padding: '160px 52px',
      borderTop: '1px solid rgba(26,23,21,0.08)'
    },
    inner: {
      maxWidth: 1400,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    },
    left: {
      borderRight: '1px solid rgba(26,23,21,0.12)',
      paddingRight: 40
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
      fontSize: 'clamp(48px, 6vw, 84px)',
      lineHeight: 0.9,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: '#1A1715',
      margin: 0
    },
    muted: {
      color: '#8C8278'
    },
    row: function row(h) {
      return {
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gap: 28,
        padding: '28px 20px 28px 24px',
        borderTop: '1px solid rgba(26,23,21,0.12)',
        position: 'relative',
        cursor: 'default',
        background: h ? 'rgba(242,107,31,0.05)' : 'transparent',
        transformStyle: 'preserve-3d',
        transition: 'background 400ms cubic-bezier(.16,1,.3,1), transform 400ms cubic-bezier(.16,1,.3,1)',
        transform: h ? 'perspective(1200px) rotateY(-2deg) translateZ(8px)' : 'perspective(1200px) rotateY(0)'
      };
    },
    bar: function bar(h) {
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 2,
        height: '100%',
        background: '#F26B1F',
        transformOrigin: 'top',
        transform: h ? 'scaleY(1)' : 'scaleY(0)',
        transition: 'transform 400ms cubic-bezier(.16,1,.3,1)'
      };
    },
    num: function num(h) {
      return {
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: '2px',
        color: h ? '#F26B1F' : '#8C8278',
        transition: 'color 400ms'
      };
    },
    title: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: 18,
      color: '#1A1715',
      marginBottom: 8
    },
    desc: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 14,
      color: '#5C544C',
      lineHeight: 1.7,
      margin: 0
    }
  };
  var rows = [['01', 'problem_r1_t', 'problem_r1_d'], ['02', 'problem_r2_t', 'problem_r2_d'], ['03', 'problem_r3_t', 'problem_r3_d'], ['04', 'problem_r4_t', 'problem_r4_d']];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.left
  }, /*#__PURE__*/React.createElement("div", {
    style: s.label
  }, t('problem_label')), /*#__PURE__*/React.createElement("h2", {
    style: s.head
  }, t('problem_head_1'), /*#__PURE__*/React.createElement("br", null), t('problem_head_2'), " ", /*#__PURE__*/React.createElement("span", {
    style: s.muted
  }, t('problem_head_3')))), /*#__PURE__*/React.createElement("div", null, rows.map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 3),
      n = _ref2[0],
      tk = _ref2[1],
      dk = _ref2[2];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      "data-row": true,
      style: s.row(hover === i),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: s.bar(hover === i)
    }), /*#__PURE__*/React.createElement("div", {
      style: s.num(hover === i)
    }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: s.title
    }, t(tk)), /*#__PURE__*/React.createElement("p", {
      style: s.desc
    }, t(dk))));
  }))));
}
Object.assign(window, {
  Problem: Problem
});