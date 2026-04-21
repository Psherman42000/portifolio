import {
  Activity,
  ArrowRightLeft,
  Bot,
  BrainCircuit,
  Boxes,
  Building2,
  Cable,
  CloudCog,
  Code2,
  Database,
  FlaskConical,
  Globe2,
  LayoutPanelTop,
  MonitorCog,
  Network,
  RadioTower,
  Rocket,
  Send,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Store,
  TestTube2,
  Trophy,
  Wrench,
  Zap,
} from 'lucide-react'

export const defaultLocale = 'pt'
export const supportedLocales = ['pt', 'en', 'es']

export const rootNodeIds = ['about', 'experience', 'skills', 'projects', 'contact']

const ptContent = {
  meta: {
    title: 'Pedro Dias | Sistema Vivo de Integracoes',
    description:
      'Portifolio interativo de Pedro Dias, Tech Lead especializado em integracoes, arquitetura de sistemas e IA aplicada.',
  },
  ui: {
    status: 'Sistema online',
    mapLabel: 'Mapa de Integracao',
    tapHint: 'toque para explorar',
    hoverHint: 'clique em um no para explorar',
    close: 'Fechar painel',
    backToMap: 'Voltar ao mapa',
    stackRoot: 'Mapa',
    loading: [
      '> initializing pedro.dias.sys...',
      '> loading integration protocols... OK',
      '> mounting 3d environment... OK',
      '> establishing connections... OK',
      '> system online OK',
    ],
    footerCommand: '> pedro.dias@integra.do:~$ building the future, one integration at a time_',
    footerNote: 'Concebido com React + Three.js | Publicado no Netlify',
  },
  cv: {
    label: 'Download CV',
    file: '/pedro-dias-cv-2026.pdf',
  },
  graph: {
    center: {
      id: 'root',
      label: 'PEDRO DIAS',
      subtitle: 'Nucleo de integracao',
      position: [0, 0, 0],
      color: '#00FFD1',
    },
    nodes: [
      {
        id: 'about',
        label: 'SOBRE',
        short: 'Origem, lideranca e IA aplicada',
        position: [-2.75, 1.18, -0.65],
        mobilePosition: [-2.1, 1.35, 0],
        color: '#00FFD1',
      },
      {
        id: 'experience',
        label: 'EXPERIENCIA',
        short: 'Carreira em formato git log',
        position: [2.95, 1.05, -0.85],
        mobilePosition: [2.1, 1.15, 0],
        color: '#7B61FF',
      },
      {
        id: 'skills',
        label: 'SKILLS',
        short: 'Stack organizada como malha operacional',
        position: [-3.05, -1.18, 0.75],
        mobilePosition: [-2.15, -1.15, 0],
        color: '#3CF0B6',
      },
      {
        id: 'projects',
        label: 'PROJETOS',
        short: 'Mapas reais de integracao em producao',
        position: [3.1, -0.98, 0.92],
        mobilePosition: [2.15, -1.0, 0],
        color: '#FF6B35',
      },
      {
        id: 'contact',
        label: 'CONTATO',
        short: 'Transmita uma mensagem',
        position: [0, -2.08, 1.24],
        mobilePosition: [0, -2.25, 0],
        color: '#00FFD1',
      },
    ],
  },
  about: {
    id: 'about',
    title: 'Sobre',
    eyebrow: 'Contexto',
    blocks: [
      {
        type: 'display',
        content:
          'Nasci em Formosa, GO em 2000.\nComecei vencendo olimpiadas de programacao.\nHoje lidero sistemas que conectam continentes.',
      },
      {
        type: 'body',
        content:
          'Sou Tech Lead na Integra.do, onde construo e lidero arquiteturas que integram alguns dos maiores sistemas da America Latina. Mais de 40 projetos entregues conectando ERPs, e-commerces e gateways de pagamento, de startups a operacoes varejistas com presenca no Brasil e no Paraguai.',
      },
      {
        type: 'accent',
        content: 'Minha fronteira atual: IA aplicada.\nRAG. Fine-Tuning. Agentes inteligentes. MCP Protocol.',
      },
    ],
    stats: [
      { value: 40, prefix: '+', suffix: ' projetos', label: 'Projetos entregues' },
      { value: 4, prefix: '+', suffix: ' anos', label: 'Em integracoes e produto' },
      { value: 2, prefix: '', suffix: ' paises', label: 'Brasil e Paraguai' },
      { value: 99, prefix: '', suffix: '+ fluxos', label: 'Sincronizacoes ativas' },
    ],
  },
  experience: {
    id: 'experience',
    title: 'Experiencia',
    eyebrow: 'Terminal de carreira',
    terminalCommand: '> git log --career --author="Pedro Dias" --format=full',
    downloadCommand: '> curl -O pedro-dias-cv.pdf [ENTER]',
    log: `commit a4f2e91 (HEAD -> main)\nAuthor: Pedro Dias <pedroid199@gmail.com>\nDate:   Oct 2024 - Present\n\n    feat: promoted to Tech Lead @ Integra.do\n\n    - Defined microservices architecture for complex integrations\n    - Implemented AI solutions: RAG, Fine-Tuning, MCP Agents\n    - Led cloud infrastructure on AWS, Tencent Cloud, Docker, Kubernetes\n    - Scaled team delivering enterprise-grade integration systems\n\ncommit 3b8c204\nDate:   Apr 2024 - Oct 2024\n\n    feat: Product Manager @ Integra.do\n\n    - Owned strategic roadmap and backlog prioritization\n    - Managed KPIs and stakeholder alignment (tech + executive)\n    - Coordinated delivery for major enterprise clients\n\ncommit 91d7a33\nDate:   Apr 2023 - Mar 2024\n\n    feat: Product Owner @ Integra.do\n\n    - Backlog management with SCRUM + XP\n    - Translated business requirements into technical specs\n\ncommit 2e5f801\nDate:   Apr 2022 - Mar 2023\n\n    feat: Software Engineer @ Integra.do\n\n    - Built REST API and Webhook integrations\n    - Developed microservices: Node.js, Python, Spring Boot\n    - Delivered 40+ integration projects\n\ncommit 8a1c390\nDate:   Mar 2022 - Apr 2022\n\n    feat: Software Engineer @ Money Cloud\n\n    - Backend development and financial systems integration\n\ncommit 0d4b271\nDate:   Sep 2021 - Mar 2022\n\n    feat: Junior Software Engineer @ Cartorio Colorado\n\n    - Co-built Brazil's first fully online wedding platform\n\n> ¦`,
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    eyebrow: 'Malha operacional',
    description: 'Uma malha de competencias onde engenharia, cloud, IA e processos operam como um unico sistema.',
    groups: [
      {
        title: 'Engenharia central',
        color: '#00FFD1',
        items: [
          { name: 'Node.js', icon: Code2, level: 'Especialista', description: 'Backends de alta cadencia, integracoes REST e automacoes de negocio.' },
          { name: 'Python', icon: FlaskConical, level: 'Avancado', description: 'Servicos, scripts de integracao e experimentos de IA aplicada.' },
          { name: 'Spring Boot', icon: ServerCog, level: 'Avancado', description: 'Microsservicos enterprise com contratos bem definidos e observabilidade.' },
          { name: 'Laravel', icon: LayoutPanelTop, level: 'Intermediario', description: 'Aplicacoes web e APIs orientadas a produtividade.' },
        ],
      },
      {
        title: 'Cloud & Infra',
        color: '#7B61FF',
        items: [
          { name: 'AWS', icon: CloudCog, level: 'Avancado', description: 'Arquiteturas em nuvem, servicos gerenciados e pipelines de deploy.' },
          { name: 'Tencent Cloud', icon: Globe2, level: 'Avancado', description: 'Operacao em nuvem orientada a integracoes de producao na Integra.do.' },
          { name: 'Docker', icon: Boxes, level: 'Avancado', description: 'Empacotamento padrao e previsivel para servicos distribuidos.' },
          { name: 'Kubernetes', icon: MonitorCog, level: 'Intermediario/Avancado', description: 'Orquestracao de workloads criticos com foco em estabilidade.' },
        ],
      },
      {
        title: 'IA aplicada',
        color: '#FF6B35',
        items: [
          { name: 'RAG', icon: BrainCircuit, level: 'Avancado', description: 'Sistemas que consultam contexto e respondem com grounding operacional.' },
          { name: 'Fine-Tuning', icon: Wrench, level: 'Avancado', description: 'Ajuste de comportamento de modelos para necessidades especificas.' },
          { name: 'MCP Protocol', icon: Cable, level: 'Avancado', description: 'Integracao entre agentes, ferramentas e contexto operacional.' },
          { name: 'AI Agents', icon: Bot, level: 'Avancado', description: 'Fluxos autonomos com memoria, ferramentas e tomada de decisao controlada.' },
        ],
      },
      {
        title: 'Dados',
        color: '#E8F0FF',
        items: [
          { name: 'MongoDB', icon: Database, level: 'Avancado', description: 'Modelagem de dados flexivel para integracoes e sincronizacoes.' },
          { name: 'SQL', icon: Database, level: 'Avancado', description: 'Consultas, conciliacao e integridade em fluxos transacionais.' },
        ],
      },
      {
        title: 'Processos',
        color: '#56D364',
        items: [
          { name: 'SCRUM', icon: Activity, level: 'Avancado', description: 'Ritmo de entrega com previsibilidade e feedback continuo.' },
          { name: 'XP', icon: Rocket, level: 'Avancado', description: 'Qualidade tecnica, iteracao curta e colaboracao forte com produto.' },
          { name: 'REST APIs', icon: ArrowRightLeft, level: 'Especialista', description: 'Contratos claros, resiliencia e escalabilidade para ecossistemas distribuidos.' },
          { name: 'Webhooks', icon: RadioTower, level: 'Especialista', description: 'Eventos em tempo real para sincronizacao de plataformas.' },
          { name: 'Microsservicos', icon: Network, level: 'Avancado', description: 'Separacao de responsabilidades e operacao modular.' },
        ],
      },
    ],
  },
  projects: {
    id: 'projects',
    title: 'Projetos',
    eyebrow: 'Mapa de integracao',
    description: 'Cada projeto e apresentado como topologia real de fluxo, mostrando como catalogo, pedidos, faturamento e dados cruzam sistemas.',
    cards: [
      {
        id: 'volt',
        name: 'Volt Sports + Times do Brasil',
        badge: 'Multi-tenant | 14+ fornecedores ativos',
        size: 'full',
        traffic: '~18k transacoes/dia',
        summary:
          'Integracao de catalogo, pedidos e faturamento entre Volt Sports, camada de integracao e multiplos fornecedores do futebol brasileiro.',
        environment: 'Producao',
        metrics: ['Clientes ativos: Volt Sports + 14 fornecedores', 'Fluxos: Catalogo · Pedidos · Faturamento', 'Stack: Node.js · REST APIs · Webhooks · MongoDB'],
        legend: [
          { label: 'Catalogo', color: '#00FFD1' },
          { label: 'Pedidos', color: '#7B61FF' },
          { label: 'Faturamento', color: '#FF6B35' },
        ],
        nodes: [
          { id: 'volt', label: 'Volt Sports E-commerce', x: 360, y: 74, kind: 'primary' },
          { id: 'hub', label: 'Integration Layer - Integra.do', x: 360, y: 190, kind: 'hub' },
          { id: 'america', label: 'America FC', x: 96, y: 334, kind: 'partner' },
          { id: 'avai', label: 'Avai', x: 178, y: 372, kind: 'partner' },
          { id: 'bahia', label: 'Bahia', x: 264, y: 404, kind: 'partner' },
          { id: 'botafogo', label: 'Botafogo', x: 360, y: 418, kind: 'partner' },
          { id: 'cbv', label: 'CBV', x: 454, y: 404, kind: 'partner' },
          { id: 'coritiba', label: 'Coritiba', x: 540, y: 372, kind: 'partner' },
          { id: 'criciuma', label: 'Criciuma', x: 618, y: 334, kind: 'partner' },
          { id: 'figueirense', label: 'Figueirense', x: 182, y: 448, kind: 'partner' },
          { id: 'fortaleza', label: 'Fortaleza', x: 278, y: 486, kind: 'partner' },
          { id: 'joinville', label: 'Joinville', x: 360, y: 506, kind: 'partner' },
          { id: 'remo', label: 'Remo', x: 444, y: 486, kind: 'partner' },
          { id: 'vila', label: 'Vila Nova', x: 534, y: 448, kind: 'partner' },
          { id: 'vitoria', label: 'Vitoria', x: 616, y: 408, kind: 'partner' },
          { id: 'lifestyle', label: 'Volt Lifestyle', x: 702, y: 360, kind: 'partner' },
        ],
        edges: [
          { from: 'volt', to: 'hub', type: 'catalog' },
          { from: 'volt', to: 'hub', type: 'orders', offset: -12 },
          { from: 'volt', to: 'hub', type: 'billing', offset: 12 },
          { from: 'hub', to: 'america', type: 'catalog' },
          { from: 'hub', to: 'avai', type: 'catalog' },
          { from: 'hub', to: 'bahia', type: 'orders' },
          { from: 'hub', to: 'botafogo', type: 'orders' },
          { from: 'hub', to: 'cbv', type: 'billing' },
          { from: 'hub', to: 'coritiba', type: 'billing' },
          { from: 'hub', to: 'criciuma', type: 'catalog' },
          { from: 'hub', to: 'figueirense', type: 'orders' },
          { from: 'hub', to: 'fortaleza', type: 'catalog' },
          { from: 'hub', to: 'joinville', type: 'orders' },
          { from: 'hub', to: 'remo', type: 'billing' },
          { from: 'hub', to: 'vila', type: 'catalog' },
          { from: 'hub', to: 'vitoria', type: 'orders' },
          { from: 'hub', to: 'lifestyle', type: 'billing' },
        ],
      },
      {
        id: 'retail',
        name: 'Maior rede de supermercados sul-americana',
        badge: 'Maior rede varejista da America do Sul',
        summary: 'Pedidos, estoque e campanhas sincronizados entre canais de venda e ERP interno.',
        nodes: [
          { id: 'facebook', label: 'Facebook Ads', x: 80, y: 110, kind: 'partner' },
          { id: 'api', label: 'API Integra.do', x: 220, y: 170, kind: 'hub' },
          { id: 'erp', label: 'ERP Interno', x: 360, y: 110, kind: 'primary' },
          { id: 'ifood', label: 'iFood', x: 360, y: 250, kind: 'partner' },
        ],
        edges: [
          { from: 'facebook', to: 'api', type: 'orders' },
          { from: 'api', to: 'erp', type: 'catalog' },
          { from: 'ifood', to: 'api', type: 'orders' },
          { from: 'api', to: 'erp', type: 'billing' },
        ],
      },
      {
        id: 'ambev',
        name: 'Ze Delivery + Ambev',
        badge: 'Entregue em tempo recorde',
        summary: 'Entrega acelerada de uma ponte operacional entre plataformas de alto volume.',
        nodes: [
          { id: 'ze', label: 'Ze Delivery Platform', x: 90, y: 150, kind: 'partner' },
          { id: 'bridge', label: 'API Integration', x: 220, y: 150, kind: 'hub' },
          { id: 'ambev', label: 'Ambev Systems', x: 350, y: 150, kind: 'primary' },
        ],
        edges: [
          { from: 'ze', to: 'bridge', type: 'orders' },
          { from: 'bridge', to: 'ambev', type: 'catalog' },
        ],
      },
      {
        id: 'monalisa',
        name: 'Monalisa Shopping - Paraguai',
        badge: 'Operacao internacional',
        summary: 'Conexao entre e-commerce e ERP para operacao internacional.',
        nodes: [
          { id: 'shop', label: 'E-commerce', x: 92, y: 150, kind: 'primary' },
          { id: 'layer', label: 'Integration Layer', x: 220, y: 150, kind: 'hub' },
          { id: 'erp', label: 'ERP', x: 350, y: 150, kind: 'partner' },
        ],
        edges: [
          { from: 'shop', to: 'layer', type: 'catalog' },
          { from: 'layer', to: 'erp', type: 'orders' },
        ],
      },
      {
        id: 'cartorio',
        name: 'Cartorio Colorado',
        badge: 'Primeira plataforma de casamento online do Brasil',
        summary: 'Base tecnica da primeira plataforma de casamento online do Brasil.',
        nodes: [
          { id: 'front', label: 'Frontend', x: 64, y: 148, kind: 'partner' },
          { id: 'api', label: 'API', x: 176, y: 148, kind: 'hub' },
          { id: 'db', label: 'Database', x: 288, y: 148, kind: 'primary' },
          { id: 'systems', label: 'Cartorio Systems', x: 400, y: 148, kind: 'partner' },
        ],
        edges: [
          { from: 'front', to: 'api', type: 'orders' },
          { from: 'api', to: 'db', type: 'catalog' },
          { from: 'db', to: 'systems', type: 'billing' },
        ],
      },
    ],
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    eyebrow: 'Transmitir mensagem',
    destination: 'Pedro Dias <pedroid199@gmail.com>',
    protocol: 'EmailJS/SMTP',
    phrase: 'Vamos construir algo\nextraordinario.',
    submit: '> ENVIAR TRANSMISSAO',
    sending: '> transmitindo...',
    success: '> mensagem entregue OK',
    error: '> falha na transmissao',
    social: [
      { label: 'LinkedIn', value: 'pedro-dias-019932198', href: 'https://www.linkedin.com/in/pedro-dias-019932198/' },
      { label: 'Email', value: 'pedroid199@gmail.com', href: 'mailto:pedroid199@gmail.com' },
      { label: 'GitHub', value: 'github.com/Psherman42000', href: 'https://github.com/Psherman42000' },
    ],
  },
}

export const portfolioLocales = {
  pt: ptContent,
  en: null,
  es: null,
}

export function getPortfolioContent(locale = defaultLocale) {
  return portfolioLocales[locale] ?? portfolioLocales[defaultLocale]
}


