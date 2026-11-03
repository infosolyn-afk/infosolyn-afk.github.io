"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Loader.jsx — overlay cream con SOLYN, fade out al estar listo.

function Loader() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    done = _React$useState2[0],
    setDone = _React$useState2[1];
  React.useEffect(function () {
    var t = setTimeout(function () {
      return setDone(true);
    }, 1100);
    return function () {
      return clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 999,
      background: '#F5F1EA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: done ? 'none' : 'auto',
      opacity: done ? 0 : 1,
      transition: 'opacity 700ms cubic-bezier(.16,1,.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, #FFB347 0%, #F26B1F 60%, #C44A0F 100%)',
      animation: 'solynPulse 1.2s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: 22,
      color: '#1A1715',
      letterSpacing: '0.5px'
    }
  }, "SOLYN")), /*#__PURE__*/React.createElement("style", null, "@keyframes solynPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.15); opacity: 0.7; } }"));
}
Object.assign(window, {
  Loader: Loader
});