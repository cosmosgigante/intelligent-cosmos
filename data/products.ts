import { Product } from '@/types';

const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'devflow',
    name: 'DevFlow',
    tagline: 'Gestión de proyectos para equipos técnicos',
    description:
      'Plataforma SaaS de gestión de proyectos diseñada específicamente para equipos de desarrollo. Sprint boards, time tracking y reportes en tiempo real.',
    longDescription:
      'DevFlow es nuestra solución propia para gestionar el ciclo completo de desarrollo de software. Permite crear sprints, asignar tareas, registrar horas y generar reportes automáticos para clientes. Construido sobre una arquitectura de microservicios con API REST y webhooks.',
    status: 'beta',
    category: 'SaaS',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Sprint boards en tiempo real',
      'Time tracking automático',
      'Reportes exportables (PDF/CSV)',
      'API REST documentada',
      'Integraciones con GitHub y GitLab',
      'Multi-workspace y roles',
    ],
    externalUrl: undefined,
    iframeUrl: undefined,
  },
  {
    id: 'prod-002',
    slug: 'formly',
    name: 'Formly',
    tagline: 'Formularios inteligentes sin código',
    description:
      'Constructor de formularios dinámicos con lógica condicional, validaciones avanzadas y endpoints configurables. 100% sin código para el usuario final.',
    longDescription:
      'Formly permite crear formularios complejos con lógica condicional, cálculos automáticos y múltiples destinos de respuesta (email, webhook, Google Sheets). Ideal para empresas que necesitan capturar datos estructurados sin desarrollo a medida.',
    status: 'development',
    category: 'SaaS',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'AWS S3'],
    features: [
      'Constructor drag-and-drop',
      'Lógica condicional avanzada',
      'Múltiples destinos de respuesta',
      'Analítica de formularios',
      'Exportación de datos estructurados',
      'Branded forms con dominio propio',
    ],
    externalUrl: undefined,
    iframeUrl: undefined,
  },
  {
    id: 'prod-003',
    slug: 'codebase',
    name: 'Codebase',
    tagline: 'Documentación técnica automatizada',
    description:
      'Genera documentación técnica de tu codebase de forma automática. Analiza el código fuente y produce wikis estructurados, diagramas de arquitectura y changelogs.',
    longDescription:
      'Codebase conecta con tus repositorios y analiza el código para generar documentación estructurada. Soporta múltiples lenguajes, detecta patrones de arquitectura y mantiene la documentación sincronizada con cada commit.',
    status: 'development',
    category: 'Developer Tools',
    tech: ['Python', 'OpenAI API', 'GitHub API', 'Next.js', 'MongoDB'],
    features: [
      'Análisis estático de código fuente',
      'Diagramas de arquitectura automáticos',
      'Changelogs con IA',
      'Soporte multi-lenguaje',
      'Sincronización por webhook',
      'Exportación en Markdown y HTML',
    ],
    externalUrl: undefined,
    iframeUrl: undefined,
  },
];

export default products;
