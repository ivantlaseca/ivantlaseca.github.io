# Ivan Tlaseca Portfolio

Personal portfolio site for Ivan Tlaseca, built as a concise homepage for software engineering roles.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript configuration with JSX components
- Global CSS with CSS custom properties
- `next/image` for local images

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
npm start
```

## Structure

- `src/app/layout.tsx`: root layout and page metadata
- `src/app/page.tsx`: homepage section order
- `src/app/globals.css`: global styles and responsive layout rules
- `src/app/components/`: homepage sections and shared layout components
- `src/app/components/Data.jsx`: experience entries, technical highlights, and How I Work content
- `public/`: resume PDF and image assets

Hero, About, Contact, and Skills copy currently live in their component files.
