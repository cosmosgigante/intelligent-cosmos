// ─── Product ────────────────────────────────────────────────────────────────
export type ProductStatus = 'active' | 'beta' | 'development';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: ProductStatus;
  category: string;
  tech: string[];
  features: string[];
  iframeUrl?: string;
  externalUrl?: string;
  imageUrl?: string;
}

// ─── Service ────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;          // lucide icon name
  features: string[];
  deliverables: string[];
  tier: 'standard' | 'premium' | 'enterprise';
}

// ─── Portfolio Project ───────────────────────────────────────────────────────
export type ProjectCategory = 'web' | 'saas' | 'software' | 'mobile' | 'other';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tech: string[];
  year: number;
  imageUrl?: string;
  iframeUrl?: string;
  externalUrl?: string;
  featured: boolean;
}

// ─── Contact Form ────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// ─── Site Config ─────────────────────────────────────────────────────────────
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
