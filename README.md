# Kronvet — Cabinet Medical Veterinar, Chinteni

Website for [Kronvet](https://www.google.com/maps/search/?api=1&query=Kronvet&query_place_id=ChIJObmJUGIISUcRN-uwnlDxfDA), a veterinary practice in Chinteni (Cluj, Romania) run by dr. Szabó Andrea Ágnes — 4.9★ from 89 Google reviews, wildlife rescues included.

Built by [Novusolv](https://novusolv.com).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@theme` tokens, no config file)
- framer-motion, lucide-react
- Zero-cost animated hero: hand-coded canvas (particle constellation + ECG heartbeat line), no video, no external APIs

## Highlights

- **PulseCanvas hero** — brand-colored ECG line with a periodic heartbeat, mouse parallax, static frame under `prefers-reduced-motion`
- **Rescue gallery** — real photos from the clinic (hare, woodpecker, kestrel, hedgehogs), polaroid layout
- **Live open/closed indicator** computed from the real schedule
- **Testimonials marquee** — verbatim Google reviews
- JSON-LD `VeterinaryCare` schema with aggregate rating, Romanian-language SEO meta

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Contact form

`src/components/Contact.tsx` posts to [Web3Forms](https://web3forms.com). Set the `WEB3FORMS_KEY` constant to a real access key to go live; while it is empty the form runs in demo mode (success state only, no network call).

---

© SC. KRONVET SRL · Design & automatizări: [Novusolv](https://novusolv.com)
