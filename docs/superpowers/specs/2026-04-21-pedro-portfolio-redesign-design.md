# Pedro Dias Portfolio Redesign Design

**Date:** 2026-04-21

## Goal
Refatorar o portfolio atual para uma experiencia interativa em que o proprio site funciona como uma integracao viva. A homepage deixa de ser uma landing page baseada em scroll e passa a ser um mapa 3D de navegacao, com secoes abertas como paineis imersivos sobrepostos. O idioma inicial sera `pt`, com estrutura de dados preparada para expansao futura para `en` e `es` sem nova refatoracao estrutural.

## Product Concept
- O site inteiro e uma metafora de um sistema de integracao em producao.
- O usuario navega como se estivesse dentro de um cockpit de dados e APIs.
- Cada secao e um no ligado ao nucleo `Pedro Dias`.
- O mapa nunca e apenas decorativo: ele e a raiz da navegacao e continua vivo durante a exploracao.
- O valor de Pedro como integrador precisa aparecer no comportamento da interface, nao so no texto.

## Experience Direction
### Core interaction
- A homepage sera um grafo 3D interativo centralizado.
- `Pedro Dias` e o no central, maior, pulsando, com efeito de glitch ocasional no texto.
- Os nos `Sobre`, `Experiencia`, `Skills`, `Projetos` e `Contato` orbitam o centro com flutuacao leve.
- Hover em no:
  - escala aumenta
  - emissive glow aumenta
  - tooltip apresenta o nome da secao
- Clique em no:
  - o no entra em estado ativo persistente com escala `1.4x`
  - o resto do grafo perde enfase
  - abre um painel imersivo sobreposto

### Panel navigation model
- O usuario pode abrir paineis em sequencia, como modulos de um sistema.
- O fluxo base e:
  - `Mapa`
  - `Mapa > Secao`
  - `Mapa > Secao > Subpainel`
- A pilha visual de paineis deve permanecer controlada; a implementacao deve suportar profundidade 2-3 sem degradar a UX.
- Fechar remove apenas a camada atual.
- Fechar a ultima camada devolve o mapa ao estado integral.

### Desktop behavior
- O painel principal ocupa `55%` da largura.
- O grafo continua visivel e animado nos `45%` restantes.
- O fundo do lado do mapa recebe overlay escuro sutil e opacidade reduzida.
- O no ativo permanece destacado enquanto existir algum painel associado aberto.

### Mobile behavior
- O painel ocupa `100%` da tela.
- O grafo e ocultado temporariamente quando ha painel aberto.
- O grafo em mobile sera simplificado e sem excesso de movimento continuo.

## Visual System
### Palette
- Background base: `#03060F`
- Primary: `#00FFD1`
- Secondary: `#7B61FF`
- Tertiary accent: `#FF6B35`
- Text: `#E8F0FF`
- Grid lines: `rgba(0, 255, 209, 0.08)`

### Typography
- Display/Hero: `Syne`
- Code/Terminal: `JetBrains Mono`
- Body: `Cabinet Grotesk` com fallback em `Outfit`

### Visual rules
- Fundo com grid de luz sutil.
- Scanlines muito discretas como overlay global.
- Glows e bordas energizadas, evitando glassmorphism generico.
- Elementos ativos usam brilho ciano ou roxo para reforcar estado.
- Laranja aparece apenas como sinalizacao de destaque, fluxo critico ou alerta visual pontual.

## Technical Architecture
### Layers
1. `Background Layer`
- Canvas fixo com shader procedural global.
- Renderizado atras de toda a aplicacao.
- Sem interacao direta.

2. `Graph Layer`
- Canvas do mapa 3D principal.
- Responsavel por nos, conexoes, pulsos e foco.

3. `UI Overlay Layer`
- Navbar, cursor customizado, loading screen, tooltips, progressos e labels.

