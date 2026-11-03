"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Nav.jsx — light mode SOLYN. Logo PNG (cream bg = invisible seam). CTA magnético. Tilt en logo.

function Nav() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    scrolled = _React$useState2[0],
    setScrolled = _React$useState2[1];
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var ctaRef = SOLYN_MOTION.useMagnetic(0.3);
  var logoRef = SOLYN_MOTION.useTilt(12);
  React.useEffect(function () {
    var onScroll = function onScroll() {
      return setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var s = {
    wrap: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '14px 52px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(245,241,234,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(28px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26,23,21,0.08)' : '1px solid transparent',
      transition: 'background 400ms cubic-bezier(.16,1,.3,1), border-color 400ms'
    },
    logo: {
      height: 38,
      display: 'block'
    },
    // PNG con fondo transparente: el wordmark va directo sobre el crema
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    },
    link: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#5C544C',
      cursor: 'pointer',
      transition: 'color 180ms',
      whiteSpace: 'nowrap'
    },
    divider: {
      width: 1,
      height: 14,
      background: 'rgba(26,23,21,0.15)'
    },
    cta: {
      background: '#1A1715',
      color: '#F5F1EA',
      border: 'none',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 13,
      padding: '12px 22px',
      borderRadius: 4,
      cursor: 'pointer',
      letterSpacing: '0.3px',
      whiteSpace: 'nowrap'
    }
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    ref: logoRef,
    style: {
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.solynLogo || "../../assets/solyn-logo.png",
    style: s.logo,
    alt: "SOLYN"
  })), /*#__PURE__*/React.createElement("div", {
    style: s.right
  }, /*#__PURE__*/React.createElement("a", {
    style: s.link,
    onMouseEnter: function onMouseEnter(e) {
      return e.target.style.color = '#F26B1F';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.target.style.color = '#5C544C';
    }
  }, t('nav_what')), /*#__PURE__*/React.createElement("a", {
    style: s.link,
    onMouseEnter: function onMouseEnter(e) {
      return e.target.style.color = '#F26B1F';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.target.style.color = '#5C544C';
    }
  }, t('nav_guarantee')), /*#__PURE__*/React.createElement("a", {
    style: s.link,
    onMouseEnter: function onMouseEnter(e) {
      return e.target.style.color = '#F26B1F';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.target.style.color = '#5C544C';
    }
  }, t('nav_process')), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement(LangToggle, {
    variant: "light"
  }), /*#__PURE__*/React.createElement("a", {
    ref: ctaRef,
    href: "https://calendly.com/info-solyn/30min",
    target: "_blank",
    rel: "noopener",
    style: _objectSpread(_objectSpread({}, s.cta), {}, {
      display: 'inline-block',
      textDecoration: 'none'
    })
  }, t('nav_cta'), " \u2192")));
}
Object.assign(window, {
  Nav: Nav
});