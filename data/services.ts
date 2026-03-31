import { Service } from '@/types';

const services: Service[] = [
  {
    id: 'svc-001',
    slug: 'desarrollo-web',
    name: 'Desarrollo Web',
    tagline: 'Sitios y aplicaciones web de alto rendimiento',
    description:
      'Diseñamos y desarrollamos sitios web y aplicaciones a medida usando tecnologías modernas. Desde landing pages hasta plataformas complejas con autenticación, pagos y dashboards.',
    icon: 'Globe',
    features: [
      'Diseño UI/UX personalizado',
      'Next.js, React, Vue.js',
      'SEO técnico integrado',
      'Optimización de performance (Core Web Vitals)',
      'Integración con APIs y sistemas externos',
      'Deploy y mantenimiento continuo',
    ],
    deliverables: [
      'Sitio web o aplicación web funcional',
      'Código fuente documentado',
      'Panel de administración (si aplica)',
      'Informe de performance',
    ],
    tier: 'standard',
  },
  {
    id: 'svc-002',
    slug: 'software-a-medida',
    name: 'Software a Medida',
    tagline: 'Sistemas y herramientas diseñados para tu negocio',
    description:
      'Desarrollamos software empresarial a medida: sistemas de gestión, automatizaciones, integraciones entre plataformas y herramientas internas para equipos.',
    icon: 'Code2',
    features: [
      'Análisis de requerimientos técnicos',
      'Arquitectura escalable y documentada',
      'Backend robusto (Node.js, Python, Go)',
      'Bases de datos relacionales y NoSQL',
      'APIs REST y GraphQL',
      'Testing automatizado e integración continua',
    ],
    deliverables: [
      'Sistema funcional y probado',
      'Documentación técnica completa',
      'API documentada (Swagger/OpenAPI)',
      'Soporte post-lanzamiento',
    ],
    tier: 'premium',
  },
  {
    id: 'svc-003',
    slug: 'productos-saas',
    name: 'Productos SaaS',
    tagline: 'Tu idea convertida en un producto digital escalable',
    description:
      'Llevamos tu idea de producto digital desde la concepción hasta el lanzamiento. Diseñamos, desarrollamos y desplegamos SaaS con toda la infraestructura necesaria.',
    icon: 'Layers',
    features: [
      'Definición de producto y arquitectura',
      'Desarrollo fullstack (frontend + backend + infra)',
      'Sistema de autenticación y roles',
      'Pagos y subscripciones (Stripe)',
      'Analítica y métricas de uso',
      'Roadmap técnico de escalabilidad',
    ],
    deliverables: [
      'MVP funcional listo para usuarios',
      'Infraestructura en la nube configurada',
      'Panel de administración del producto',
      'Plan de escalabilidad documentado',
    ],
    tier: 'enterprise',
  },
  {
    id: 'svc-004',
    slug: 'consultoria-tecnica',
    name: 'Consultoría Técnica',
    tagline: 'Estrategia técnica para equipos y startups',
    description:
      'Asesoramos a equipos de producto y startups en decisiones de arquitectura, elección de stack tecnológico, revisiones de código y planificación técnica.',
    icon: 'Brain',
    features: [
      'Auditoría de codebase existente',
      'Definición de stack tecnológico',
      'Revisión de arquitectura y performance',
      'Mentoring a equipos de desarrollo',
      'Planificación técnica de producto',
      'Revisión de seguridad y compliance',
    ],
    deliverables: [
      'Informe técnico detallado',
      'Recomendaciones priorizadas',
      'Sesiones de Q&A con el equipo',
      'Roadmap técnico 6-12 meses',
    ],
    tier: 'standard',
  },
];

export default services;
