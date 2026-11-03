"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// i18n.jsx — SOLYN v2 bilingüe. Traducción por intención, no palabra-por-palabra.

var SOLYN_CALENDLY = 'https://calendly.com/info-solyn/30min';
var SOLYN_EMAIL = 'info.solyn@gmail.com';
var SOLYN_STRINGS = {
  en: {
    nav_how: 'How it works',
    nav_guarantee: 'Guarantee',
    nav_faq: 'FAQ',
    nav_cta: 'Book a call',
    hero_chip: 'B2B client acquisition · Pay on results',
    hero_head_1: 'Qualified meetings',
    hero_head_2: 'on your calendar.',
    hero_body: 'We identify, contact and qualify your ideal clients, and book them for you. You pay nothing until we deliver.',
    hero_cta: 'Book a call',
    hero_cta_ghost: 'Watch the video (1:30) ↓',
    hero_note: 'Tell us who you sell to. We\'ll show you how we\'d reach them.',
    proof_1: '$0 upfront',
    proof_2: '100% pre-qualified',
    proof_3: 'If we miss, you keep everything',
    proof_4: 'Results-based model',
    video_label: 'Watch: how SOLYN books meetings (1:30)',
    video_or: 'or book directly:',
    how_label: 'How it works',
    how_head_1: 'Three steps.',
    how_head_2: 'One result.',
    how_1_t: 'Tell us who you sell to',
    how_1_d: 'One 30-minute call. We map your ideal client: industry, size, role, geography and the problem you solve.',
    how_2_t: 'We build the machine',
    how_2_d: 'A verified database built company by company, personalized messages and qualification against your criteria.',
    how_3_t: 'Meetings come in',
    how_3_d: 'Pre-qualified prospects, booked on your calendar. You show up and close.',
    why_label: 'Why SOLYN',
    why_head_1: 'Most businesses wait.',
    why_head_2: 'We don\'t.',
    why_1_t: 'No purchased lists',
    why_1_d: 'Every contact is researched and verified, company by company, person by person. Fewer bounces, better conversations.',
    why_2_t: 'One message per person',
    why_2_d: 'No mass templates. Each message is written for that person and that company, designed to open a real conversation.',
    why_3_t: 'Your criteria decide',
    why_3_d: 'You define what a qualified meeting is. Only the people who meet it reach your calendar.',
    why_4_t: 'Zero risk for you',
    why_4_d: 'We fund the research, tools and infrastructure. You pay only for delivered meetings.',
    guarantee_label: 'Our Commitment',
    guarantee_ghost: 'GUARANTEED',
    guarantee_head_1: 'We take all the risk.',
    guarantee_head_2: 'You keep all the reward.',
    guarantee_c1_t: 'We cover all costs',
    guarantee_c1_d: 'Research, tools, databases, outreach infrastructure — we pay for everything.',
    guarantee_c2_t: 'You pay only on results',
    guarantee_c2_d: 'Meetings delivered on your calendar, qualified to your spec. That\'s the trigger.',
    guarantee_c3_t: 'You keep everything',
    guarantee_c3_d: 'If we miss, the list, the research, the messages — you keep it all. No clawback.',
    guarantee_footer: 'We carry the full financial risk ourselves. If we don\'t deliver — you owe us nothing. You keep everything we built.',
    audit_label: 'The vendor check',
    audit_head: 'Already working with a lead gen vendor?',
    audit_sub: 'Ask them these six questions. Whether you work with one today or you\'re vetting a new one, the answers tell you a lot.',
    audit_1_q: 'Do you charge upfront, before any result?',
    audit_1_a: 'Fail: if you pay before seeing a single meeting, all the risk is yours. The vendor gets paid whether it works or not.',
    audit_2_q: 'Do you buy lists, or build the database for me?',
    audit_2_a: 'Fail: purchased lists mean bounces, wrong contacts and burned domains. A database built for you is researched company by company.',
    audit_3_q: 'Who qualifies each lead, and with which criteria?',
    audit_3_a: 'Fail: if the criteria aren\'t yours, your calendar fills up with curious people who were never going to buy.',
    audit_4_q: 'Are the messages written per person, or mass templates?',
    audit_4_a: 'Fail: a template sent to thousands reads like a template. Replies come from messages that could only have been written to that person.',
    audit_5_q: 'What happens to the list and the research if I stop?',
    audit_5_a: 'Fail: if you don\'t keep them, you paid for something that was never yours.',
    audit_6_q: 'Do you guarantee meetings, or just "activity"?',
    audit_6_a: 'Fail: emails sent and "touches" are not meetings. The only metric that matters is qualified meetings on your calendar.',
    audit_close_t: 'Failed even one? You deserve better.',
    audit_close_d: 'These aren\'t nice-to-haves. They\'re the baseline for client acquisition that actually delivers.',
    audit_cta: 'Book a call',
    faq_label: 'Questions',
    faq_head: 'What people ask us before the call.',
    faq_1_q: 'What counts as a qualified meeting?',
    faq_1_a: 'A meeting with a person who meets the criteria we define together before starting: role, company size, industry, and a real problem your offer solves. If it doesn\'t meet them, it doesn\'t count and you don\'t pay for it.',
    faq_2_q: 'How much does it cost?',
    faq_2_a: 'You pay per delivered qualified meeting. There is no upfront fee and no monthly retainer: we cover the research, tools and infrastructure. The price per meeting depends on your market and is agreed on the call.',
    faq_3_q: 'What do you need from me?',
    faq_3_a: 'A 30-minute call to define your ideal client, access to a calendar for bookings, and a quick review of the qualification criteria. After that, you only show up to the meetings.',
    faq_4_q: 'What if you don\'t deliver?',
    faq_4_a: 'You owe us nothing. And you keep everything we built for you: the list, the research and the messages.',
    faq_5_q: 'Which businesses is this for?',
    faq_5_a: 'B2B companies selling a service or product whose ticket justifies a one-to-one meeting: agencies, consultancies, software, professional services and industrial suppliers, among others. If you\'re not sure, the call will tell you.',
    faq_6_q: 'When do the first meetings arrive?',
    faq_6_a: 'It depends on your market and how specific your ideal client is. We set a realistic timeline on the call, before you commit to anything.',
    cta_label: 'Ready?',
    cta_head_1: 'Your next meetings',
    cta_head_2: 'start with one call.',
    cta_body: 'Tell us who you want to reach. We\'ll show you how we\'d reach them, in 30 minutes.',
    cta_primary: 'Book a call',
    cta_or: 'or use the link directly',
    cta_email_label: 'Prefer email?',
    footer_desc: 'B2B client acquisition. Results-based. You pay nothing until we deliver qualified meetings on your calendar.',
    footer_nav_label: 'Navigate',
    footer_contact_label: 'Contact',
    footer_copy: '© 2026 SOLYN — All rights reserved',
    footer_nav_1: 'How it works',
    footer_nav_2: 'Guarantee',
    footer_nav_3: 'Vendor check',
    footer_nav_4: 'FAQ',
    footer_contact_1: 'Book a call',
    footer_contact_2: 'Send an email'
  },
  es: {
    nav_how: 'Cómo funciona',
    nav_guarantee: 'Garantía',
    nav_faq: 'Preguntas',
    nav_cta: 'Agendá una llamada',
    hero_chip: 'Captación de clientes B2B · Pago por resultados',
    hero_head_1: 'Reuniones calificadas',
    hero_head_2: 'en tu calendario.',
    hero_body: 'Identificamos, contactamos y calificamos a tus clientes ideales, y te los agendamos. No pagás nada hasta que entregamos.',
    hero_cta: 'Agendá una llamada',
    hero_cta_ghost: 'Mirá el video (1:30) ↓',
    hero_note: 'Contanos a quién le vendés. Te mostramos cómo lo alcanzaríamos.',
    proof_1: '$0 por adelantado',
    proof_2: '100% pre-calificados',
    proof_3: 'Si fallamos, te quedás con todo',
    proof_4: 'Pago por resultados',
    video_label: 'Mirá: cómo SOLYN agenda reuniones (1:30)',
    video_or: 'o agendá directo:',
    how_label: 'Cómo funciona',
    how_head_1: 'Tres pasos.',
    how_head_2: 'Un resultado.',
    how_1_t: 'Contanos a quién le vendés',
    how_1_d: 'Una llamada de 30 minutos. Definimos tu cliente ideal: sector, tamaño, rol, geografía y el problema que resolvés.',
    how_2_t: 'Construimos la máquina',
    how_2_d: 'Base de datos verificada empresa por empresa, mensajes personalizados y calificación con tus criterios.',
    how_3_t: 'Llegan las reuniones',
    how_3_d: 'Prospectos pre-calificados, agendados en tu calendario. Vos entrás y cerrás.',
    why_label: 'Por qué SOLYN',
    why_head_1: 'La mayoría espera.',
    why_head_2: 'Nosotros no.',
    why_1_t: 'Sin listas compradas',
    why_1_d: 'Cada contacto se investiga y verifica, empresa por empresa, persona por persona. Menos rebotes, mejores conversaciones.',
    why_2_t: 'Un mensaje por persona',
    why_2_d: 'Sin plantillas masivas. Cada mensaje está escrito para esa persona y esa empresa, pensado para abrir una conversación real.',
    why_3_t: 'Tus criterios deciden',
    why_3_d: 'Vos definís qué es una reunión calificada. Solo quien los cumple llega a tu calendario.',
    why_4_t: 'Cero riesgo para vos',
    why_4_d: 'Nosotros financiamos la investigación, las herramientas y la infraestructura. Pagás solo por reuniones entregadas.',
    guarantee_label: 'Nuestro compromiso',
    guarantee_ghost: 'GARANTIZADO',
    guarantee_head_1: 'Nosotros asumimos todo el riesgo.',
    guarantee_head_2: 'Vos te llevás toda la recompensa.',
    guarantee_c1_t: 'Cubrimos todos los costos',
    guarantee_c1_d: 'Investigación, herramientas, bases de datos, infraestructura — lo pagamos todo nosotros.',
    guarantee_c2_t: 'Pagás solo por resultados',
    guarantee_c2_d: 'Reuniones agendadas en tu calendario, calificadas según tu criterio. Ese es el disparador.',
    guarantee_c3_t: 'Te quedás con todo',
    guarantee_c3_d: 'Si fallamos, la lista, la investigación, los mensajes — todo es tuyo. Sin devoluciones.',
    guarantee_footer: 'Asumimos nosotros todo el riesgo financiero. Si no entregamos — no nos debés nada. Te quedás con todo lo que construimos.',
    audit_label: 'Chequeo de proveedor',
    audit_head: '¿Ya trabajás con un proveedor de leads?',
    audit_sub: 'Hacele estas seis preguntas. Trabajes con uno hoy o estés evaluando a uno nuevo, las respuestas dicen mucho.',
    audit_1_q: '¿Cobrás por adelantado, antes de cualquier resultado?',
    audit_1_a: 'Falla: si pagás antes de ver una sola reunión, el riesgo es todo tuyo. El proveedor cobra funcione o no.',
    audit_2_q: '¿Comprás listas o construís la base para mí?',
    audit_2_a: 'Falla: las listas compradas traen rebotes, contactos equivocados y dominios quemados. Una base construida para vos se investiga empresa por empresa.',
    audit_3_q: '¿Quién califica cada lead y con qué criterios?',
    audit_3_a: 'Falla: si los criterios no son tuyos, tu agenda se llena de curiosos que nunca iban a comprar.',
    audit_4_q: '¿Los mensajes se escriben por persona o son plantillas masivas?',
    audit_4_a: 'Falla: una plantilla enviada a miles se lee como plantilla. Las respuestas llegan de mensajes que solo podían estar escritos para esa persona.',
    audit_5_q: '¿Qué pasa con la lista y la investigación si corto el servicio?',
    audit_5_a: 'Falla: si no te las quedás, pagaste por algo que nunca fue tuyo.',
    audit_6_q: '¿Garantizás reuniones o solo "actividad"?',
    audit_6_a: 'Falla: emails enviados y "toques" no son reuniones. La única métrica que importa son reuniones calificadas en tu calendario.',
    audit_close_t: '¿Falló en alguna? Merecés algo mejor.',
    audit_close_d: 'No son detalles. Son la base de una captación de clientes que de verdad entrega.',
    audit_cta: 'Agendá una llamada',
    faq_label: 'Preguntas',
    faq_head: 'Lo que nos preguntan antes de la llamada.',
    faq_1_q: '¿Qué cuenta como reunión calificada?',
    faq_1_a: 'Una reunión con una persona que cumple los criterios que definimos juntos antes de empezar: rol, tamaño de empresa, sector y un problema real que tu oferta resuelve. Si no los cumple, no cuenta y no la pagás.',
    faq_2_q: '¿Cuánto cuesta?',
    faq_2_a: 'Pagás por reunión calificada entregada. No hay pago inicial ni abono mensual: la investigación, las herramientas y la infraestructura las cubrimos nosotros. El precio por reunión depende de tu mercado y se acuerda en la llamada.',
    faq_3_q: '¿Qué necesitan de mí?',
    faq_3_a: 'Una llamada de 30 minutos para definir tu cliente ideal, acceso a un calendario para agendar y una revisión rápida de los criterios de calificación. Después, solo tenés que presentarte a las reuniones.',
    faq_4_q: '¿Qué pasa si no entregan?',
    faq_4_a: 'No nos debés nada. Y te quedás con todo lo que construimos para vos: la lista, la investigación y los mensajes.',
    faq_5_q: '¿Para qué empresas sirve?',
    faq_5_a: 'Empresas B2B que venden un servicio o producto cuyo ticket justifica una reunión uno a uno: agencias, consultoras, software, servicios profesionales y proveedores industriales, entre otras. Si no estás seguro, la llamada lo aclara.',
    faq_6_q: '¿Cuándo llegan las primeras reuniones?',
    faq_6_a: 'Depende de tu mercado y de qué tan específico sea tu cliente ideal. En la llamada definimos un plazo realista, antes de que te comprometas a nada.',
    cta_label: '¿Listo?',
    cta_head_1: 'Tus próximas reuniones',
    cta_head_2: 'empiezan con una llamada.',
    cta_body: 'Contanos a quién querés llegar. Te mostramos cómo lo alcanzaríamos, en 30 minutos.',
    cta_primary: 'Agendá una llamada',
    cta_or: 'o usá el link directo',
    cta_email_label: '¿Preferís email?',
    footer_desc: 'Captación de clientes B2B. Pago por resultados. No pagás nada hasta que entregamos reuniones calificadas en tu calendario.',
    footer_nav_label: 'Navegar',
    footer_contact_label: 'Contacto',
    footer_copy: '© 2026 SOLYN — Todos los derechos reservados',
    footer_nav_1: 'Cómo funciona',
    footer_nav_2: 'Garantía',
    footer_nav_3: 'Chequeo de proveedor',
    footer_nav_4: 'Preguntas',
    footer_contact_1: 'Agendá una llamada',
    footer_contact_2: 'Enviá un email'
  }
};
var SolynLangContext = React.createContext({
  lang: 'en',
  setLang: function setLang() {},
  t: function t(k) {
    return k;
  }
});
function SolynLangProvider(_ref) {
  var children = _ref.children;
  var _React$useState = React.useState(function () {
      try {
        var saved = localStorage.getItem('solyn_lang');
        if (saved === 'en' || saved === 'es') return saved;
      } catch (_unused) {}
      try {
        var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        if (langs.some(function (l) {
          return String(l).toLowerCase().startsWith('es');
        })) return 'es';
      } catch (_unused2) {}
      return 'en';
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    lang = _React$useState2[0],
    setLangState = _React$useState2[1];
  var setLang = React.useCallback(function (next) {
    setLangState(next);
    try {
      localStorage.setItem('solyn_lang', next);
    } catch (_unused3) {}
    document.documentElement.lang = next;
  }, []);
  React.useEffect(function () {
    document.documentElement.lang = lang;
  }, [lang]);
  var t = React.useCallback(function (key) {
    var _ref2, _dict$key;
    var dict = SOLYN_STRINGS[lang] || SOLYN_STRINGS.en;
    return (_ref2 = (_dict$key = dict[key]) !== null && _dict$key !== void 0 ? _dict$key : SOLYN_STRINGS.en[key]) !== null && _ref2 !== void 0 ? _ref2 : key;
  }, [lang]);
  return /*#__PURE__*/React.createElement(SolynLangContext.Provider, {
    value: {
      lang: lang,
      setLang: setLang,
      t: t
    }
  }, children);
}
function useSolynLang() {
  return React.useContext(SolynLangContext);
}
function LangToggle(_ref3) {
  var _ref3$variant = _ref3.variant,
    variant = _ref3$variant === void 0 ? 'light' : _ref3$variant;
  var _useSolynLang = useSolynLang(),
    lang = _useSolynLang.lang,
    setLang = _useSolynLang.setLang;
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hover = _React$useState4[0],
    setHover = _React$useState4[1];
  var isLight = variant === 'light';
  var baseMuted = isLight ? 'rgba(26,23,21,0.45)' : 'rgba(245,241,234,0.55)';
  var baseActive = isLight ? '#1A1715' : '#F5F1EA';
  var wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    userSelect: 'none'
  };
  var btn = function btn(code) {
    var active = lang === code,
      isHover = hover === code;
    return {
      background: 'transparent',
      border: 'none',
      padding: '4px 2px',
      cursor: active ? 'default' : 'pointer',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'inherit',
      color: active ? '#F26B1F' : isHover ? baseActive : baseMuted,
      transition: 'color 180ms cubic-bezier(.16,1,.3,1)'
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap,
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    style: btn('en'),
    onClick: function onClick() {
      return setLang('en');
    },
    onMouseEnter: function onMouseEnter() {
      return setHover('en');
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(null);
    },
    "aria-pressed": lang === 'en'
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: baseMuted
    }
  }, "/"), /*#__PURE__*/React.createElement("button", {
    style: btn('es'),
    onClick: function onClick() {
      return setLang('es');
    },
    onMouseEnter: function onMouseEnter() {
      return setHover('es');
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(null);
    },
    "aria-pressed": lang === 'es'
  }, "ES"));
}

// Scroll suave a una sección (usa Lenis si está activo).
function solynScrollTo(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var lenis = SOLYN_MOTION.lenis;
  if (lenis) lenis.scrollTo(el, {
    offset: -80,
    duration: 1.3
  });else el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
Object.assign(window, {
  SolynLangProvider: SolynLangProvider,
  useSolynLang: useSolynLang,
  LangToggle: LangToggle,
  SOLYN_STRINGS: SOLYN_STRINGS,
  SOLYN_CALENDLY: SOLYN_CALENDLY,
  SOLYN_EMAIL: SOLYN_EMAIL,
  solynScrollTo: solynScrollTo
});