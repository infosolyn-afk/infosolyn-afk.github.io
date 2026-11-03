"use strict";

// Hero.jsx — v2. Promesa + CTA doble (llamada / video) + esfera 3D + franja de prueba.

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
      var trig = {
        trigger: head.closest('section'),
        start: 'top top',
        end: 'bottom top',
        scrub: true
      };
      var a = gsap.to(ghostRef.current, {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: trig
      });
      var b = gsap.to(sphereWrapRef.current, {
        yPercent: 25,
        scale: 0.85,
        ease: 'none',
        scrollTrigger: trig
      });
      return function () {
        if (split) split.revert();
        a.scrollTrigger && a.scrollTrigger.kill();
        a.kill();
        b.scrollTrigger && b.scrollTrigger.kill();
        b.kill();
      };
    }
    return function () {
      if (split) split.revert();
    };
  }, [lang]);
  var ctaRef = SOLYN_MOTION.useMagnetic(0.3);
  var s = {
    wrap: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 52px 52px',
      paddingTop: 110,
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
      right: '2vw',
      top: '12vh',
      width: 'clamp(260px, 27vw, 400px)',
      height: 'clamp(260px, 27vw, 400px)',
      pointerEvents: 'none',
      willChange: 'transform',
      zIndex: 1
    },
    content: {
      maxWidth: 1400,
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 2
    },
    chip: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 28,
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#5C544C',
      border: '1px solid rgba(26,23,21,0.18)',
      borderRadius: 999,
      padding: '10px 18px',
      background: 'rgba(245,241,234,0.7)'
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#F26B1F',
      display: 'inline-block'
    },
    headline: {
      fontFamily: "'Bebas Neue', Impact, sans-serif",
      fontSize: 'clamp(64px, 9vw, 150px)',
      lineHeight: 0.87,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      margin: 0,
      color: '#1A1715',
      perspective: '1000px',
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
      borderTop: '1px solid rgba(26,23,21,0.12)',
      flexWrap: 'wrap'
    },
    body: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: '#5C544C',
      maxWidth: 520,
      margin: 0
    },
    ctaCol: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14,
      flexShrink: 0
    },
    ctaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
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
      gap: 10,
      textDecoration: 'none'
    },
    ctaGhost: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 400,
      fontSize: 13,
      color: '#5C544C',
      cursor: 'pointer',
      transition: 'color 180ms',
      textDecoration: 'none'
    },
    note: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '1px',
      color: '#8C8278',
      textAlign: 'right',
      maxWidth: 520
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
      fontWeight: 500,
      fontSize: 14,
      color: '#1A1715',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    ref: ghostRef,
    style: s.ghost
  }, "CLIENT ACQUISITION"), /*#__PURE__*/React.createElement("div", {
    ref: sphereWrapRef,
    className: "sphere-wrap",
    style: s.sphereWrap
  }, /*#__PURE__*/React.createElement(HeroSphere, null)), /*#__PURE__*/React.createElement("div", {
    style: s.content
  }, /*#__PURE__*/React.createElement("div", {
    style: s.chip
  }, /*#__PURE__*/React.createElement("span", {
    style: s.dot
  }), t('hero_chip')), /*#__PURE__*/React.createElement("h1", {
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
    className: "cta-col",
    style: s.ctaCol
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-row",
    style: s.ctaRow
  }, /*#__PURE__*/React.createElement("a", {
    ref: ctaRef,
    href: SOLYN_CALENDLY,
    target: "_blank",
    rel: "noopener",
    style: s.ctaPrimary
  }, t('hero_cta'), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#video",
    onClick: function onClick(e) {
      e.preventDefault();
      solynScrollTo('video');
    },
    style: s.ctaGhost
  }, t('hero_cta_ghost'))), /*#__PURE__*/React.createElement("div", {
    className: "cta-note",
    style: s.note
  }, t('hero_note')))), /*#__PURE__*/React.createElement("div", {
    className: "proof-grid",
    style: s.stats
  }, ['proof_1', 'proof_2', 'proof_3', 'proof_4'].map(function (k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: s.stat
    }, /*#__PURE__*/React.createElement("span", {
      style: s.dot
    }), t(k));
  }))));
}
Object.assign(window, {
  Hero: Hero
});