4. `Panel Stack Layer`
- Pilha de paineis imersivos.
- Controla abertura, fechamento, profundidade, scroll interno e variacoes desktop/mobile.

### State model
Um estado central simples e previsivel deve controlar:
- `activeNodeId`
- `panelStack`
- `hoveredNodeId`
- `deviceTier`
- `reducedMotion`
- `locale`

### Project structure target
- `src/components/3d`
  - `BackgroundShader.jsx`
  - `GraphScene.jsx`
  - `GraphNode.jsx`
  - `GraphConnections.jsx`
  - `DataPulseTrail.jsx`
  - `SectionFocusCamera.jsx`
  - `AboutTorusKnot.jsx`
- `src/components/system`
  - `LoadingScreen.jsx`
  - `PanelStack.jsx`
  - `ImmersivePanel.jsx`
  - `PanelHeader.jsx`
  - `ScrollProgress.jsx`
  - `CustomCursor.jsx`
  - `GlitchLogo.jsx`
- `src/components/sections`
  - `AboutPanel.jsx`
  - `ExperienceTerminalPanel.jsx`
  - `SkillsHexPanel.jsx`
  - `ProjectsPanel.jsx`
  - `ContactPanel.jsx`
- `src/components/projects`
  - `IntegrationMap.jsx`
  - `VoltSportsMap.jsx`
  - `RetailNetworkMap.jsx`
  - `ZeDeliveryMap.jsx`
  - `MonalisaMap.jsx`
  - `CartorioMap.jsx`
- `src/hooks`
  - `usePanelStack.js`
  - `useDeviceTier.js`
  - `useReducedMotion.js`
  - `useGlitchCycle.js`
  - `useTerminalTyping.js`
  - `useGraphFocus.js`
- `src/data/index.js`
  - Conteudo em `pt`
  - Estrutura pronta para `en` e `es`

## Rendering Strategy
- `React + Vite` permanecem como base.
- `@react-three/fiber` + `@react-three/drei` para o grafo e objetos 3D.
- `Framer Motion` para paineis, loading, navbar, cursor e transicoes de interface.
- `GSAP` para orquestracoes mais cinematograficas, com foco especial na secao de terminal.
- `SVG` para os integration maps, porque oferecem melhor controle de paths, legenda e fluxo animado.
- Componentes 3D pesados devem ser lazy-loaded.

## Background Shader
### Purpose
O shader global deve comunicar a sensacao de sinais e dados fluindo continuamente pelo sistema.

### Requirements
- `ShaderMaterial` customizado em um canvas fixo atras do app.
- Uniforms minimos:
  - `uTime`
  - `uResolution`
- Vertex shader simples, pass-through com UV.
- Fragment shader com noise inline e ondas diagonais sutis.
- Intensidade baixa e atmosferica, sem competir com o conteudo.
- Atualizacao de `uTime` via `useFrame`.

### Guardrails
- O shader nao pode ser chamativo demais.
- Em dispositivos modestos, a complexidade do shader deve ser reduzida.
- O custo do shader deve ser monitorado para nao virar o gargalo da experiencia.

## 3D Graph Home
### Node system
- `Pedro Dias` como no central maior.
- Nos secundarios:
  - `Sobre`
  - `Experiencia`
  - `Skills`
  - `Projetos`
  - `Contato`
- Cada no usa esfera ou forma emissiva customizada, sem cair em geometria padrao sem identidade.

### Connections
- Linhas entre centro e nos secundarios.
- Cada conexao recebe pulsos viajando pela aresta em loop.
- O grafo flutua e autorotate lentamente no desktop.
- Em mobile, o grafo reduz densidade e movimento.

### Interaction behavior
- Hover:
  - escala e brilho aumentam
  - tooltip com label
- Click:
  - no selecionado permanece ativo
  - painel correspondente abre
  - estado do mapa muda sem tirar o usuario do contexto

