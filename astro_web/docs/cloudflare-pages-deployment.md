# Cloudflare Pages Deployment Guide (Astro)

This project is deployed from the `astro_web` subdirectory of the repository.

## 1) Required project structure

- App directory: `astro_web/`
- Astro source: `astro_web/src/`
- Build output: `astro_web/dist/`
- Wrangler config: `astro_web/wrangler.jsonc`

## 2) Wrangler config used in this repo

File: `astro_web/wrangler.jsonc`

```json
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "deedash-clone",
  "compatibility_date": "2026-02-23",
  "assets": {
    "directory": "./dist"
  }
}
```

> Note: If your editor warns that the schema cannot be loaded, it usually means `wrangler` is not installed locally in `node_modules`. This does not block deployment.

## 3) Cloudflare Pages dashboard settings

In **Cloudflare Pages → Project → Settings → Builds & deployments** set:

- **Root directory**: `astro_web`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

These settings are critical for monorepo/subdirectory setups.

## 4) Why "Hello World" appears instead of the site

If deployment shows a default "Hello World" page, usually one of these is wrong:

1. Root directory is not set to `astro_web`
2. Build command is incorrect (for example `npx wrangler deploy` without assets)
3. Build output directory is not `dist`
4. Wrangler project name mismatches expected project wiring

## 5) Local verification before pushing

Run from `astro_web`:

```bash
npm install
npm run build
```

Expected build result includes output like:

- `output: "static"`
- `directory: .../astro_web/dist/`
- generated routes under `src/pages/*`

## 6) Recommended deployment flow

1. Update code in `astro_web/`
2. Run local build (`npm run build`)
3. Commit and push to GitHub
4. Confirm Cloudflare Pages deploy starts from repo root but builds from `astro_web`
5. Validate production URL and key routes:
   - `/`
   - `/book-a-ride/`
   - `/contact-us/`

## 7) Troubleshooting checklist

- Verify repo branch connected in Cloudflare Pages is the branch you pushed
- Confirm **Root directory** is still `astro_web` after any project edits
- Confirm build logs show `npm run build` (not `npx wrangler deploy` as the main build command)
- Confirm output artifact points to `dist`
- If needed, clear Cloudflare build cache and redeploy

## 8) Notes for future maintainers

- This is a static Astro build, not a Worker script deployment.
- `wrangler.jsonc` is used to keep deployment configuration consistent.
- Dashboard settings still control actual CI behavior; file config does not always override dashboard misconfiguration.
