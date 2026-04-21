import {
  Activity,
  BadgeCheck,
  Bot,
  Boxes,
  BrainCircuit,
  Braces,
  Building2,
  Cable,
  CloudCog,
  Code2,
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
export const supportedLocales = ['pt', 'en', 'es']

export const portfolioData = {
  pt: {
    localeLabel: 'PT',
    nav: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Experiência', href: '#experiencia' },
      { label: 'Skills', href: '#skills' },
      { label: 'Realizações', href: '#realizacoes' },
      { label: 'Contato', href: '#contato' },
    ],
    localeToggleLabel: 'Idioma',
    dividers: {
      about: 'Origem',
      experience: 'Trajetória',
      skills: 'Stack',
      highlights: 'Impacto',
      contact: 'Contato',
    },
    cv: {
      label: 'Download CV',
      file: '/pedro-dias-cv-2026.pdf',
    },
    hero: {
      eyebrow: '',
      name: 'Pedro Dias',
      roles: ['Tech Lead', 'Software Engineer', 'AI & Integration Specialist', 'Builder of scalable systems'],
      summary:
        'Liderando integrações críticas, plataformas escaláveis e experiências de IA aplicada para negócios que precisam operar com clareza, velocidade e inteligência.',
      primaryCta: { label: 'Ver minha história', href: '#sobre' },
      secondaryCta: { label: 'Entre em contato', href: '#contato' },
      scrollLabel: 'scroll',
      commandCenterTitle: 'Cockpit Overview',
      commandCenter: [
        { label: 'Origem', value: 'Brasília, DF' },
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
          { label: 'Horizonte', value: 'AWS, Tencent Cloud, AI agents, RAG, MCP' },
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
          label: 'AWS e Tencent Cloud aplicados em plataformas e integrações resilientes.',
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
            'Liderança de equipes, arquitetura de microsserviços, cloud AWS e Tencent Cloud, Docker, Kubernetes e iniciativas com RAG, Fine-Tuning e agentes de IA.',
          tech: ['AWS', 'Tencent Cloud', 'Docker', 'Kubernetes', 'RAG', 'AI Agents'],
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
          { name: 'Tencent Cloud', icon: Globe2 },
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
          icon: Globe2,
        },
        {
          label: 'Email',
          value: 'pedroid199@gmail.com',
          href: 'mailto:pedroid199@gmail.com',
          icon: Rocket,
        },
        {
          label: 'GitHub',
          value: 'github.com/Psherman42000',
          href: 'https://github.com/Psherman42000',
          icon: Code2,
        },
      ],
    },
    footer: {
      terminal: '> building the future, one integration at a time_',
      signature: 'Pedro Dias - Tech Lead • Software Engineer • AI & Integration Specialist',
    },
  },
  en: {
    localeLabel: 'EN',
    nav: [
      { label: 'About', href: '#sobre' },
      { label: 'Experience', href: '#experiencia' },
      { label: 'Skills', href: '#skills' },
      { label: 'Highlights', href: '#realizacoes' },
      { label: 'Contact', href: '#contato' },
    ],
    localeToggleLabel: 'Language',
    dividers: {
      about: 'Origin',
      experience: 'Journey',
      skills: 'Stack',
      highlights: 'Impact',
      contact: 'Contact',
    },
    cv: {
      label: 'Download CV',
      file: '/pedro-dias-cv-2026.pdf',
    },
    hero: {
      eyebrow: '',
      name: 'Pedro Dias',
      roles: ['Tech Lead', 'Software Engineer', 'AI & Integration Specialist', 'Builder of scalable systems'],
      summary:
        'Leading mission-critical integrations, scalable platforms, and applied AI experiences for businesses that need to operate with clarity, speed, and intelligence.',
      primaryCta: { label: 'See my story', href: '#sobre' },
      secondaryCta: { label: 'Get in touch', href: '#contato' },
      scrollLabel: 'scroll',
      commandCenterTitle: 'Cockpit Overview',
      commandCenter: [
        { label: 'Origin', value: 'Brasilia, DF' },
        { label: 'Current focus', value: 'Integrations + Applied AI' },
        { label: 'Scale', value: '+40 projects' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Solid architecture, mission-critical integrations, and applied AI with real business impact.',
      description: 'A trajectory built across competition, product, engineering, and technical leadership.',
      paragraphs: [
        'I am Pedro Dias, born in 2000 in Formosa, GO. I started programming early, winning the Brazilian Informatics Olympiad, and I have not stopped building meaningful things since then.',
        'Today I work as a Tech Lead at Integra.do, where I lead teams and integration architectures connecting some of the largest systems in Latin America. I have already managed more than 40 projects linking ERPs, e-commerce platforms, and payment gateways, from startups to major South American retail networks.',
        'My passion lives at the frontier between solid software architecture and applied artificial intelligence. I work with RAG, model fine-tuning, intelligent agents, and the MCP protocol, building systems that do not just integrate, but think.',
      ],
      panel: {
        title: 'Mission Control',
        subtitle: 'A quick overview of the field I am operating in today.',
        items: [
          { label: 'Tech Lead', value: 'Integra.do' },
          { label: 'Specialty', value: 'High-criticality integrations' },
          { label: 'Horizon', value: 'AWS, Tencent Cloud, AI agents, RAG, MCP' },
          { label: 'Region', value: 'Brazil + Latin America' },
        ],
        badges: ['Software Architecture', 'Microservices', 'AI Productization', 'Multi-platform Operations'],
      },
      stats: [
        {
          icon: Rocket,
          value: 40,
          prefix: '+',
          suffix: ' projects',
          label: 'Projects delivered across ERPs, e-commerce platforms, and payment systems.',
        },
        {
          icon: Globe2,
          value: 2,
          prefix: '',
          suffix: ' regions',
          label: 'Brazil and Latin America in real operational contexts.',
        },
        {
          icon: BrainCircuit,
          value: 4,
          prefix: '',
          suffix: ' AI fronts',
          label: 'RAG, Fine-Tuning, MCP Protocol, and intelligent agents.',
        },
        {
          icon: CloudCog,
          value: 2,
          prefix: '',
          suffix: ' clouds',
          label: 'AWS and Tencent Cloud applied to resilient integration platforms.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'From hands-on engineering to leading teams and scalable systems.',
      description:
        'A timeline centered on platform integrations, product thinking, and growth into technical leadership.',
      items: [
        {
          period: '2024 - Present',
          role: 'Tech Lead',
          company: 'Integra.do',
          description:
            'Team leadership, microservice architecture, AWS and Tencent Cloud environments, Docker, Kubernetes, and initiatives with RAG, Fine-Tuning, and AI agents.',
          tech: ['AWS', 'Tencent Cloud', 'Docker', 'Kubernetes', 'RAG', 'AI Agents'],
        },
        {
          period: '2024',
          role: 'Product Manager',
          company: 'Integra.do',
          description:
            'Strategic roadmap ownership, KPI management, and continuous alignment between business needs and engineering execution.',
          tech: ['KPIs', 'Roadmap', 'Stakeholders', 'Product'],
        },
        {
          period: '2023 - 2024',
          role: 'Product Owner',
          company: 'Integra.do',
          description:
            'Working with SCRUM + XP, backlog, sprints, and technical specifications for teams building robust integrations.',
          tech: ['SCRUM', 'XP', 'Backlog', 'Sprints'],
        },
        {
          period: '2022 - 2023',
          role: 'Software Engineer',
          company: 'Integra.do',
          description:
            'Built REST APIs, Webhooks, and microservices with Node.js, Python, and Spring Boot, delivering more than 40 integrations.',
          tech: ['Node.js', 'Python', 'Spring Boot', 'REST APIs', 'Webhooks'],
        },
        {
          period: '2022',
          role: 'Software Engineer',
          company: 'Money Cloud',
          description: 'Backend development and integration work for financial systems in sensitive operational environments.',
          tech: ['Backend', 'Finance', 'Integration'],
        },
        {
          period: '2021 - 2022',
          role: 'Junior Software Engineer',
          company: 'Cartório Colorado',
          description: 'Worked on Brazil’s first online marriage platform, connecting technology with public service.',
          tech: ['Digital Product', 'Backend', 'Platform'],
        },
      ],
    },
    skillsMeta: {
      eyebrow: 'Skills',
      title: 'Capabilities arranged like parts of a living system.',
      description:
        'Languages, cloud, data, AI, and quality practices connected inside the same operational mesh.',
    },
    skillGroups: [
      {
        title: 'Languages & Frameworks',
        description: 'Core building blocks for backends, integrations, and critical applications.',
        items: [
          { name: 'Node.js', icon: Braces },
          { name: 'Python', icon: FlaskConical },
          { name: 'Spring Boot', icon: ServerCog },
          { name: 'Laravel', icon: LayoutPanelTop },
        ],
      },
      {
        title: 'Cloud & Infra',
        description: 'Operational foundations for scaling integrations and distributed services.',
        items: [
          { name: 'AWS', icon: CloudCog },
          { name: 'Tencent Cloud', icon: Globe2 },
          { name: 'Docker', icon: Boxes },
          { name: 'Kubernetes', icon: MonitorCog },
        ],
      },
      {
        title: 'Data',
        description: 'Structuring, persistence, and reliable data flow.',
        items: [
          { name: 'MongoDB', icon: Database },
          { name: 'SQL', icon: Database },
        ],
      },
      {
        title: 'Applied AI',
        description: 'Systems that retrieve context, learn better, and act with controlled autonomy.',
        items: [
          { name: 'RAG', icon: BrainCircuit },
          { name: 'Fine-Tuning', icon: Wrench },
          { name: 'MCP Protocol', icon: Cable },
          { name: 'Intelligent Agents', icon: Bot },
        ],
      },
      {
        title: 'Methodology',
        description: 'Balancing speed, predictability, and technical evolution.',
        items: [
          { name: 'SCRUM', icon: Workflow },
          { name: 'XP', icon: BadgeCheck },
          { name: 'Microservices', icon: Building2 },
          { name: 'REST APIs', icon: Activity },
          { name: 'Webhooks', icon: Cable },
        ],
      },
      {
        title: 'Quality',
        description: 'Operational reliability and care for observability.',
        items: [
          { name: 'Automated Tests', icon: TestTube2 },
          { name: 'Monitoring', icon: ShieldCheck },
        ],
      },
    ],
    highlights: {
      eyebrow: 'Highlights',
      title: 'Milestones that connect technical ambition and concrete delivery.',
      description:
        'Academic achievements, high-impact integrations, and projects delivered with speed and responsibility.',
      items: [
        {
          icon: Trophy,
          title: '1st place - OBI',
          description: 'Senior Programming Category | IFG Campus Formosa.',
        },
        {
          icon: GraduationCap,
          title: 'Graduated with Honors',
          description: 'Systems Analysis and Development - IFG, 2021.',
        },
        {
          icon: ShoppingCart,
          title: 'Largest South American supermarket chain',
          description: 'Successfully managed integrations with Facebook and iFood.',
        },
        {
          icon: Zap,
          title: 'Zé Delivery + Ambev',
          description: 'Pilot integration project delivered in record time.',
        },
        {
          icon: Store,
          title: 'Monalisa Shopping - Paraguay',
          description: 'E-commerce + ERP integration for one of Paraguay’s largest shopping centers.',
        },
        {
          icon: Rocket,
          title: '+40 integration projects',
          description: 'Brazil and abroad, connecting ERPs, e-commerce platforms, and payment gateways.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something extraordinary together.',
      description:
        'If your operation needs better integrations, clearer scale, or AI turned into useful products, we should talk.',
      emailConfigNote: 'The form is ready for EmailJS. Fill the environment variables to enable sending.',
      socialLinks: [
        {
          label: 'LinkedIn',
          value: 'pedro-dias-019932198',
          href: 'https://www.linkedin.com/in/pedro-dias-019932198/',
          icon: Globe2,
        },
        {
          label: 'Email',
          value: 'pedroid199@gmail.com',
          href: 'mailto:pedroid199@gmail.com',
          icon: Rocket,
        },
        {
          label: 'GitHub',
          value: 'github.com/Psherman42000',
          href: 'https://github.com/Psherman42000',
          icon: Code2,
        },
      ],
    },
    footer: {
      terminal: '> building the future, one integration at a time_',
      signature: 'Pedro Dias - Tech Lead • Software Engineer • AI & Integration Specialist',
    },
  },
  es: {
    localeLabel: 'ES',
    nav: [
      { label: 'Sobre mí', href: '#sobre' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Skills', href: '#skills' },
      { label: 'Logros', href: '#realizacoes' },
      { label: 'Contacto', href: '#contato' },
    ],
    localeToggleLabel: 'Idioma',
    dividers: {
      about: 'Origen',
      experience: 'Trayectoria',
      skills: 'Stack',
      highlights: 'Impacto',
      contact: 'Contacto',
    },
    cv: {
      label: 'Descargar CV',
      file: '/pedro-dias-cv-2026.pdf',
    },
    hero: {
      eyebrow: '',
      name: 'Pedro Dias',
      roles: ['Tech Lead', 'Software Engineer', 'Especialista en IA e Integraciones', 'Creador de sistemas escalables'],
      summary:
        'Liderando integraciones críticas, plataformas escalables y experiencias de IA aplicada para negocios que necesitan operar con claridad, velocidad e inteligencia.',
      primaryCta: { label: 'Ver mi historia', href: '#sobre' },
      secondaryCta: { label: 'Entrar en contacto', href: '#contato' },
      scrollLabel: 'scroll',
      commandCenterTitle: 'Visión General',
      commandCenter: [
        { label: 'Origen', value: 'Brasilia, DF' },
        { label: 'Enfoque actual', value: 'Integraciones + IA aplicada' },
        { label: 'Escala', value: '+40 proyectos' },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Arquitectura sólida, integraciones críticas e IA aplicada con impacto real.',
      description: 'Una trayectoria construida entre competencia, producto, ingeniería y liderazgo técnico.',
      paragraphs: [
        'Soy Pedro Dias, nacido en 2000 en Formosa, GO. Empecé temprano en la programación, ganando las Olimpíadas Brasileñas de Informática, y desde entonces no he dejado de construir cosas que importan.',
        'Hoy actúo como Tech Lead en Integra.do, donde lidero equipos y arquitecturas de integración entre algunos de los mayores sistemas de América Latina. Ya he gestionado más de 40 proyectos conectando ERPs, e-commerces y gateways de pago, desde startups hasta grandes cadenas minoristas sudamericanas.',
        'Mi pasión está en la frontera entre una arquitectura de software sólida y la inteligencia artificial aplicada. Trabajo con RAG, fine-tuning de modelos, agentes inteligentes y el protocolo MCP, construyendo sistemas que no solo integran, sino que también piensan.',
      ],
      panel: {
        title: 'Centro de Mando',
        subtitle: 'Una visión rápida del campo en el que estoy operando hoy.',
        items: [
          { label: 'Tech Lead', value: 'Integra.do' },
          { label: 'Especialidad', value: 'Integraciones de alta criticidad' },
          { label: 'Horizonte', value: 'AWS, Tencent Cloud, AI agents, RAG, MCP' },
          { label: 'Región', value: 'Brasil + América Latina' },
        ],
        badges: ['Arquitectura de Software', 'Microservicios', 'Productización de IA', 'Operación Multiplataforma'],
      },
      stats: [
        {
          icon: Rocket,
          value: 40,
          prefix: '+',
          suffix: ' proyectos',
          label: 'Proyectos entregados conectando ERPs, e-commerces y sistemas de pago.',
        },
        {
          icon: Globe2,
          value: 2,
          prefix: '',
          suffix: ' regiones',
          label: 'Brasil y América Latina en contextos operativos reales.',
        },
        {
          icon: BrainCircuit,
          value: 4,
          prefix: '',
          suffix: ' frentes de IA',
          label: 'RAG, Fine-Tuning, MCP Protocol y agentes inteligentes.',
        },
        {
          icon: CloudCog,
          value: 2,
          prefix: '',
          suffix: ' clouds',
          label: 'AWS y Tencent Cloud aplicados a plataformas e integraciones resilientes.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'De la ingeniería hands-on al liderazgo de equipos y sistemas escalables.',
      description:
        'Una timeline centrada en integraciones de plataformas, visión de producto y evolución hacia el liderazgo técnico.',
      items: [
        {
          period: '2024 - Actualidad',
          role: 'Tech Lead',
          company: 'Integra.do',
          description:
            'Liderazgo de equipos, arquitectura de microservicios, entornos AWS y Tencent Cloud, Docker, Kubernetes e iniciativas con RAG, Fine-Tuning y agentes de IA.',
          tech: ['AWS', 'Tencent Cloud', 'Docker', 'Kubernetes', 'RAG', 'AI Agents'],
        },
        {
          period: '2024',
          role: 'Product Manager',
          company: 'Integra.do',
          description:
            'Roadmap estratégico, gestión de KPIs y alineación continua entre las necesidades del negocio y la ejecución de ingeniería.',
          tech: ['KPIs', 'Roadmap', 'Stakeholders', 'Producto'],
        },
        {
          period: '2023 - 2024',
          role: 'Product Owner',
          company: 'Integra.do',
          description:
            'Trabajo con SCRUM + XP, backlog, sprints y especificaciones técnicas para equipos que construyen integraciones robustas.',
          tech: ['SCRUM', 'XP', 'Backlog', 'Sprints'],
        },
        {
          period: '2022 - 2023',
          role: 'Software Engineer',
          company: 'Integra.do',
          description:
            'Construcción de REST APIs, Webhooks y microservicios con Node.js, Python y Spring Boot, superando las 40 integraciones entregadas.',
          tech: ['Node.js', 'Python', 'Spring Boot', 'REST APIs', 'Webhooks'],
        },
        {
          period: '2022',
          role: 'Software Engineer',
          company: 'Money Cloud',
          description: 'Desarrollo backend e integración con sistemas financieros en un contexto operativo sensible.',
          tech: ['Backend', 'Finanzas', 'Integración'],
        },
        {
          period: '2021 - 2022',
          role: 'Software Engineer Jr',
          company: 'Cartório Colorado',
          description: 'Participación en la primera plataforma de matrimonio online de Brasil, conectando tecnología y servicio público.',
          tech: ['Producto Digital', 'Backend', 'Plataforma'],
        },
      ],
    },
    skillsMeta: {
      eyebrow: 'Skills',
      title: 'Competencias organizadas como piezas de un sistema vivo.',
      description:
        'Lenguajes, cloud, datos, IA y prácticas de calidad conectadas dentro de una misma malla operativa.',
    },
    skillGroups: [
      {
        title: 'Lenguajes & Frameworks',
        description: 'Herramientas base para backends, integraciones y aplicaciones críticas.',
        items: [
          { name: 'Node.js', icon: Braces },
          { name: 'Python', icon: FlaskConical },
          { name: 'Spring Boot', icon: ServerCog },
          { name: 'Laravel', icon: LayoutPanelTop },
        ],
      },
      {
        title: 'Cloud & Infra',
        description: 'Base operativa para escalar integraciones y servicios distribuidos.',
        items: [
          { name: 'AWS', icon: CloudCog },
          { name: 'Tencent Cloud', icon: Globe2 },
          { name: 'Docker', icon: Boxes },
          { name: 'Kubernetes', icon: MonitorCog },
        ],
      },
      {
        title: 'Datos',
        description: 'Estructuración, persistencia y lectura confiable de datos.',
        items: [
          { name: 'MongoDB', icon: Database },
          { name: 'SQL', icon: Database },
        ],
      },
      {
        title: 'IA Aplicada',
        description: 'Sistemas que recuperan contexto, aprenden mejor y actúan con autonomía controlada.',
        items: [
          { name: 'RAG', icon: BrainCircuit },
          { name: 'Fine-Tuning', icon: Wrench },
          { name: 'MCP Protocol', icon: Cable },
          { name: 'Agentes Inteligentes', icon: Bot },
        ],
      },
      {
        title: 'Metodología',
        description: 'Coordinación entre velocidad, previsibilidad y evolución técnica.',
        items: [
          { name: 'SCRUM', icon: Workflow },
          { name: 'XP', icon: BadgeCheck },
          { name: 'Microservicios', icon: Building2 },
          { name: 'REST APIs', icon: Activity },
          { name: 'Webhooks', icon: Cable },
        ],
      },
      {
        title: 'Calidad',
        description: 'Confiabilidad operativa y cuidado con la observabilidad.',
        items: [
          { name: 'Pruebas Automatizadas', icon: TestTube2 },
          { name: 'Monitoreo', icon: ShieldCheck },
        ],
      },
    ],
    highlights: {
      eyebrow: 'Logros',
      title: 'Hitos que conectan ambición técnica y entrega concreta.',
      description:
        'Logros académicos, integraciones de alto impacto y proyectos ejecutados con velocidad y responsabilidad.',
      items: [
        {
          icon: Trophy,
          title: '1er lugar - OBI',
          description: 'Categoría Programación Senior | IFG Campus Formosa.',
        },
        {
          icon: GraduationCap,
          title: 'Graduado con Honores',
          description: 'Análisis y Desarrollo de Sistemas - IFG, 2021.',
        },
        {
          icon: ShoppingCart,
          title: 'Mayor cadena de supermercados sudamericana',
          description: 'Integraciones con Facebook e iFood gestionadas con éxito.',
        },
        {
          icon: Zap,
          title: 'Zé Delivery + Ambev',
          description: 'Proyecto piloto de integración entregado en tiempo récord.',
        },
        {
          icon: Store,
          title: 'Monalisa Shopping - Paraguay',
          description: 'Integración e-commerce + ERP para uno de los mayores shoppings de Paraguay.',
        },
        {
          icon: Rocket,
          title: '+40 proyectos de integración',
          description: 'Brasil y exterior, conectando ERPs, e-commerces y gateways de pago.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo extraordinario juntos.',
      description:
        'Si tu operación necesita integrarse mejor, escalar con claridad o convertir IA en un producto útil, conversemos.',
      emailConfigNote: 'El formulario está listo para EmailJS.',
      socialLinks: [
        {
          label: 'LinkedIn',
          value: 'pedro-dias-019932198',
          href: 'https://www.linkedin.com/in/pedro-dias-019932198/',
          icon: Globe2,
        },
        {
          label: 'Email',
          value: 'pedroid199@gmail.com',
          href: 'mailto:pedroid199@gmail.com',
          icon: Rocket,
        },
        {
          label: 'GitHub',
          value: 'github.com/Psherman42000',
          href: 'https://github.com/Psherman42000',
          icon: Code2,
        },
      ],
    },
    footer: {
      terminal: '> building the future, one integration at a time_',
      signature: 'Pedro Dias - Tech Lead • Ingeniero de Software • Especialista en IA e Integraciones',
    },
  },
}