## Panel System
### Shared panel behavior
- `AnimatePresence + motion.div` para lifecycle.
- Entrada pelo lado direito no desktop.
- Entrada por baixo no mobile.
- Painel com:
  - borda esquerda `2px` em gradiente `ciano -> roxo`
  - header fixo com titulo e botao `X`
  - scroll interno independente
  - fundo `rgba(5,10,20,0.92)`
  - `backdrop-blur(12px)`
- Quando aberto, o mapa permanece visivel no desktop com opacidade reduzida e overlay.

### Stacked behavior
- A pilha deve aceitar subpaineis.
- O componente de pilha deve ser generico para que `Projetos` consiga abrir detalhes internos sem gambiarras.
- O historico de navegacao dentro da pilha deve ser claro no header.

## Section Design
### Sobre
- Layout assimetrico quebrando grid.
- 60% texto, 40% visual 3D.
- Objeto 3D: `torus knot` wireframe girando lentamente, simbolizando complexidade de integracoes.
- Texto organizado em tres blocos com tratamentos visuais distintos.
- Stats com counters animados e remocao progressiva de blur.

### Experiencia
- Painel em formato de terminal real.
- Barra superior com dots vermelho/amarelo/verde.
- Fonte `JetBrains Mono`.
- Ao abrir, o terminal executa automaticamente o pseudo-comando de carreira e digita os blocos em sequencia.
- O botao de download do CV deve parecer um comando executavel, alinhado com a narrativa.

### Skills
- Honeycomb hexagonal em CSS puro no desktop.
- Hover com brilho de borda, scale e microprofundidade.
- Clique abre mini painel contextual com descricao do dominio daquela tecnologia.
- No mobile, vira grid simplificada de tres colunas ou equivalente responsivo.
- As categorias usam codificacao de cor por glow:
  - ciano: engenharia core
  - roxo: cloud e infra
  - laranja: IA e emergentes
  - branco: dados
  - verde: processos e integracao operacional

### Projetos
Esta e a secao heroica de conteudo do sistema.

- Cada projeto e representado como mapa de integracao animado.
- O projeto `Volt Sports` ocupa destaque principal em largura total.
- Os demais ficam em grid `2x2` no desktop.
- Cada card possui:
  - header com nome e badges
  - mapa de integracao SVG
  - toggle de detalhes
- Fluxos de dados sao representados por `path` SVG com pequenos circulos animados usando `animateMotion`.
- Velocidades de fluxo variam por tipo de dados.
- A secao `Volt Sports` deve mostrar topologia multi-tenant com hub central e fornecedores em arco.
- Os detalhes expandidos devem incluir metricas e stack usada.

### Contato
- Layout em dois paineis.
- Painel esquerdo como console de transmissao.
- Campos do formulario apresentados como parametros do sistema.
- Botao de envio deve mudar de `> SEND TRANSMISSION` para estados de loading e sucesso.
- Painel direito com canais diretos em cards energizados por hover.
- EmailJS permanece como integracao de envio.

## UI Systems
### Navbar
- Mantida como camada superior leve.
- Logo `PD` com glitch no hover.
- Links com underline animado crescendo da esquerda para a direita.
- CTA de CV com borda gradiente animada.
- Blur e glow sutil ao scroll.

### Custom cursor
- Cursor padrao substituido em desktop.
- Circulo externo com spring e atraso controlado.
- Ponto interno segue diretamente o mouse.
- Hover em clicaveis expande o circulo.
- Clique gera pulso rapido.
- Em touch devices, o cursor customizado e desativado.

### Loading screen
- Sequencia estilo terminal antes de liberar a experiencia.
- Cada linha aparece com atraso controlado.
- O desaparecimento precisa ser suave e coerente com o reveal do mapa.

### Footer
- Linha de terminal piscando.
- Subtexto tecnico com stack e deploy.

