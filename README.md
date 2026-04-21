# Pedro Dias Portfolio

Portfólio one-page em React + Vite, com hero 3D em Three.js, animações com Framer Motion e deploy pronto para Netlify/Vercel.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Three.js com `@react-three/fiber` e `@react-three/drei`
- EmailJS para contato sem backend

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## EmailJS

Copie `.env.example` para `.env` e preencha:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sem essas variáveis, a interface do formulário continua funcionando, mas o envio ficará desabilitado com feedback claro.

## Deploy

O projeto inclui:

- `netlify.toml` com rewrite para SPA
- `vercel.json` com rewrite para SPA
- currículo servido em `public/pedro-dias-cv-2026.pdf`
