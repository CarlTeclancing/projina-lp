# Projina landing page

React and Vite single-page application. This repository contains the marketing frontend, not the CRM or contact API server.

## Development

Run `npm ci`, copy `.env.example` to `.env.local`, set `VITE_API_URL`, and run `npm run dev`.

## Vercel deployment

- Set the project root to the directory containing `package.json`, not `src` or `public`.
- Use the Vite preset, build command `npm run build`, and output directory `dist`. The root `vercel.json` supplies the configuration.
- Set `VITE_API_URL` to your deployed HTTPS backend origin, without `/v1/api/contact`. Set it for each required Vercel environment. Never put secrets in VITE_ variables.
- Redeploy after changing the variable: Vite embeds it at build time.
- The backend must accept `POST /v1/api/contact` with JSON fields `name`, `email`, `phone`, `message`, and `plan`, return a successful HTTP status only on success, and allow the frontend origin and JSON POST preflight through CORS. This repository does not deploy that backend.

Client routes fall back to `index.html`. HTML revalidates on each visit; hashed assets have a one-year immutable cache. Avoid blanket HTML caching, which can leave clients loading an old deployment's asset URLs.

## Verification

Run `npm run build` and `npm run preview`. Check `/`, `/pricing`, `/about`, and `/contact-us` directly and after refreshing. Repeat on Vercel and verify that JavaScript requests return JavaScript rather than HTML.

Test contact submission against the configured backend, including failed requests. Without `VITE_API_URL`, the form displays an unavailable message and sends nothing.

`npm run lint` currently reports parse errors in the unused root-level `legacy_terms_old.jsx` and `legacy_terms_utf8.jsx` archives, plus a hook dependency warning in `src/pages/About.jsx`. These do not prevent the production build; the legacy archives are not imported by the app.
