import { SiteConfig } from '@/types';

const siteConfig: SiteConfig = {
  name: 'Quinta Escala',
  tagline: 'Soluciones digitales de alto impacto',
  description:
    'Empresa de desarrollo de software especializada en servicios de programación, desarrollo web y productos digitales propios.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://quintaescala.com',
  email: process.env.CONTACT_TO_EMAIL ?? 'quintaescala5@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/company/quinta-escala',
  },
};

export default siteConfig;
