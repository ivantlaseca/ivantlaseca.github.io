# Ivan Tlaseca — Portfolio

Personal portfolio site for Ivan Tlaseca, software engineer. Built to support a 2026 job search targeting full-stack, forward-deployed, solutions, and customer engineering roles.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript / JSX
- **Styling:** CSS (globals.css) with CSS custom properties
- **Fonts:** Syne, DM Sans, IBM Plex Mono (via Google Fonts)
- **Images:** next/image

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── Highlights.jsx
    │   ├── HowIWork.jsx
    │   ├── Skills.jsx
    │   ├── Contact.jsx
    │   └── Data.jsx        ← all site content lives here
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
public/
├── images/
│   └── me-smiling.JPG
└── Ivan Tlaseca Resume.pdf
```

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Content Updates

All site copy — experience bullets, highlights, how-I-work principles, and skills — lives in `src/app/components/Data.jsx`. Edit that file to update content without touching component structure.

## Placeholders

Search for `FILL HERE` in any component file to find spots that need your manual input (GitHub URL, resume file path confirmation, etc.).