# SOLYN — A dónde llegan los leads del popup (y cómo conectarlo)

La web (GitHub Pages) es estática: no tiene base de datos propia. Los datos del popup y del newsletter
se mandan por POST a la URL que pongas en `LEADS.url` (dentro de `v2/index.html`, cerca del final).

## Opción recomendada: Google Form → Google Sheet (gratis, 3 minutos, sin código)

1. Entrá a https://forms.google.com con la cuenta **info.solyn@gmail.com** y creá un formulario nuevo
   con 4 preguntas de *respuesta corta*, en este orden: **Nombre**, **Apellido**, **Email**, **Teléfono**.
   Agregá 3 más (también respuesta corta, no obligatorias): **Origen**, **Idioma**, **Página**.
2. Configuración → desactivá "Limitar a 1 respuesta" y "Recopilar direcciones de correo" (si no, el envío desde la web falla).
3. Pestaña **Respuestas** → ⋮ → "Recibir notificaciones por correo de nuevas respuestas" (te llega un mail por cada lead)
   → y el ícono de Sheets para **vincular a una hoja de cálculo** (esa planilla es tu base de datos).
4. Enviar → ícono de link → copiá el link, y además ⋮ (arriba a la derecha) → **Obtener vínculo previamente completado**:
   escribí cualquier cosa en cada campo → "Obtener vínculo" → copiá ese link. Ahí aparecen los IDs `entry.1234567890` de cada campo.
5. Mandame los dos links (el del formulario y el prellenado) y yo pego la URL `…/formResponse` y los IDs en `LEADS.url` / `LEADS.map`.
   (Si querés hacerlo vos: la URL es la del formulario cambiando `/viewform` por `/formResponse`.)

## Alternativa: Google Sheet + Apps Script (mismo resultado, con email de aviso personalizado)

Está listo en `leads-apps-script.gs`. Google Sheet nueva → Extensiones → Apps Script → pegar el código → Implementar →
Nueva implementación → Aplicación web → Ejecutar como "Yo" → Acceso "Cualquier persona" → copiar la URL `/exec` → pegarla en `LEADS.url`.
Requiere aceptar un permiso de Google la primera vez ("Esta app no está verificada" → Avanzado → Ir al proyecto).

## Otras opciones (si ya usás un CRM)

HubSpot, Brevo, Airtable o Notion tienen formularios con URL de envío: también funcionan pegando esa URL en `LEADS.url`
(cualquier endpoint que reciba JSON por POST). Formspree (50 envíos/mes gratis) es la opción "sin Google".

## Mientras no haya URL configurada

El popup funciona igual (la persona descarga el PDF), y el lead queda guardado en el navegador del visitante
(`localStorage`) y se reenvía solo cuando el endpoint exista. Pero no te llega a vos: configurá la URL cuanto antes.
