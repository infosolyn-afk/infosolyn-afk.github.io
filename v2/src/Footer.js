"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Footer.jsx — dark. Logo SOLYN + email real + LangToggle.

function Footer() {
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var logoRef = SOLYN_MOTION.useTilt(10);
  var s = {
    wrap: {
      background: '#1A1715',
      padding: '80px 52px 40px',
      borderTop: '1px solid rgba(245,241,234,0.08)'
    },
    inner: {
      maxWidth: 1400,
      margin: '0 auto'
    },
    top: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 60,
      paddingBottom: 60,
      borderBottom: '1px solid rgba(245,241,234,0.12)'
    },
    brandBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    },
    logoWrap: {
      display: 'inline-block',
      width: 'fit-content'
    },
    // sin chip crema: wordmark en crema directo sobre el fondo oscuro
    logo: {
      height: 36,
      display: 'block'
    },
    desc: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 14,
      color: 'rgba(245,241,234,0.7)',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 340
    },
    email: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 15,
      color: '#F5F1EA',
      marginTop: 8,
      display: 'inline-block',
      borderBottom: '1px solid #F26B1F',
      paddingBottom: 2,
      width: 'fit-content',
      textDecoration: 'none'
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    },
    colLabel: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#F26B1F',
      marginBottom: 8
    },
    link: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 400,
      fontSize: 14,
      color: 'rgba(245,241,234,0.7)',
      cursor: 'pointer',
      transition: 'color 180ms',
      textDecoration: 'none'
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 32,
      gap: 24,
      flexWrap: 'wrap'
    },
    copy: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: 'rgba(245,241,234,0.5)'
    },
    right: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    },
    socialLink: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: 'rgba(245,241,234,0.7)',
      cursor: 'pointer',
      transition: 'color 180ms',
      textDecoration: 'none'
    }
  };
  var onEnter = function onEnter(e) {
    return e.target.style.color = '#F26B1F';
  };
  var onLeave = function onLeave(e) {
    return e.target.style.color = 'rgba(245,241,234,0.7)';
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: s.top
  }, /*#__PURE__*/React.createElement("div", {
    style: s.brandBlock
  }, /*#__PURE__*/React.createElement("div", {
    ref: logoRef,
    style: s.logoWrap
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.solynLogoLight || "assets/solyn-logo-light.png",
    style: s.logo,
    alt: "SOLYN"
  })), /*#__PURE__*/React.createElement("p", {
    style: s.desc
  }, t('footer_desc')), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info.solyn@gmail.com",
    style: s.email
  }, "info.solyn@gmail.com")), /*#__PURE__*/React.createElement("div", {
    style: s.col
  }, /*#__PURE__*/React.createElement("div", {
    style: s.colLabel
  }, t('footer_nav_label')), [['how', 'footer_nav_1'], ['guarantee', 'footer_nav_2'], ['audit', 'footer_nav_3'], ['faq', 'footer_nav_4']].map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      id = _ref2[0],
      k = _ref2[1];
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: '#' + id,
      onClick: function onClick(e) {
        e.preventDefault();
        solynScrollTo(id);
      },
      style: s.link,
      onMouseEnter: onEnter,
      onMouseLeave: onLeave
    }, t(k));
  })), /*#__PURE__*/React.createElement("div", {
    style: s.col
  }, /*#__PURE__*/React.createElement("div", {
    style: s.colLabel
  }, t('footer_contact_label')), /*#__PURE__*/React.createElement("a", {
    href: "https://calendly.com/info-solyn/30min",
    target: "_blank",
    rel: "noopener",
    style: s.link,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, t('footer_contact_1')), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info.solyn@gmail.com",
    style: s.link,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, t('footer_contact_2')))), /*#__PURE__*/React.createElement("div", {
    style: s.bottom
  }, /*#__PURE__*/React.createElement("div", {
    style: s.copy
  }, t('footer_copy')), /*#__PURE__*/React.createElement("div", {
    style: s.right
  }, /*#__PURE__*/React.createElement(LangToggle, {
    variant: "dark"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info.solyn@gmail.com",
    style: s.socialLink,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, "Email")))));
}
Object.assign(window, {
  Footer: Footer
});