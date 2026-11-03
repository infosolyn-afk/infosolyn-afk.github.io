// SOLYN — Leads → Google Sheet + aviso por email (alternativa al Google Form)
// Cómo usarlo: abrí una Google Sheet nueva → Extensiones → Apps Script → pegá este código → Implementar → Nueva implementación
// → Tipo: Aplicación web → Ejecutar como: Yo → Acceso: Cualquier persona → Implementar → copiá la URL (termina en /exec)
// y pegala en LEADS.url dentro de index.html.

const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = 'info.solyn@gmail.com'; // dejá '' si no querés aviso por email

function doPost(e) {
  try {
    const d = parse_(e);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(['Fecha', 'Nombre', 'Apellido', 'Email', 'Teléfono', 'Origen', 'Idioma', 'Página']);
      sh.setFrozenRows(1);
      sh.getRange('E:E').setNumberFormat('@');
    }
    const row = sh.getLastRow() + 1;
    sh.getRange(row, 5).setNumberFormat('@'); // teléfono como texto (evita que "+54..." se lea como fórmula)
    sh.getRange(row, 1, 1, 8).setValues([[new Date(), d.nombre || '', d.apellido || '', d.email || '', String(d.telefono || ''), d.source || 'web', d.lang || '', d.page || '']]);
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        name: 'SOLYN Web',
        replyTo: d.email || NOTIFY_EMAIL,
        subject: ('Nuevo lead SOLYN (' + (d.source || 'web') + '): ' + (d.nombre || '') + ' ' + (d.apellido || '') + ' ' + (d.email || '')).trim(),
        htmlBody: '<p><b>Nombre:</b> ' + (d.nombre || '') + ' ' + (d.apellido || '') + '<br><b>Email:</b> ' + (d.email || '') + '<br><b>Teléfono:</b> ' + (d.telefono || '') + '<br><b>Origen:</b> ' + (d.source || '') + '<br><b>Idioma:</b> ' + (d.lang || '') + '<br><b>Página:</b> ' + (d.page || '') + '</p><p>Planilla: ' + ss.getUrl() + '</p>',
      });
    }
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function doGet() { return out_({ ok: true, service: 'solyn-leads' }); }

function parse_(e) {
  if (e && e.postData && e.postData.contents) { try { return JSON.parse(e.postData.contents); } catch (_) {} }
  return (e && e.parameter) || {};
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
