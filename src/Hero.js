"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Hero.jsx — light SOLYN. SplitType reveal + Three.js sphere + ghost parallax + counters.

function Hero() {
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t,
    lang = _useSolynLang.lang;
  var headRef = React.useRef(null);
  var ghostRef = React.useRef(null);
  var sphereWrapRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.gsap) return;
    var head = headRef.current;
    if (!head) return;
    var split;
    if (window.SplitType && !SOLYN_MOTION.reduced) {
      split = new SplitType(head, {
        types: 'chars,words'
      });
      gsap.fromTo(split.chars, {
        y: '110%',
        rotateX: -75,
        opacity: 0
      }, {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.025,
        delay: 0.3
      });
    }
    if (window.ScrollTrigger && !SOLYN_MOTION.reduced) {
      gsap.to(ghostRef.current, {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: head.closest('section'),
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      gsap.to(sphereWrapRef.current, {
        yPercent: 25,
        scale: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: head.closest('section'),
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
    return function () {
      if (split) split.revert();
    };
  }, [lang]);

  // Counters
  React.useEffect(function () {
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      var v = parseFloat(el.dataset.counter);
      var suf = el.dataset.suffix || '';
      var pre = el.dataset.prefix || '';
      SOLYN_MOTION.counter(el, v, suf, pre, 2);
    });
  }, []);
  var s = {
    wrap: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 52px 52px',
      paddingTop: 100,
      background: '#F5F1EA',
      backgroundImage: ['linear-gradient(to right, rgba(26,23,21,0.04) 1px, transparent 1px)', 'linear-gradient(to bottom, rgba(26,23,21,0.04) 1px, transparent 1px)'].join(','),
      backgroundSize: '64px 64px'
    },
    ghost: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '20%',
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(140px, 20vw, 260px)',
      lineHeight: 0.9,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'rgba(26,23,21,0.05)',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      pointerEvents: 'none',
      userSelect: 'none',
      willChange: 'transform'
    },
    sphereWrap: {
      position: 'absolute',
      right: '4vw',
      top: '14vh',
      width: 'clamp(280px, 32vw, 480px)',
      height: 'clamp(280px, 32vw, 480px)',
      pointerEvents: 'none',
      willChange: 'transform',
      zIndex: 1
    },
    topMeta: {
      position: 'absolute',
      top: 90,
      left: 52,
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#8C8278',
      whiteSpace: 'nowrap'
    },
    sideMeta: {
      position: 'absolute',
      right: 28,
      top: '50%',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg) translateY(50%)',
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#8C8278'
    },
    content: {
      maxWidth: 1400,
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 2
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 28,
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#5C544C'
    },
    prefix: {
      width: 32,
      height: 2,
      background: '#F26B1F',
      display: 'inline-block'
    },
    headline: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(80px, 13vw, 190px)',
      lineHeight: 0.87,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      margin: 0,
      color: '#1A1715',
      perspective: '1000px',
      // Columna flex: cada mitad del titular es una línea propia. (SplitType fuerza inline-block en los
      // hijos, por eso un display:block no alcanza.) Así la 2ª línea nunca pasa por debajo de la esfera.
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    accent: {
      color: '#F26B1F'
    },
    bottomRow: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      paddingTop: 40,
      marginTop: 40,
      borderTop: '1px solid rgba(26,23,21,0.12)'
    },
    body: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: '#5C544C',
      maxWidth: 460,
      margin: 0
    },
    ctaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexShrink: 0
    },
    ctaPrimary: {
      background: '#1A1715',
      color: '#F5F1EA',
      border: 'none',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 15,
      padding: '18px 28px',
      borderRadius: 4,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    },
    ctaGhost: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 400,
      fontSize: 13,
      color: '#5C544C',
      cursor: 'pointer',
      transition: 'color 180ms'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
      marginTop: 52,
      background: 'rgba(26,23,21,0.12)',
      border: '1px solid rgba(26,23,21,0.12)'
    },
    stat: {
      background: '#F5F1EA',
      padding: '18px 22px',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 400,
      fontSize: 13,
      color: '#1A1715'
    },
    statLabel: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: '#8C8278',
      marginBottom: 8
    }
  };
  var ctaRef = SOLYN_MOTION.useMagnetic(0.3);
  return /*#__PURE__*/React.createElement("section", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    ref: ghostRef,
    style: s.ghost
  }, "CLIENT ACQUISITION"), /*#__PURE__*/React.createElement("div", {
    ref: sphereWrapRef,
    style: s.sphereWrap
  }, /*#__PURE__*/React.createElement(HeroSphere, null)), /*#__PURE__*/React.createElement("div", {
    style: s.topMeta
  }, t('hero_meta_top')), /*#__PURE__*/React.createElement("div", {
    style: s.sideMeta
  }, t('hero_meta_side')), /*#__PURE__*/React.createElement("div", {
    style: s.content
  }, /*#__PURE__*/React.createElement("div", {
    style: s.tag
  }, /*#__PURE__*/React.createElement("span", {
    style: s.prefix
  }), t('hero_tag')), /*#__PURE__*/React.createElement("h1", {
    key: lang,
    ref: headRef,
    style: s.headline
  }, /*#__PURE__*/React.createElement("span", null, t('hero_head_1')), /*#__PURE__*/React.createElement("span", {
    style: s.accent
  }, t('hero_head_2'))), /*#__PURE__*/React.createElement("div", {
    style: s.bottomRow
  }, /*#__PURE__*/React.createElement("p", {
    style: s.body
  }, t('hero_body')), /*#__PURE__*/React.createElement("div", {
    style: s.ctaRow
  }, /*#__PURE__*/React.createElement("a", {
    ref: ctaRef,
    href: "https://calendly.com/info-solyn/30min",
    target: "_blank",
    rel: "noopener",
    style: _objectSpread(_objectSpread({}, s.ctaPrimary), {}, {
      textDecoration: 'none'
    })
  }, t('hero_cta'), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    style: s.ctaGhost
  }, t('hero_cta_ghost')))), /*#__PURE__*/React.createElement("div", {
    style: s.stats
  }, [['01', 'stat_1'], ['02', 'stat_2'], ['03', 'stat_3'], ['04', 'stat_4']].map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      n = _ref2[0],
      k = _ref2[1];
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: s.stat
    }, /*#__PURE__*/React.createElement("div", {
      style: s.statLabel
    }, n), t(k));
  }))));
}
Object.assign(window, {
  Hero: Hero
});