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
// Numbers.jsx — counters + glow que sigue al cursor.

function Numbers() {
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t;
  var stats = [{
    mono: 'num_1_label',
    value: 0,
    prefix: '$',
    suffix: '',
    desc: 'num_1_desc',
    accent: true
  }, {
    mono: 'num_2_label',
    value: 100,
    prefix: '',
    suffix: '%',
    desc: 'num_2_desc',
    accent: false
  }, {
    mono: 'num_3_label',
    value: 0,
    prefix: '',
    suffix: '',
    desc: 'num_3_desc',
    accent: false
  }];
  var refs = React.useRef([]);
  React.useEffect(function () {
    refs.current.forEach(function (el, i) {
      if (el) SOLYN_MOTION.counter(el, stats[i].value, stats[i].suffix, stats[i].prefix, 2.2);
    });
  }, []);
  var onMove = function onMove(e, i) {
    var c = e.currentTarget;
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', "".concat(e.clientX - r.left, "px"));
    c.style.setProperty('--my', "".concat(e.clientY - r.top, "px"));
  };
  var s = {
    wrap: {
      background: '#F5F1EA',
      padding: '140px 52px',
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
      color: '#F26B1F',
      marginBottom: 52
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      background: 'rgba(26,23,21,0.12)',
      border: '1px solid rgba(26,23,21,0.12)'
    },
    stat: function stat(h) {
      return {
        background: '#F5F1EA',
        padding: '56px 36px',
        position: 'relative',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'background 400ms',
        cursor: 'default',
        overflow: 'hidden',
        backgroundImage: h ? 'radial-gradient(220px circle at var(--mx) var(--my), rgba(242,107,31,0.18), transparent 60%)' : 'none'
      };
    },
    bar: function bar(h) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 2,
        width: '100%',
        background: '#F26B1F',
        transformOrigin: 'left',
        transform: h ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 500ms cubic-bezier(.16,1,.3,1)'
      };
    },
    mono: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 10,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: '#8C8278'
    },
    num: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(88px, 9.5vw, 140px)',
      lineHeight: 0.95,
      letterSpacing: '0.5px',
      color: '#1A1715',
      margin: '24px 0'
    },
    accent: {
      color: '#F26B1F'
    },
    desc: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 16,
      color: '#5C544C',
      lineHeight: 1.7,
      margin: 0,
      maxWidth: 300
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.label
  }, t('numbers_label')), /*#__PURE__*/React.createElement("div", {
    style: s.grid
  }, stats.map(function (st, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: s.stat(hover === i),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      onMouseMove: function onMouseMove(e) {
        return onMove(e, i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: s.bar(hover === i)
    }), /*#__PURE__*/React.createElement("div", {
      style: s.mono
    }, t(st.mono)), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, s.num), st.accent ? s.accent : {})
    }, /*#__PURE__*/React.createElement("span", {
      ref: function ref(el) {
        return refs.current[i] = el;
      }
    }, st.prefix, "0", st.suffix)), /*#__PURE__*/React.createElement("p", {
      style: s.desc
    }, t(st.desc)));
  }))));
}
Object.assign(window, {
  Numbers: Numbers
});