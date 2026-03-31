import { Project } from '@/types';

const portfolio: Project[] = [
  {
    id: 'proj-001',
    slug: 'plataforma-gestion-inventario',
    title: 'Plataforma de Gestión de Inventario',
    description:
      'Sistema web para gestión de inventario en tiempo real con control de stock, alertas automáticas y reportes para una empresa distribuidora regional.',
    longDescription:
      'Desarrollamos un sistema de gestión de inventario completo que reemplazó planillas Excel por una plataforma centralizada. Incluye control de stock por depósito, alertas de reposición automáticas, integración con proveedores vía EDI y reportes exportables para gerencia.',
    category: 'software',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS RDS'],
    year: 2024,
    featured: true,
    externalUrl: undefined,
  },
  {
    id: 'proj-002',
    slug: 'portal-inmobiliario',
    title: 'Portal Inmobiliario con Mapa Interactivo',
    description:
      'Plataforma inmobiliaria con búsqueda geolocalizada, filtros avanzados y panel de administración para agentes y propietarios.',
    longDescription:
      'Portal web para una inmobiliaria boutique con listado dinámico de propiedades, integración con Google Maps para búsqueda geolocalizada, sistema de consultas y panel de administración para gestionar hasta 500 propiedades activas.',
    category: 'web',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Google Maps API', 'Cloudinary'],
    year: 2024,
    featured: true,
    externalUrl: undefined,
  },
  {
    id: 'proj-003',
    slug: 'sistema-reservas-online',
    title: 'Sistema de Reservas Online',
    description:
      'Sistema de turnos y reservas online con calendario interactivo, recordatorios automáticos por WhatsApp y panel de administración diario.',
    longDescription:
      'Solución de reservas para un consultorio médico que gestiona más de 200 turnos diarios. Incluye calendario interactivo, confirmación por email y WhatsApp, historial de pacientes y dashboard de ocupación para el equipo administrativo.',
    category: 'web',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'WhatsApp Business API', 'Twilio'],
    year: 2024,
    featured: false,
    externalUrl: undefined,
  },
  {
    id: 'proj-004',
    slug: 'dashboard-analytics-ecommerce',
    title: 'Dashboard Analytics para Ecommerce',
    description:
      'Panel de inteligencia de negocio para un ecommerce con métricas en tiempo real, análisis de cohortes y predicción de ventas.',
    longDescription:
      'Construimos un dashboard de analítica avanzada integrado con WooCommerce y MercadoPago. Presenta métricas de ventas en tiempo real, análisis de cohortes de clientes, productos más rentables y un modelo simple de predicción de demanda basado en datos históricos.',
    category: 'saas',
    tech: ['Next.js', 'Python', 'ClickHouse', 'WooCommerce API', 'MercadoPago'],
    year: 2023,
    featured: true,
    externalUrl: undefined,
  },
];

export default portfolio;
