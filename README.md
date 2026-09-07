# Rawchord — Music Production & Recording Studio

Single-viewport black hero page for Rawchord, Chelari.

## Files

- `index.html` — the whole page (inline CSS + small vanilla-JS IIFE, no build step, no dependencies).
- `logo.png` — **not included.** Drop your logo file in this same folder and name it `logo.png` (or edit the `src` on the `<img class="hero-logo">` tag in `index.html` if you want a different filename/format, e.g. `logo.svg`). Until it's added, a placeholder mark is shown automatically.
- `inter.woff2`, `instrument-serif-italic.woff2` — optional. If you self-host these next to `index.html` they'll be used; otherwise the page falls back to loading Inter + Instrument Serif from Google Fonts automatically, so it works either way.

## What's already wired up

- **Header:** logo (left), section nav (center, desktop only — placeholder anchors `#services #studio #gallery #contact` for the sections you'll add later), a **Call Now** button linking to `tel:+918592810921` (right).
- **Mobile menu:** the burger icon (shown under 901px, or use it as your main nav trigger once you have more sections) opens a full-screen blurred menu with the same links.
- **Hero:** your logo centered, with "Music Production & Recording Studio" underneath, and "Chelari" below that. Two actions: **Call Now** and **Book a Session** (currently points at `#contact` — repoint once that section exists).
- **Footer stats:** three placeholder stats (tracks produced, studio suite, artists recorded) — swap the numbers/copy for real ones whenever you're ready.
- Pure black background, no flash-of-white, reduced-motion respected, no external JS libraries.

## Publishing with GitHub Pages

1. Create a new repo (e.g. `rawchord-site`) and push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Rawchord landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/rawchord-site.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `/(root)`** → Save.
3. Your site will be live at `https://<your-username>.github.io/rawchord-site/` within a minute or two.

Add your logo file and the extra sections (Services, Studio, Gallery, Contact) whenever you're ready — the nav links and IDs are already in place so they'll just click into position..