## Motion Rules
- Evitar depender de fade + slide-up como padrao universal.
- Variar entradas por tipo de elemento:
  - texto: wipe/clip reveal
  - 3D: fade + scale leve
  - cards: stagger com direcoes alternadas
  - numeros: count up com blur reduzindo
- O glitch do nome deve ser episodico, nao constante.
- Movimento continuo precisa ser elegante e de baixa amplitude.

## Content Model
`src/data/index.js` deve ser reorganizado para separar:
- `graphNodes`
- `aboutContent`
- `experienceCommits`
- `skillsGroups`
- `projects`
- `contactContent`
- `uiCopy`
- `portfolioLocales`

A implementacao inicial usa `pt` como fonte de verdade.
A estrutura deve permitir adicionar `en` e `es` depois sem mover responsabilidades entre componentes.

## Dependencies
Adicionar ou manter:
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `framer-motion`
- `@react-spring/three`
- `leva`
- `emailjs-com`
- `react-intersection-observer`
- `gsap`

## Responsiveness
### Mobile
- Grafo simplificado e menos carregado.
- Sem autorotate agressivo.
- Painel ocupa tela toda.
- Terminal com fonte menor e scroll horizontal controlado.
- Skills em grid simplificada.
- Integration maps podem receber versao condensada quando necessario.

### Tablet
- Camera mais afastada.
- Alguns layouts de duas colunas colapsam para uma coluna.
- O comportamento do painel segue o desktop enquanto houver espaco util suficiente.

## Accessibility and Fallbacks
- Respeitar `prefers-reduced-motion`.
- Garantir foco visivel em botoes, links e controles do grafo quando houver fallback acessivel.
- Tooltips e botoes devem manter `aria-label` coerente.
- O site precisa continuar navegavel se algum modulo 3D falhar.
- O mapa deve ter fallback de UI suficiente para nao bloquear a navegacao.

## Validation Plan
Antes de encerrar a implementacao:
- `npm run build` deve passar.
- Validar interacao basica do grafo.
- Validar abertura e fechamento de paineis.
- Validar o terminal da experiencia em tempo real.
- Validar os integration maps com animacao de fluxo.
- Validar o formulario de contato com estados corretos.
- Validar responsividade principal.
- Validar com `Playwright` no final do desenvolvimento, cobrindo:
  - carregamento inicial
  - clique em nos do grafo
  - troca de paineis/sequencia de paineis
  - render das secoes principais
  - ausencia de erro critico no console

## Scope Boundaries
### In scope
- Refatoracao total da experiencia visual e de navegacao.
- Reestruturacao dos componentes atuais para o novo sistema.
- Manutencao do deploy atual no Netlify.
- Preparacao estrutural para `en` e `es`.

### Out of scope for this iteration
- Conteudo completo traduzido para `en` e `es`.
- CMS ou painel administrativo.
- Backends novos alem do EmailJS.
- Mini-cenas 3D independentes para cada secao alem do que foi descrito.

## Risks and Mitigations
- **Risco:** o grafo 3D virar uma barreira em dispositivos fracos.
  - **Mitigacao:** simplificacao por device tier, lazy loading e fallback funcional.
- **Risco:** a pilha de paineis ficar confusa.
  - **Mitigacao:** hierarquia visual clara, profundidade limitada e header contextual.
- **Risco:** a secao de projetos ficar ambiciosa demais para uma unica rodada.
  - **Mitigacao:** criar um `IntegrationMap` base reutilizavel e especializar apenas os dados/topologias.
- **Risco:** performance ruim por combinacao de shader, grafo e blur.
  - **Mitigacao:** modularizar rendering, reduzir qualidade em mobile e medir pelo build e validacao visual.

## Spec Self-Review
- Nao ha placeholders abertos.
- A experiencia esta focada em um unico produto coerente: mapa 3D + paineis imersivos.
- A arquitetura proposta suporta a refatoracao sem exigir subprojetos separados.
- O criterio de validacao com Playwright foi explicitado como parte obrigatoria do encerramento.
