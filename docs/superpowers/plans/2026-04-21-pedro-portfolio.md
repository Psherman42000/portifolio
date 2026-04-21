# Pedro Dias Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy-ready a futuristic one-page portfolio for Pedro Dias with React, Three.js, Framer Motion, Tailwind CSS, EmailJS wiring, and static content architecture ready for PT/EN.

**Architecture:** Initialize a Vite React app in the repository root, organize content into focused section and UI components, isolate the heavy 3D work to a lazy-loaded hero scene, and keep all editable content in a central data file. Use responsive CSS and small hooks for motion, active section tracking, counters, and device-tier fallbacks.

**Tech Stack:** React 18, Vite, Tailwind CSS, Framer Motion, @react-three/fiber, @react-three/drei, Lucide React, EmailJS, Netlify/Vercel SPA rewrites.

---

### Task 1: Scaffold the Vite app and install dependencies

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: Generate the base app**

```bash
npm create vite@latest . -- --template react
```

- [ ] **Step 2: Install runtime dependencies**

```bash
npm install three @react-three/fiber @react-three/drei framer-motion tailwindcss @tailwindcss/vite lucide-react emailjs-com react-router-dom
```

- [ ] **Step 3: Verify package installation**

Run: `npm ls --depth=0`
Expected: package tree includes `react`, `vite`, `three`, `framer-motion`, `tailwindcss`, `@react-three/fiber`, `@react-three/drei`, `lucide-react`, `emailjs-com`

### Task 2: Configure global theme and app shell

**Files:**
- Modify: `index.html`
- Create: `src/index.css`
- Modify: `src/App.jsx`
- Create: `src/components/ui/Navbar.jsx`
- Create: `src/components/ui/CustomCursor.jsx`
- Create: `src/components/ui/AnimatedDivider.jsx`

- [ ] **Step 1: Add Google Fonts and document metadata**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Define Tailwind, CSS variables, global layout, smooth scroll, focus styles, and glitch/cursor helpers**

```css
@import "tailwindcss";

:root {
  --bg: #050810;
  --text: #f0f4ff;
  --accent: #00ffd1;
  --accent-secondary: #7b61ff;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Build the app shell with sticky nav, section flow, and footer**

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main>{/* sections */}</main>
    </div>
  )
}
```

### Task 3: Create content data and utility hooks

**Files:**
- Create: `src/data/index.js`
- Create: `src/hooks/useActiveSection.js`
- Create: `src/hooks/useCountUp.js`
- Create: `src/hooks/useTypingText.js`
- Create: `src/hooks/usePrefersReducedMotion.js`
- Create: `src/hooks/useDeviceTier.js`

- [ ] **Step 1: Centralize portfolio content in `src/data/index.js`**

```js
export const portfolioData = {
  nav: [...],
  hero: {...},
  about: {...},
}
```

- [ ] **Step 2: Implement hooks for typing, counters, motion preferences, device tier, and active section tracking**

```js
export function usePrefersReducedMotion() {
  // matchMedia('(prefers-reduced-motion: reduce)')
}
```

### Task 4: Build the reusable UI layer

**Files:**
- Create: `src/components/ui/SectionHeading.jsx`
- Create: `src/components/ui/Reveal.jsx`
- Create: `src/components/ui/StatCard.jsx`
- Create: `src/components/ui/TimelineItem.jsx`
- Create: `src/components/ui/SkillCard.jsx`
- Create: `src/components/ui/HighlightCard.jsx`
- Create: `src/components/ui/MagneticButton.jsx`

- [ ] **Step 1: Create small reusable components for headings, reveal animation, cards, and CTA buttons**

```jsx
export function SectionHeading({ eyebrow, title, description }) {
  return <div>{title}</div>
}
```

### Task 5: Build the hero 3D scene

**Files:**
- Create: `src/components/3d/HeroScene.jsx`
- Create: `src/components/3d/ConnectionSphere.jsx`
- Create: `src/components/3d/FloatingParticles.jsx`
- Create: `src/components/3d/SceneLights.jsx`

- [ ] **Step 1: Build a lazy-loadable canvas scene with adaptive DPR and simplified motion fallback**

```jsx
<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }}>
  <SceneLights />
  <ConnectionSphere />
  <FloatingParticles />
</Canvas>
```

### Task 6: Implement the page sections

**Files:**
- Create: `src/components/sections/HeroSection.jsx`
- Create: `src/components/sections/AboutSection.jsx`
- Create: `src/components/sections/ExperienceSection.jsx`
- Create: `src/components/sections/SkillsSection.jsx`
- Create: `src/components/sections/HighlightsSection.jsx`
- Create: `src/components/sections/ContactSection.jsx`
- Create: `src/components/sections/FooterSection.jsx`

- [ ] **Step 1: Hero section with typing text, rotating roles, CTA buttons, canvas fallback, and scroll indicator**

```jsx
<h1 className="font-mono">Pedro Dias</h1>
```

- [ ] **Step 2: About, experience, skills, and highlights sections using reusable cards and reveal animations**

```jsx
{experience.map((item) => (
  <TimelineItem key={item.title} item={item} />
))}
```

- [ ] **Step 3: Contact section with EmailJS integration guarded by environment checks**

```jsx
if (!serviceId || !templateId || !publicKey) {
  throw new Error('EmailJS environment variables are missing')
}
```

### Task 7: Add deploy and asset support

**Files:**
- Create: `.gitignore`
- Create: `.env.example`
- Create: `public/pedro-dias-cv-2026.pdf`
- Create: `netlify.toml`
- Create: `vercel.json`

- [ ] **Step 1: Copy the selected CV into `public/` and wire the navbar button to it**

```bash
Copy-Item "C:\Users\lindo\Downloads\Pedro_Dias_CV_2026.pdf" "public\pedro-dias-cv-2026.pdf"
```

- [ ] **Step 2: Add SPA rewrite config for Netlify and Vercel**

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Task 8: Verify the build and prepare git state

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: Vite outputs the `dist/` folder with no build errors

- [ ] **Step 2: Summarize setup instructions in the README**

```md
npm install
npm run dev
npm run build
```

- [ ] **Step 3: Review git status before commit/push**

Run: `git status --short`
Expected: all newly created project files appear as untracked or modified
