import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Braces,
  Building2,
  Cable,
  CloudCog,
  Database,
  FlaskConical,
  Globe2,
  GraduationCap,
  LayoutPanelTop,
  MonitorCog,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Store,
  TestTube2,
  Trophy,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'

export const defaultLocale = 'pt'

export const portfolioData = {
  pt: {
    nav: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Skills', href: '#skills' },
      { label: 'Realizações', href: '#realizacoes' },
      { label: 'Contato', href: '#contato' },
    ],
    cv: {
      label: 'Download CV',
      file: '/pedro-dias-cv-2026.pdf',
    },
    hero: {
      eyebrow: 'Dark tech futurista com toque humano',
      name: 'Pedro Dias',
      roles: ['Tech Lead', 'Software Engineer', 'AI & Integration Specialist', 'Builder of scalable systems'],
      summary:
        'Liderando integrações críticas, plataformas escaláveis e experiências de IA aplicada para negócios que precisam operar com clareza, velocidade e inteligência.',
      primaryCta: { label: 'Ver minha história', href: '#sobre' },
      secondaryCta: { label: 'Entre em contato', href: '#contato' },
      commandCenter: [
        { label: 'Origem', value: 'Formosa, GO' },
        { label: 'Foco atual', value: 'Integrações + IA aplicada' },
        { label: 'Escala', value: '+40 projetos' },
      ],
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Arquitetura sólida, integrações críticas e IA aplicada com impacto real.',
      description:
        'Uma trajetória construída entre competição, produto, engenharia e liderança técnica.',
      paragraphs: [
        'Sou Pedro Dias, nascido em 2000 em Formosa, GO. Comecei cedo na programação, vencendo as Olimpíadas Brasileiras de Informática, e desde então nunca parei de construir coisas que importam.',
        'Hoje atuo como Tech Lead na Integra.do, onde lidero equipes e arquiteturas de integração entre alguns dos maiores sistemas da América Latina. Já gerenciei mais de 40 projetos conectando ERPs, e-commerces e gateways de pagamento, de startups a grandes redes varejistas sul-americanas.',
        'Minha paixão está na fronteira entre arquitetura de software sólida e inteligência artificial aplicada. Trabalho com RAG, Fine-Tuning de modelos, agentes inteligentes e o protocolo MCP, construindo sistemas que não apenas integram, mas pensam.',
      ],
      panel: {
        title: 'Mission Control',
        subtitle: 'Visão rápida do meu campo de atuação hoje.',
        items: [
          { label: 'Tech Lead', value: 'Integra.do' },
          { label: 'Especialidade', value: 'Integrações de alta criticidade' },
          { label: 'Horizonte', value: 'Cloud, AI agents, RAG, MCP' },
          { label: 'Região', value: 'Brasil + América Latina' },
        ],
        badges: ['Arquitetura de Software', 'Microsserviços', 'Produtização de IA', 'Operação Multi-plataforma'],
      },
      stats: [
        {
          icon: Rocket,
          value: 40,
          prefix: '+',
          suffix: ' projetos',
          label: 'Projetos entregues com integrações entre ERPs, e-commerces e pagamentos.',
        },
        {
          icon: Globe2,
          value: 2,
          prefix: '',
          suffix: ' regiões',
          label: 'Brasil e América Latina em contextos de operação real.',
        },
        {
          icon: BrainCircuit,
          value: 4,
          prefix: '',
          suffix: ' frentes de IA',
          label: 'RAG, Fine-Tuning, MCP Protocol e agentes inteligentes.',
        },
        {
          icon: CloudCog,
          value: 2,
          prefix: '',
          suffix: ' clouds',
          label: 'AWS e GCP aplicados em plataformas e integrações resilientes.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Da engenharia hands-on à liderança de times e sistemas escaláveis.',
      description:
        'Uma timeline centrada em integração de plataformas, visão de produto e evolução para liderança técnica.',
      items: [
        {
          period: '2024 - Atual',
          role: 'Tech Lead',
          company: 'Integra.do',
          description:
            'Liderança de equipes, arquitetura de microsserviços, cloud AWS/GCP, Docker, Kubernetes e iniciativas com RAG, Fine-Tuning e agentes de IA.',
          tech: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'RAG', 'AI Agents'],
        },
        {
          period: '2024',
          role: 'Product Manager',
          company: 'Integra.do',
          description:
            'Roadmap estratégico, gestão de KPIs e alinhamento contínuo entre necessidades de negócio e execução da engenharia.',
          tech: ['KPIs', 'Roadmap', 'Stakeholders', 'Produto'],
        },
        {
          period: '2023 - 2024',
          role: 'Product Owner',
          company: 'Integra.do',
          description:
            'Atuação com SCRUM + XP, backlog, sprints e especificações técnicas para times construindo integrações robustas.',
          tech: ['SCRUM', 'XP', 'Backlog', 'Sprints'],
        },
        {
          period: '2022 - 2023',
          role: 'Software Engineer',
          company: 'Integra.do',
          description:
            'Construção de REST APIs, Webhooks e microsserviços com Node.js, Python e Spring Boot, somando mais de 40 integrações entregues.',
          tech: ['Node.js', 'Python', 'Spring Boot', 'REST APIs', 'Webhooks'],
        },
        {
          period: '2022',
          role: 'Software Engineer',
          company: 'Money Cloud',
          description: 'Desenvolvimento backend e integração com sistemas financeiros em contexto de operação sensível.',
          tech: ['Backend', 'Financeiro', 'Integração'],
        },
        {
          period: '2021 - 2022',
          role: 'Software Engineer Jr',
          company: 'Cartório Colorado',
          description: 'Participação na primeira plataforma de casamento online do Brasil, conectando tecnologia e serviço público.',
          tech: ['Produto Digital', 'Backend', 'Plataforma'],
        },
      ],
    },
    skillsMeta: {
      eyebrow: 'Skills',
      title: 'Competências organizadas como peças de um sistema vivo.',
      description:
        'Linguagens, cloud, dados, IA e práticas de qualidade conectadas numa mesma malha operacional.',
    },
    skillGroups: [
      {
        title: 'Linguagens & Frameworks',
        description: 'Ferramentas de construção para backends, integrações e aplicações críticas.',
        items: [
          { name: 'Node.js', icon: Braces },
          { name: 'Python', icon: FlaskConical },
          { name: 'Spring Boot', icon: ServerCog },
          { name: 'Laravel', icon: LayoutPanelTop },
        ],
      },
      {
        title: 'Cloud & Infra',
        description: 'Base operacional para escalar integrações e serviços distribuídos.',
        items: [
          { name: 'AWS', icon: CloudCog },
          { name: 'Google Cloud', icon: Globe2 },
          { name: 'Docker', icon: Boxes },
          { name: 'Kubernetes', icon: MonitorCog },
        ],
      },
      {
        title: 'Dados',
        description: 'Estruturação, persistência e leitura de dados para fluxo confiável.',
        items: [
          { name: 'MongoDB', icon: Database },
          { name: 'SQL', icon: Database },
        ],
      },
      {
        title: 'IA Aplicada',
        description: 'Sistemas que consultam contexto, aprendem melhor e agem com autonomia controlada.',
        items: [
          { name: 'RAG', icon: BrainCircuit },
          { name: 'Fine-Tuning', icon: Wrench },
          { name: 'MCP Protocol', icon: Cable },
          { name: 'Agentes Inteligentes', icon: Bot },
        ],
      },
      {
        title: 'Metodologia',
        description: 'Coordenação entre velocidade, previsibilidade e evolução técnica.',
        items: [
          { name: 'SCRUM', icon: Workflow },
          { name: 'XP', icon: BadgeCheck },
          { name: 'Microsserviços', icon: Building2 },
          { name: 'REST APIs', icon: Activity },
          { name: 'Webhooks', icon: Cable },
        ],
      },
      {
        title: 'Qualidade',
        description: 'Confiabilidade operacional e cuidado com observabilidade.',
        items: [
          { name: 'Testes Automatizados', icon: TestTube2 },
          { name: 'Monitoramento', icon: ShieldCheck },
        ],
      },
    ],
    highlights: {
      eyebrow: 'Realizações',
      title: 'Marcos que conectam ambição técnica e entrega concreta.',
      description:
        'Conquistas acadêmicas, integrações de alto impacto e projetos executados com velocidade e responsabilidade.',
      items: [
        {
          icon: Trophy,
          title: '1º lugar — OBI',
          description: 'Categoria Programação Sênior | IFG Campus Formosa.',
        },
        {
          icon: GraduationCap,
          title: 'Graduado com Louvor',
          description: 'Análise e Desenvolvimento de Sistemas — IFG, 2021.',
        },
        {
          icon: ShoppingCart,
          title: 'Maior rede de supermercados sul-americana',
          description: 'Integrações com Facebook e iFood gerenciadas com sucesso.',
        },
        {
          icon: Zap,
          title: 'Zé Delivery + Ambev',
          description: 'Projeto piloto de integração entregue em tempo recorde.',
        },
        {
          icon: Store,
          title: 'Monalisa Shopping — Paraguai',
          description: 'Integração e-commerce + ERP para um dos maiores shoppings do Paraguai.',
        },
        {
          icon: Rocket,
          title: '+40 projetos de integração',
          description: 'Brasil e exterior, conectando ERPs, e-commerces e gateways de pagamento.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos construir algo extraordinário juntos.',
      description:
        'Se a sua operação precisa integrar melhor, escalar com clareza ou transformar IA em produto útil, podemos conversar.',
      emailConfigNote: 'Formulário preparado para EmailJS. Basta preencher as variáveis de ambiente para habilitar o envio.',
      socialLinks: [
        {
          label: 'LinkedIn',
          value: 'pedro-dias-019932198',
          href: 'https://www.linkedin.com/in/pedro-dias-019932198/',
        },
        {
          label: 'Email',
          value: 'pedroid199@gmail.com',
          href: 'mailto:pedroid199@gmail.com',
        },
        {
          label: 'GitHub',
          value: 'placeholder para preencher depois',
          href: null,
        },
      ],
    },
    footer: {
      terminal: '> building the future, one integration at a time_',
      signature: 'Pedro Dias — Tech Lead • Software Engineer • AI & Integration Specialist',
    },
  },
}

