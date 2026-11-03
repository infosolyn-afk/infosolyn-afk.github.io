"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// VideoSection.jsx — v2. Player propio: poster + botón play, el video se carga recién al tocar.

function VideoSection() {
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t,
    lang = _useSolynLang.lang;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    playing = _React$useState2[0],
    setPlaying = _React$useState2[1];
  var videoRef = React.useRef(null);
  var src = "video/solyn-".concat(lang, ".mp4");
  var poster = "video/solyn-".concat(lang, "-poster.jpg");
  React.useEffect(function () {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [lang]);
  var play = function play() {
    setPlaying(true);
    var v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play()["catch"](function () {});
    }
  };
  var s = {
    wrap: {
      background: '#F5F1EA',
      padding: '120px 52px 100px',
      borderTop: '1px solid rgba(26,23,21,0.08)',
      borderBottom: '1px solid rgba(26,23,21,0.08)'
    },
    inner: {
      maxWidth: 1100,
      margin: '0 auto',
      textAlign: 'center'
    },
    label: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#8C8278',
      marginBottom: 32
    },
    frame: {
      position: 'relative',
      borderRadius: 18,
      overflow: 'hidden',
      background: '#1A1715',
      boxShadow: '0 40px 100px rgba(26,23,21,0.22)',
      aspectRatio: '16 / 9',
      maxWidth: '100%'
    },
    video: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      display: playing ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      background: 'linear-gradient(to top, rgba(26,23,21,0.35), rgba(26,23,21,0) 60%)'
    },
    playBtn: {
      width: 112,
      height: 112,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, #FFB347 0%, #F26B1F 60%, #C44A0F 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 0 14px rgba(242,107,31,0.18), 0 20px 50px rgba(196,74,15,0.4)',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 300ms cubic-bezier(.16,1,.3,1)'
    },
    tri: {
      width: 0,
      height: 0,
      borderTop: '18px solid transparent',
      borderBottom: '18px solid transparent',
      borderLeft: '30px solid #1A1715',
      marginLeft: 8
    },
    or: {
      marginTop: 28,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 15,
      color: '#5C544C',
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    link: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 14,
      color: '#1A1715',
      borderBottom: '1px solid #F26B1F',
      textDecoration: 'none',
      paddingBottom: 2
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "video",
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.label
  }, t('video_label')), /*#__PURE__*/React.createElement("div", {
    style: s.frame
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    style: s.video,
    src: src,
    poster: poster,
    preload: "metadata",
    controls: playing,
    playsInline: true,
    onEnded: function onEnded() {
      return setPlaying(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: s.overlay,
    onClick: play,
    role: "button",
    "aria-label": "Play"
  }, /*#__PURE__*/React.createElement("button", {
    style: s.playBtn,
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.transform = 'scale(1.08)';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.transform = 'scale(1)';
    },
    "aria-label": "Play"
  }, /*#__PURE__*/React.createElement("span", {
    style: s.tri
  })))), /*#__PURE__*/React.createElement("div", {
    style: s.or
  }, /*#__PURE__*/React.createElement("span", null, t('video_or')), /*#__PURE__*/React.createElement("a", {
    href: SOLYN_CALENDLY,
    target: "_blank",
    rel: "noopener",
    style: s.link
  }, "calendly.com/info-solyn/30min"))));
}
Object.assign(window, {
  VideoSection: VideoSection
});