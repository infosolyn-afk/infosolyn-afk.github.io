"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// i18n.jsx — SOLYN bilingüe. Traducción por intención, no palabra-por-palabra.

var SOLYN_STRINGS = {
  en: {
    nav_what: 'What We Do',
    nav_guarantee: 'Guarantee',
    nav_process: 'Process',
    nav_cta: 'Get Started',
    hero_meta_top: '001 / 006',
    hero_meta_side: 'Results-Based Model — 2026',
    hero_tag: 'SOLYN — Designed for Growth. Built on Systems.',
    hero_head_1: 'We find',
    hero_head_2: 'your clients.',
    hero_body: 'Stop waiting for clients to come to you. We identify, qualify and book them on your calendar. You pay nothing until we deliver.',
    hero_cta: 'Start Now — Zero Risk',
    hero_cta_ghost: 'See what we do ↓',
    stat_1: 'We cover all costs',
    stat_2: 'Results-based model',
    stat_3: 'You keep everything if we miss',
    stat_4: 'Zero upfront payment',
    problem_label: 'The Problem',
    problem_head_1: 'Most businesses',
    problem_head_2: 'wait.',
    problem_head_3: "We don't.",
    problem_r1_t: 'You depend on referrals',
    problem_r1_d: 'Your pipeline relies on word of mouth. Unpredictable. Unscalable.',
    problem_r2_t: 'Your time is wasted on bad leads',
    problem_r2_d: 'Sales calls with people who will never buy. Hours lost every week.',
    problem_r3_t: 'No system, no predictability',
    problem_r3_d: 'Months with too much work. Months with none. No rhythm.',
    problem_r4_t: 'We fix all of this — end to end',
    problem_r4_d: 'One machine. One outcome. Pre-qualified meetings on your calendar.',
    guarantee_label: 'Our Commitment',
    guarantee_ghost: 'GUARANTEED',
    guarantee_head_1: 'We take all the risk.',
    guarantee_head_2: 'You keep all the reward.',
    guarantee_c1_t: 'We cover all costs',
    guarantee_c1_d: 'Research, tools, databases, outreach infrastructure — we pay for everything.',
    guarantee_c2_t: 'You pay only on results',
    guarantee_c2_d: "Meetings delivered on your calendar, qualified to your spec. That's the trigger.",
    guarantee_c3_t: 'You keep everything',
    guarantee_c3_d: 'If we miss, the list, the research, the messages — you keep it all. No clawback.',
    guarantee_footer: "We carry the full financial risk ourselves. If we don't deliver — you owe us nothing. You keep everything we built.",
    process_label: 'The Process',
    process_head_1: 'Five steps.',
    process_head_2: 'Zero from you.',
    process_r1_t: 'Define your ideal client',
    process_r1_d: 'We map exactly what company and what person is most likely to buy from you — industry, size, role, geography, and the specific problem your offer solves.',
    process_r2_t: 'Build the database',
    process_r2_d: 'No purchased lists. No shortcuts. Custom, verified database of potential clients that match your exact profile — company by company, person by person.',
    process_r3_t: 'Reach out',
    process_r3_d: 'Personalized messages to each prospect. Every message tailored to that specific person and company. Designed to open genuine conversations.',
    process_r4_t: 'Qualify every lead',
    process_r4_d: 'Rigorous qualification based on criteria you define. Only the right people move forward — no exceptions.',
    process_r5_t: 'They land on your calendar',
    process_r5_d: "Pre-qualified. Ready to buy. Booked automatically — without you doing anything. You walk in knowing they're ready to close.",
    numbers_label: 'The Model',
    num_1_label: 'Upfront cost',
    num_1_desc: 'We carry everything. Research, tools, infrastructure.',
    num_2_label: 'Pre-qualified',
    num_2_desc: 'Every lead vetted against your criteria before they reach you.',
    num_3_label: 'Effort required',
    num_3_desc: 'From you. Until the meeting starts on your calendar.',
    cta_label: 'Ready?',
    cta_head_1: 'Stop waiting.',
    cta_head_2: 'Start closing.',
    cta_body: 'We find them. We qualify them. We book them. Your only job is to show up and close.',
    cta_primary: 'Book a Call',
    cta_secondary: 'Send an Email',
    footer_desc: 'B2B client acquisition. Results-based. You pay nothing until we deliver qualified meetings on your calendar.',
    footer_nav_label: 'Navigate',
    footer_contact_label: 'Contact',
    footer_copy: '© 2026 SOLYN — All rights reserved',
    footer_nav_1: 'What We Do',
    footer_nav_2: 'Guarantee',
    footer_nav_3: 'Process',
    footer_nav_4: 'The Model',
    footer_contact_1: 'Book a Call',
    footer_contact_2: 'Send an Email',
    footer_contact_3: 'Careers',
    footer_contact_4: 'Press'
  },
  es: {
    nav_what: 'Qué Hacemos',
    nav_guarantee: 'Garantía',
    nav_process: 'Proceso',
    nav_cta: 'Empezar',
    hero_meta_top: '001 / 006',
    hero_meta_side: 'Modelo por Resultados — 2026',
    hero_tag: 'SOLYN — Diseñado para Crecer. Construido en Sistemas.',
    hero_head_1: 'Traemos',
    hero_head_2: 'tus clientes.',
    hero_body: 'Deja de esperar a que los clientes te encuentren. Los identificamos, los calificamos y te los agendamos. No pagas nada hasta que los entregamos.',
    hero_cta: 'Empezar — Cero Riesgo',
    hero_cta_ghost: 'Mira qué hacemos ↓',
    stat_1: 'Cubrimos todos los costes',
    stat_2: 'Pago por resultados',
    stat_3: 'Si fallamos, te lo quedas todo',
    stat_4: 'Cero pago por adelantado',
    problem_label: 'El Problema',
    problem_head_1: 'Las empresas',
    problem_head_2: 'esperan.',
    problem_head_3: 'Nosotros no.',
    problem_r1_t: 'Dependes de recomendaciones',
    problem_r1_d: 'Tu pipeline depende del boca a boca. Imprevisible. No escala.',
    problem_r2_t: 'Pierdes el tiempo con leads malos',
    problem_r2_d: 'Llamadas con gente que nunca va a comprar. Horas perdidas cada semana.',
    problem_r3_t: 'Sin sistema, sin previsibilidad',
    problem_r3_d: 'Meses con demasiado trabajo. Meses sin nada. Sin ritmo.',
    problem_r4_t: 'Nosotros lo resolvemos — de principio a fin',
    problem_r4_d: 'Una sola máquina. Un solo resultado. Reuniones pre-calificadas en tu calendario.',
    guarantee_label: 'Nuestro Compromiso',
    guarantee_ghost: 'GARANTIZADO',
    guarantee_head_1: 'Nosotros asumimos todo el riesgo.',
    guarantee_head_2: 'Tú te llevas toda la recompensa.',
    guarantee_c1_t: 'Cubrimos todos los costes',
    guarantee_c1_d: 'Investigación, herramientas, bases de datos, infraestructura — lo pagamos todo nosotros.',
    guarantee_c2_t: 'Pagas solo por resultados',
    guarantee_c2_d: 'Reuniones agendadas en tu calendario, calificadas según tu criterio. Ese es el disparador.',
    guarantee_c3_t: 'Te lo quedas todo',
    guarantee_c3_d: 'Si fallamos, la lista, la investigación, los mensajes — todo es tuyo. Sin devoluciones.',
    guarantee_footer: 'Asumimos nosotros todo el riesgo financiero. Si no entregamos — no nos debes nada. Te quedas con todo lo que construimos.',
    process_label: 'El Proceso',
    process_head_1: 'Cinco pasos.',
    process_head_2: 'Cero de tu parte.',
    process_r1_t: 'Definimos tu cliente ideal',
    process_r1_d: 'Identificamos exactamente qué empresa y qué persona tiene más probabilidades de comprarte — sector, tamaño, rol, geografía y el problema concreto que tu oferta resuelve.',
    process_r2_t: 'Construimos la base de datos',
    process_r2_d: 'Sin listas compradas. Sin atajos. Una base de datos verificada de clientes potenciales que encajan con tu perfil exacto — empresa a empresa, persona a persona.',
    process_r3_t: 'Iniciamos el contacto',
    process_r3_d: 'Mensajes personalizados a cada prospecto. Cada mensaje pensado para esa persona y esa empresa. Diseñados para abrir conversaciones reales.',
    process_r4_t: 'Calificamos cada lead',
    process_r4_d: 'Calificación rigurosa según los criterios que tú defines. Solo las personas correctas avanzan — sin excepciones.',
    process_r5_t: 'Aterrizan en tu calendario',
    process_r5_d: 'Pre-calificados. Listos para comprar. Agendados automáticamente — sin que hagas nada. Entras a la reunión sabiendo que están listos para cerrar.',
    numbers_label: 'El Modelo',
    num_1_label: 'Pago inicial',
    num_1_desc: 'Nosotros cargamos con todo. Investigación, herramientas, infraestructura.',
    num_2_label: 'Pre-calificados',
    num_2_desc: 'Cada lead filtrado según tus criterios antes de llegarte.',
    num_3_label: 'Esfuerzo que te exige',
    num_3_desc: 'De tu parte. Hasta que la reunión empieza en tu calendario.',
    cta_label: '¿Listo?',
    cta_head_1: 'Deja de esperar.',
    cta_head_2: 'Empieza a cerrar.',
    cta_body: 'Nosotros los encontramos. Nosotros los calificamos. Nosotros los agendamos. Tú solo tienes que aparecer y cerrar.',
    cta_primary: 'Agenda una Llamada',
    cta_secondary: 'Envía un Email',
    footer_desc: 'Captación de clientes B2B. Pago por resultados. No pagas nada hasta que entregamos reuniones calificadas en tu calendario.',
    footer_nav_label: 'Navegar',
    footer_contact_label: 'Contacto',
    footer_copy: '© 2026 SOLYN — Todos los derechos reservados',
    footer_nav_1: 'Qué Hacemos',
    footer_nav_2: 'Garantía',
    footer_nav_3: 'Proceso',
    footer_nav_4: 'El Modelo',
    footer_contact_1: 'Agenda una Llamada',
    footer_contact_2: 'Envía un Email',
    footer_contact_3: 'Carreras',
    footer_contact_4: 'Prensa'
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
        return localStorage.getItem('solyn_lang') || 'en';
      } catch (_unused) {
        return 'en';
      }
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    lang = _React$useState2[0],
    setLangState = _React$useState2[1];
  var setLang = React.useCallback(function (next) {
    setLangState(next);
    try {
      localStorage.setItem('solyn_lang', next);
    } catch (_unused2) {}
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
// retro-compat con código previo
var useJJLang = useSolynLang;
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
  var sep = {
    color: baseMuted
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
    style: sep
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
Object.assign(window, {
  SolynLangProvider: SolynLangProvider,
  useSolynLang: useSolynLang,
  useJJLang: useJJLang,
  LangToggle: LangToggle,
  SOLYN_STRINGS: SOLYN_STRINGS
});