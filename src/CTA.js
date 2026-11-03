"use strict";

// CTA.jsx — light. Split + magnetic + glow que respira.

function CTA() {
  var _useSolynLang = useSolynLang(),
    t = _useSolynLang.t,
    lang = _useSolynLang.lang;
  var headRef = React.useRef(null);
  React.useEffect(function () {
    if (!window.gsap || !window.SplitType || SOLYN_MOTION.reduced) return;
    var split = new SplitType(headRef.current, {
      types: 'chars,words'
    });
    gsap.fromTo(split.chars, {
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
      return split.revert();
    };
  }, [t]);
  var primaryRef = SOLYN_MOTION.useMagnetic(0.4);
  var secondaryRef = SOLYN_MOTION.useMagnetic(0.25);
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
    labelTxt: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#8C8278'
    },
    head: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(72px, 10vw, 140px)',
      lineHeight: 0.95,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: '#1A1715',
      margin: 0
    },
    accent: {
      color: '#F26B1F'
    },
    body: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 18,
      color: '#5C544C',
      lineHeight: 1.7,
      margin: '72px auto 0',
      maxWidth: 640
    },
    btnRow: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      marginTop: 52,
      flexWrap: 'wrap'
    },
    btnPrimary: {
      background: '#1A1715',
      color: '#F5F1EA',
      border: 'none',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 15,
      padding: '20px 32px',
      borderRadius: 4,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    },
    btnOutline: {
      background: 'transparent',
      color: '#1A1715',
      border: '1px solid rgba(26,23,21,0.25)',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 500,
      fontSize: 15,
      padding: '20px 32px',
      borderRadius: 4,
      cursor: 'pointer'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes solynBreathe { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%,-50%) scale(1.15); opacity: 1; } }"), /*#__PURE__*/React.createElement("div", {
    style: s.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: s.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: s.labelRow
  }, /*#__PURE__*/React.createElement("div", {
    style: s.line
  }), /*#__PURE__*/React.createElement("span", {
    style: s.labelTxt
  }, t('cta_label')), /*#__PURE__*/React.createElement("div", {
    style: s.line
  })), /*#__PURE__*/React.createElement("h2", {
    key: lang,
    ref: headRef,
    style: s.head
  }, t('cta_head_1'), " ", /*#__PURE__*/React.createElement("span", {
    style: s.accent
  }, t('cta_head_2'))), /*#__PURE__*/React.createElement("p", {
    style: s.body
  }, t('cta_body')), /*#__PURE__*/React.createElement("div", {
    style: s.btnRow
  }, /*#__PURE__*/React.createElement("a", {
    ref: primaryRef,
    href: "mailto:info.solyn@gmail.com",
    style: s.btnPrimary
  }, t('cta_primary'), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    ref: secondaryRef,
    href: "mailto:info.solyn@gmail.com",
    style: s.btnOutline
  }, t('cta_secondary')))));
}
Object.assign(window, {
  CTA: CTA
});