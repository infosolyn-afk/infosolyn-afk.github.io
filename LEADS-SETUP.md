# SOLYN — A dónde llegan los leads del popup y del newsletter

**Ya está configurado y funcionando.** La web manda cada lead (popup del Playbook y newsletter) por POST a un
script de Google ("SOLYN Leads", Apps Script) que vive en la cuenta de Google de Juan y hace dos cosas:

1. Guarda una fila en la planilla **"SOLYN — Leads"** (Google Drive de Juan), hoja `Leads`:
   Fecha · Nombre · Apellido · Email · Teléfono · Origen (playbook / newsletter) · Idioma · Página.
2. Manda un email a **info.solyn@gmail.com** por cada lead, con todos los datos y "responder" apuntando al email del lead.

- Planilla: https://docs.google.com/spreadsheets/d/1RL9TJhUeZPNE7BqWGIf4NllGfsUtnHeM1IBo6yDWxCc/edit
- Script: https://script.google.com/u/0/home/projects/1dylBR2SR2ACTSbuXaiWIIZEDT7YGLwc5i5mJeWmGPSJ8ESQMF8vpY0Cq/edit
- Endpoint (está pegado en `LEADS.url` dentro de `index.html`):
  https://script.google.com/macros/s/AKfycbwWSt7RCO0mLikXe8Z3T0hmL1CzS04pNWUuoxtni_1NTiw7snRQ3_yYeybIpItYL3noBw/exec

## Cambiar a quién le llega el email
En el script, editá `NOTIFY_EMAIL` (podés poner varios separados por coma) → Guardar → Implementar → Gestionar implementaciones
→ lápiz → Versión: "Versión nueva" → Implementar. La URL no cambia.

## Si algún día querés otra base (HubSpot, Brevo, Airtable, Notion…)
Cualquier endpoint que reciba JSON por POST funciona: pegás su URL en `LEADS.url`. También acepta un Google Form
(URL terminada en `/formResponse` + los IDs `entry.xxx` en `LEADS.map`).

## Si la URL quedara vacía
El popup sigue funcionando (la persona descarga el PDF) y el lead queda guardado en el navegador del visitante hasta que
haya endpoint, pero no te llega: no la borres.
