"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Guarantee.jsx — DARK invertida + tilt 3D cards + ghost parallax.

function Guarantee() {
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var ghostRef = React.useRef(null);
  var sectRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.gsap || !window.ScrollTrigger || SOLYN_MOTION.reduced) return;
    gsap.to(ghostRef.current, {
      xPercent: -8,
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    sectRef.current.querySelectorAll('[data-card]').forEach(function (c, i) {
      gsap.fromTo(c, {
        opacity: 0,
        y: 80,
        rotateX: -20
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.1,
        ease: 'expo.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: c,
          start: 'top 88%',
          once: true
        }
      });
    });
  }, []);
  var s = {
    wrap: {
      background: '#1A1715',
      color: '#F5F1EA',
      padding: '160px 52px 140px',
      position: 'relative',
      overflow: 'hidden'
    },
    ghost: {
      position: 'absolute',
      right: -20,
      bottom: -60,
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(160px, 20vw, 240px)',
      lineHeight: 0.9,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'rgba(242,107,31,0.08)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      userSelect: 'none',
      willChange: 'transform'
    },
    inner: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    },
    label: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#F26B1F',
      marginBottom: 32
    },
    head: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(64px, 10vw, 136px)',
      lineHeight: 0.9,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: '#F5F1EA',
      margin: 0,
      maxWidth: 1100
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      marginTop: 80,
      perspective: '1500px'
    },
    card: function card(h) {
      return {
        background: h ? 'rgba(242,107,31,0.10)' : 'rgba(245,241,234,0.04)',
        padding: '36px 32px',
        borderRadius: 16,
        cursor: 'default',
        transformStyle: 'preserve-3d',
        transition: 'background 400ms, transform 500ms cubic-bezier(.16,1,.3,1)',
        transform: h ? 'rotateX(4deg) rotateY(-4deg) translateZ(20px)' : 'rotateX(0) rotateY(0)',
        minHeight: 240,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px solid rgba(245,241,234,0.08)'
      };
    },
    num: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '2.5px',
      color: '#F26B1F'
    },
    title: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: 22,
      color: '#F5F1EA',
      margin: 0
    },
    desc: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 15,
      color: 'rgba(245,241,234,0.75)',
      lineHeight: 1.7,
      margin: 0
    },
    footer: {
      marginTop: 80,
      paddingTop: 40,
      borderTop: '1px solid rgba(245,241,234,0.15)',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 18,
      color: '#F5F1EA',
      lineHeight: 1.7,
      maxWidth: 900
    }
  };
  var cards = [['01', 'guarantee_c1_t', 'guarantee_c1_d'], ['02', 'guarantee_c2_t', 'guarantee_c2_d'], ['03', 'guarantee_c3_t', 'guarantee_c3_d']];
  return /*#__PURE__*/React.createElement("section", {
    ref: sectRef,
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    ref: ghostRef,
    style: s.ghost
  }, t('guarantee_ghost')), /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.label
  }, t('guarantee_label')), /*#__PURE__*/React.createElement("h2", {
    style: s.head
  }, t('guarantee_head_1'), /*#__PURE__*/React.createElement("br", null), t('guarantee_head_2')), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: s.cards
  }, cards.map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 3),
      n = _ref2[0],
      tk = _ref2[1],
      dk = _ref2[2];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      "data-card": true,
      style: s.card(hover === i),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: s.num
    }, n), /*#__PURE__*/React.createElement("h3", {
      style: s.title
    }, t(tk)), /*#__PURE__*/React.createElement("p", {
      style: s.desc
    }, t(dk)));
  })), /*#__PURE__*/React.createElement("div", {
    style: s.footer
  }, t('guarantee_footer'))));
}
Object.assign(window, {
  Guarantee: Guarantee
});