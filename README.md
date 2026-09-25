# SK Interior Design — Mumbai

Marketing site for **SK Interior Design**, a turnkey interior design studio in Nahar Amrit Shakti, Chandivali (Powai), Mumbai.

- Warm editorial light theme (bone canvas, espresso ink, clay accent)
- Real project photography sourced from [@sk.interior_desing](https://instagram.com/sk.interior_desing)
- Interactive before/after slider, instant cost estimator, portfolio filters, consultation form (WhatsApp hand-off)
- Mobile-first, no external runtime APIs

## Stack

React 19 · Vite · TypeScript · Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # production build → dist/
```

## Deploy

Static build — deploy `dist/` to any static host (Vercel: framework preset **Vite**, build `npm run build`, output `dist`).
