# Shuvo Hasan — Personal Website

A clean, academic personal website built with React and Vite — inspired by [sgkang.github.io](https://sgkang.github.io/).

## Features

- ✅ React 18 + React Router (hash-based, works on any static host)
- ✅ Responsive sidebar navigation (collapses to hamburger on mobile)
- ✅ Pages: Home, About, Research, Papers, Open Science, Contact
- ✅ Year-filter on the Papers page
- ✅ Clean academic design with DM Serif Display + DM Sans fonts
- ✅ Font Awesome icons
- ✅ Deploy anywhere as a static site (GitHub Pages, Netlify, Vercel, etc.)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Production build

```bash
npm run build
```

The output goes to the `dist/` folder — deploy those files to any static host.

### GitHub Pages deployment

1. Build: `npm run build`
2. Push the `dist/` folder contents to the `gh-pages` branch  
   (or use the `gh-pages` npm package: `npx gh-pages -d dist`)

## Customisation

All content is in `src/pages/`. Update each page file with your real information:

| File | What to edit |
|------|-------------|
| `src/App.jsx` | Social links in the sidebar |
| `src/pages/Home.jsx` | Intro bio, highlight cards, featured papers |
| `src/pages/About.jsx` | Biography, education, skills |
| `src/pages/Research.jsx` | Research topics |
| `src/pages/Papers.jsx` | Publication list with links |
| `src/pages/OpenScience.jsx` | Open-source projects |
| `src/pages/Contact.jsx` | Email, social handles, location |

### Adding a profile photo

Replace the `<div className="hero-photo-placeholder">SH</div>` in `Home.jsx` with:

```jsx
<img className="hero-photo" src="/images/profile.jpg" alt="Shuvo Hasan" />
```

Then put your photo at `public/images/profile.jpg`.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [DM Serif Display + DM Sans](https://fonts.google.com/) via Google Fonts
- [Font Awesome 6](https://fontawesome.com/) (free CDN)
"# Protfolio" 
