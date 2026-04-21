# Pedro Dias Portfolio Design

**Date:** 2026-04-21

## Goal
Construir um portfólio one-page memorável para Pedro Dias, em português, com base pronta para internacionalização PT/EN, enfatizando liderança técnica, integrações de sistemas, IA aplicada e impacto regional.

## Experience Direction
- Estética `Dark Tech Futurista com toque humano`
- Narrativa `3D-first`, usando o hero como núcleo visual do site
- Scroll único com seções ancoradas e animações coordenadas
- Performance preservada por fallbacks visuais e redução de complexidade em dispositivos modestos

## Visual System
- Fundo principal `#050810`
- Destaque primário `#00FFD1`
- Destaque secundário `#7B61FF`
- Texto `#F0F4FF`
- Títulos em `Space Mono`
- Corpo em `DM Sans`
- Linguagem visual inspirada em cockpit de missão: grids, brilho ciano, vidro, painéis técnicos, partículas e rede de conexões

## Architecture
- Vite + React 18 como base
- Tailwind CSS para design tokens e layout
- Framer Motion para transições, entradas, counters e microinterações
- @react-three/fiber + @react-three/drei para a cena principal 3D
- EmailJS configurado por variáveis de ambiente com `.env.example`
- Dados centralizados em `src/data/index.js`, preparados para futura tradução

## Information Architecture
- Navbar fixa com blur, scrollspy e CTA de download do CV
- Hero com esfera wireframe, partículas, typing e glitch sutil
- Sobre com layout assimétrico e stats animadas
- Experiência com timeline vertical animada
- Skills com cards interativos em grid futurista inspirada em honeycomb
- Realizações com cards glassmorphism e entrada em cascata
- Contato com formulário funcional, estados de feedback e links sociais
- Footer com linha de terminal piscando

## Content Model
Todo o conteúdo editável ficará em `src/data/index.js`, separado em:
- `nav`
- `hero`
- `about`
- `experience`
- `skillGroups`
- `highlights`
- `contact`
- `footer`

A estrutura já deve permitir expansão futura para:
- `portfolioData.pt`
- `portfolioData.en`

## Motion Rules
- Fade + slide-up ao entrar em viewport
- Divisores horizontais com animação ciano entre seções
- Cursor customizado em desktop
- Smooth scroll nativo no documento
- Counters animados nos stats
- Hover com perspectiva nos cards de skill
- Cena 3D com rotação lenta e movimento contínuo discreto

## Responsiveness
- Mobile-first
- Hero com conteúdo acima da dobra e canvas ajustado a telas pequenas
- Grid de skills adaptável para colunas tradicionais em telas menores
- Cursor customizado desativado em touch
- Redução automática de partículas, DPR e animações contínuas em devices modestos

## Fallback and Accessibility
- Respeitar `prefers-reduced-motion`
- Hero continua legível sem canvas 3D
- Foco visível, contraste alto e `aria-label` em interações-chave
- Formulário com validação básica e feedback textual

## Deploy
- Build via `npm run build`
- `netlify.toml` com rewrite SPA
- `vercel.json` com rewrite SPA
- PDF do currículo servido localmente via `public/`

## Testing and Validation
- Build de produção obrigatório
- Verificação da configuração de ambiente do EmailJS
- Revisão manual da responsividade e da navegação por seções

## Scope Check
Este projeto permanece em um único escopo coeso: uma landing page one-page com experiência visual premium. Não há necessidade de dividir em subprojetos neste momento.
