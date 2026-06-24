# JirDhis – Policy & Legal Website

Policy and legal website for **JirDhis**, a Somali-first fitness and nutrition app.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Google Fonts (Inter)

## Pages

| Route | Page |
|---|---|
| `/` | Home / Landing |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/delete-account` | Account Deletion Request |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel auto-detects Vite — no extra config needed.
4. The `vercel.json` rewrite handles SPA client-side routing.

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Brand

- **App name:** JirDhis (means "healthy/well" in Somali)
- **Tagline:** JirDhismaadkaaga gacantaada (Your health in your hands)
- **Primary color:** Emerald `#059669`
- **Dark:** `#0F172A`
- **Font:** Inter

## Contact

ismailbulbul381@gmail.com
