# DeeDash Astro Website

Astro + HTMX rebuild of the DeeDash static website currently in `/web`.

## Run locally

From `/Users/jkhayford/Dev/deedash/astro_web`:

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Pages

- `/`
- `/book-a-ride`
- `/our-services`
- `/business-solutions`
- `/driver-portal`
- `/about-us`
- `/contact-us`
- `/terms-and-conditions`
- `/privacy-policy`
- `/cookie-policy`

## HTMX fragments

- `/partials/quick-booking`
- `/partials/ride-request-confirmation`
- `/partials/live-chat-status`

## Project notes

- Brand placeholders are intentionally preserved:
  - `[PHONE NUMBER]`
  - `[EMAIL ADDRESS]`
  - `[WHATSAPP NUMBER]`
  - `[OFFICE/BASE ADDRESS, CHESTER]`
  - `[NEARBY AREAS YOU WANT TO LIST]`
- Brand assets and typography are served from `public/assets`.
