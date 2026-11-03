"use strict";

// Marquee.jsx — velocidad reactiva al scroll.

function Marquee() {
  var trackRef = React.useRef(null);
  var items = ['Client Acquisition', 'Verified Research', 'Personalized Outreach', 'Pre-Qualification', 'Calendar Booking', 'Results-Based', 'Designed for Growth', 'Built on Systems'];
  React.useEffect(function () {
    if (!window.gsap || SOLYN_MOTION.reduced) return;
    var track = trackRef.current;
    if (!track) return;
    var baseSpeed = 0.5; // px/frame
    var scrollVel = 0,
      lastScroll = window.scrollY;
    var xPos = 0;
    var trackWidth = track.scrollWidth / 2;
    var onScroll = function onScroll() {
      var cur = window.scrollY;
      scrollVel = Math.min(8, Math.abs(cur - lastScroll) * 0.3);
      lastScroll = cur;
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    var raf = 0;
    var _tick = function tick() {
      xPos -= baseSpeed + scrollVel;
      if (-xPos >= trackWidth) xPos += trackWidth;
      track.style.transform = "translateX(".concat(xPos, "px)");
      scrollVel *= 0.92;
      raf = requestAnimationFrame(_tick);
    };
    _tick();
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var s = {
    wrap: {
      background: '#1A1715',
      borderTop: '1px solid rgba(245,241,234,0.08)',
      borderBottom: '1px solid rgba(245,241,234,0.08)',
      overflow: 'hidden',
      padding: '22px 0'
    },
    track: {
      display: 'flex',
      gap: 40,
      whiteSpace: 'nowrap',
      width: 'max-content',
      willChange: 'transform'
    },
    group: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    },
    item: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '3.5px',
      textTransform: 'uppercase',
      color: '#F5F1EA',
      display: 'flex',
      alignItems: 'center',
      gap: 40
    },
    dot: {
      color: '#F26B1F'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: s.wrap
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    style: s.track
  }, [0, 1].map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: s.group
    }, items.map(function (tx, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        style: s.item
      }, tx, " ", /*#__PURE__*/React.createElement("span", {
        style: s.dot
      }, "\u2726"));
    }));
  })));
}
Object.assign(window, {
  Marquee: Marquee
});