"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Sections.jsx — v2: HowItWorks (3 pasos), Why (4 razones), Accordion, Audit (chequeo de proveedor), FAQ, CTA.

var SEC = {
  wrap: function wrap(extra) {
    return _objectSpread({
      background: '#F5F1EA',
      padding: '150px 52px',
      borderBottom: '1px solid rgba(26,23,21,0.08)'
    }, extra);
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
    margin: 0
  },
  muted: {
    color: '#8C8278'
  },
  sub: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 1.7,
    color: '#5C544C',
    margin: '28px 0 0',
    maxWidth: 640
  },
  mono: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
    letterSpacing: '2px',
    color: '#8C8278'
  },
  cardT: {
    fontFamily: "'Bebas Neue', Impact, sans-serif",
    fontSize: 'clamp(30px, 3.2vw, 44px)',
    lineHeight: 1,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    margin: '14px 0 12px',
    color: '#1A1715'
  },
  cardD: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 300,
    fontSize: 16,
    color: '#5C544C',
    lineHeight: 1.75,
    margin: 0
  },
  btn: {
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
    gap: 10,
    textDecoration: 'none'
  }
};
function useRevealCards(ref) {
  React.useEffect(function () {
    if (!window.gsap || !window.ScrollTrigger || SOLYN_MOTION.reduced || !ref.current) return;
    var tweens = _toConsumableArray(ref.current.querySelectorAll('[data-card]')).map(function (c, i) {
      return gsap.fromTo(c, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay: i * 0.08,
        scrollTrigger: {
          trigger: c,
          start: 'top 88%',
          once: true
        }
      });
    });
    return function () {
      return tweens.forEach(function (tw) {
        tw.scrollTrigger && tw.scrollTrigger.kill();
        tw.kill();
      });
    };
  }, []);
}
function HowItWorks() {
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var ref = React.useRef(null);
  useRevealCards(ref);
  var steps = [['01', 'how_1_t', 'how_1_d'], ['02', 'how_2_t', 'how_2_d'], ['03', 'how_3_t', 'how_3_d']];
  var s = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      marginTop: 72,
      background: 'rgba(26,23,21,0.12)',
      border: '1px solid rgba(26,23,21,0.12)'
    },
    cell: {
      background: '#F5F1EA',
      padding: '40px 32px 44px',
      position: 'relative',
      minHeight: 260
    },
    num: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 88,
      lineHeight: 0.85,
      color: '#F26B1F',
      letterSpacing: '-0.02em',
      textShadow: '4px 4px 0 #1A1715'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    ref: ref,
    style: SEC.wrap()
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.label
  }, t('how_label')), /*#__PURE__*/React.createElement("h2", {
    style: SEC.head
  }, t('how_head_1'), " ", /*#__PURE__*/React.createElement("span", {
    style: SEC.muted
  }, t('how_head_2'))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: s.grid
  }, steps.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      n = _ref2[0],
      tk = _ref2[1],
      dk = _ref2[2];
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      "data-card": true,
      style: s.cell
    }, /*#__PURE__*/React.createElement("div", {
      style: s.num
    }, n), /*#__PURE__*/React.createElement("h3", {
      style: SEC.cardT
    }, t(tk)), /*#__PURE__*/React.createElement("p", {
      style: SEC.cardD
    }, t(dk)));
  }))));
}
function Why() {
  var _useSolynLang2 = useSolynLang(),
    t = _useSolynLang2.t;
  var ref = React.useRef(null);
  useRevealCards(ref);
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var items = [['why_1_t', 'why_1_d'], ['why_2_t', 'why_2_d'], ['why_3_t', 'why_3_d'], ['why_4_t', 'why_4_d']];
  var s = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      marginTop: 72
    },
    card: function card(h) {
      return {
        padding: '40px 36px',
        borderRadius: 16,
        border: '1px solid rgba(26,23,21,0.12)',
        background: h ? 'rgba(242,107,31,0.06)' : '#F5F1EA',
        transition: 'background 400ms, transform 500ms cubic-bezier(.16,1,.3,1)',
        transform: h ? 'translateY(-4px)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      };
    },
    bar: function bar(h) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 3,
        width: '100%',
        background: '#F26B1F',
        transformOrigin: 'left',
        transform: h ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 500ms cubic-bezier(.16,1,.3,1)'
      };
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    ref: ref,
    style: SEC.wrap()
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.label
  }, t('why_label')), /*#__PURE__*/React.createElement("h2", {
    style: SEC.head
  }, t('why_head_1'), " ", /*#__PURE__*/React.createElement("span", {
    style: SEC.muted
  }, t('why_head_2'))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: s.grid
  }, items.map(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      tk = _ref4[0],
      dk = _ref4[1];
    return /*#__PURE__*/React.createElement("div", {
      key: tk,
      "data-card": true,
      style: s.card(hover === i),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: s.bar(hover === i)
    }), /*#__PURE__*/React.createElement("div", {
      style: SEC.mono
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
      style: SEC.cardT
    }, t(tk)), /*#__PURE__*/React.createElement("p", {
      style: SEC.cardD
    }, t(dk)));
  }))));
}
function Accordion(_ref5) {
  var items = _ref5.items,
    _ref5$dark = _ref5.dark,
    dark = _ref5$dark === void 0 ? false : _ref5$dark,
    _ref5$defaultOpen = _ref5.defaultOpen,
    defaultOpen = _ref5$defaultOpen === void 0 ? 0 : _ref5$defaultOpen;
  var _React$useState3 = React.useState(defaultOpen),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  var ink = dark ? '#F5F1EA' : '#1A1715',
    line = dark ? 'rgba(245,241,234,0.14)' : 'rgba(26,23,21,0.12)',
    sec = dark ? 'rgba(245,241,234,0.72)' : '#5C544C';
  var s = {
    item: function item(o) {
      return {
        borderTop: "1px solid ".concat(line),
        background: o ? dark ? 'rgba(242,107,31,0.08)' : 'rgba(242,107,31,0.06)' : 'transparent',
        transition: 'background 300ms'
      };
    },
    btn: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '26px 24px',
      display: 'grid',
      gridTemplateColumns: '48px 1fr 28px',
      gap: 18,
      alignItems: 'center',
      color: ink
    },
    n: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '2px',
      color: '#8C8278'
    },
    q: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.35,
      color: ink,
      margin: 0
    },
    chev: function chev(o) {
      return {
        fontFamily: "'DM Mono', monospace",
        fontSize: 18,
        color: '#F26B1F',
        transform: o ? 'rotate(45deg)' : 'none',
        transition: 'transform 300ms cubic-bezier(.16,1,.3,1)',
        textAlign: 'center'
      };
    },
    a: function a(o) {
      return {
        maxHeight: o ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 500ms cubic-bezier(.16,1,.3,1)'
      };
    },
    aIn: {
      padding: '0 24px 28px 90px',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.75,
      color: sec,
      margin: 0,
      maxWidth: 820
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid ".concat(line)
    }
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: s.item(open === i)
    }, /*#__PURE__*/React.createElement("button", {
      style: s.btn,
      onClick: function onClick() {
        return setOpen(open === i ? -1 : i);
      },
      "aria-expanded": open === i
    }, /*#__PURE__*/React.createElement("span", {
      style: s.n
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
      style: s.q
    }, it.q), /*#__PURE__*/React.createElement("span", {
      style: s.chev(open === i)
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: s.a(open === i)
    }, /*#__PURE__*/React.createElement("p", {
      className: "acc-a",
      style: s.aIn
    }, it.a)));
  }));
}
function Audit() {
  var _useSolynLang3 = useSolynLang(),
    t = _useSolynLang3.t;
  var items = [1, 2, 3, 4, 5, 6].map(function (i) {
    return {
      q: t("audit_".concat(i, "_q")),
      a: t("audit_".concat(i, "_a"))
    };
  });
  var btnRef = SOLYN_MOTION.useMagnetic(0.3);
  var s = {
    wrap: {
      background: '#ECE6DB',
      padding: '150px 52px',
      borderBottom: '1px solid rgba(26,23,21,0.08)'
    },
    inner: {
      maxWidth: 1000,
      margin: '0 auto'
    },
    close: {
      marginTop: 56,
      padding: '44px 40px',
      borderRadius: 16,
      background: '#1A1715',
      color: '#F5F1EA',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    },
    closeT: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(36px, 4vw, 56px)',
      lineHeight: 0.95,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      margin: '0 0 12px'
    },
    closeD: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 16,
      color: 'rgba(245,241,234,0.75)',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 520
    },
    btn: _objectSpread(_objectSpread({}, SEC.btn), {}, {
      background: '#F26B1F',
      color: '#1A1715',
      flexShrink: 0
    })
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "audit",
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.label
  }, t('audit_label')), /*#__PURE__*/React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, SEC.head), {}, {
      fontSize: 'clamp(48px, 7vw, 88px)'
    })
  }, t('audit_head')), /*#__PURE__*/React.createElement("p", {
    style: SEC.sub
  }, t('audit_sub')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: items
  })), /*#__PURE__*/React.createElement("div", {
    style: s.close
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: s.closeT
  }, t('audit_close_t')), /*#__PURE__*/React.createElement("p", {
    style: s.closeD
  }, t('audit_close_d'))), /*#__PURE__*/React.createElement("a", {
    ref: btnRef,
    href: SOLYN_CALENDLY,
    target: "_blank",
    rel: "noopener",
    style: s.btn
  }, t('audit_cta'), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")))));
}
function FAQ() {
  var _useSolynLang4 = useSolynLang(),
    t = _useSolynLang4.t;
  var items = [1, 2, 3, 4, 5, 6].map(function (i) {
    return {
      q: t("faq_".concat(i, "_q")),
      a: t("faq_".concat(i, "_a"))
    };
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: SEC.wrap()
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, SEC.inner), {}, {
      maxWidth: 1000
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: SEC.label
  }, t('faq_label')), /*#__PURE__*/React.createElement("h2", {
    style: _objectSpread(_objectSpread({}, SEC.head), {}, {
      fontSize: 'clamp(48px, 7vw, 88px)'
    })
  }, t('faq_head')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: items,
    defaultOpen: -1
  }))));
}
function CTA() {
  var _useSolynLang5 = useSolynLang(),
    t = _useSolynLang5.t;
  var headRef = React.useRef(null);
  var _useSolynLang6 = useSolynLang(),
    lang = _useSolynLang6.lang;
  React.useEffect(function () {
    if (!window.gsap || !window.SplitType || SOLYN_MOTION.reduced) return;
    var split = new SplitType(headRef.current, {
      types: 'chars,words'
    });
    var tw = gsap.fromTo(split.chars, {
      y: '100%',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: headRef.current,
        start: 'top 80%',
        once: true
      }
    });
    return function () {
      tw.scrollTrigger && tw.scrollTrigger.kill();
      tw.kill();
      split.revert();
    };
  }, [lang]);
  var primaryRef = SOLYN_MOTION.useMagnetic(0.4);
  var s = {
    wrap: {
      background: '#F5F1EA',
      padding: '180px 52px 160px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      borderBottom: '1px solid rgba(26,23,21,0.08)'
    },
    glow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 900,
      height: 900,
      maxWidth: '100vw',
      background: 'radial-gradient(circle, rgba(242,107,31,0.22) 0%, transparent 60%)',
      pointerEvents: 'none',
      animation: 'solynBreathe 6s ease-in-out infinite'
    },
    inner: {
      position: 'relative',
      maxWidth: 1100,
      margin: '0 auto'
    },
    labelRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'center',
      marginBottom: 52
    },
    line: {
      flex: 1,
      maxWidth: 80,
      height: 1,
      background: 'rgba(26,23,21,0.15)'
    },
    head: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(64px, 9.5vw, 132px)',
      lineHeight: 0.95,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: '#1A1715',
      margin: 0
    },
    body: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 18,
      color: '#5C544C',
      lineHeight: 1.7,
      margin: '56px auto 0',
      maxWidth: 640
    },
    btnPrimary: _objectSpread(_objectSpread({}, SEC.btn), {}, {
      padding: '20px 32px',
      marginTop: 44
    }),
    or: {
      marginTop: 24,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 14,
      color: '#8C8278'
    },
    pill: {
      display: 'inline-block',
      marginTop: 12,
      fontFamily: "'DM Mono', monospace",
      fontSize: 15,
      letterSpacing: '0.5px',
      padding: '12px 20px',
      borderRadius: 8,
      background: 'rgba(26,23,21,0.06)',
      color: '#1A1715',
      textDecoration: 'none',
      border: '1px solid rgba(26,23,21,0.12)'
    },
    email: {
      marginTop: 36,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 14,
      color: '#8C8278'
    },
    emailLink: {
      color: '#1A1715',
      textDecoration: 'none',
      borderBottom: '1px solid #F26B1F',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "cta",
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.labelRow
  }, /*#__PURE__*/React.createElement("div", {
    style: s.line
  }), /*#__PURE__*/React.createElement("span", {
    style: SEC.label,
    className: "cta-label"
  }, t('cta_label')), /*#__PURE__*/React.createElement("div", {
    style: s.line
  })), /*#__PURE__*/React.createElement("h2", {
    key: lang,
    ref: headRef,
    style: s.head
  }, t('cta_head_1'), /*#__PURE__*/React.createElement("br", null), t('cta_head_2')), /*#__PURE__*/React.createElement("p", {
    style: s.body
  }, t('cta_body')), /*#__PURE__*/React.createElement("a", {
    ref: primaryRef,
    href: SOLYN_CALENDLY,
    target: "_blank",
    rel: "noopener",
    style: s.btnPrimary
  }, t('cta_primary'), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: s.or
  }, t('cta_or')), /*#__PURE__*/React.createElement("a", {
    href: SOLYN_CALENDLY,
    target: "_blank",
    rel: "noopener",
    style: s.pill
  }, "calendly.com/info-solyn/30min"), /*#__PURE__*/React.createElement("div", {
    style: s.email
  }, t('cta_email_label'), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + SOLYN_EMAIL,
    style: s.emailLink
  }, SOLYN_EMAIL))), /*#__PURE__*/React.createElement("style", null, "@keyframes solynBreathe { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 1; } 50% { transform: translate(-50%,-50%) scale(1.12); opacity: 0.75; } }"));
}
Object.assign(window, {
  HowItWorks: HowItWorks,
  Why: Why,
  Accordion: Accordion,
  Audit: Audit,
  FAQ: FAQ,
  CTA: CTA
});