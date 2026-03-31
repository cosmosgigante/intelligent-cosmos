import { SiteConfig } from '@/types';

const siteConfig: SiteConfig = {
  name: 'CONVAL',
  tagline: 'Soluciones digitales de alto impacto',
  description:
    'Empresa de desarrollo de software especializada en servicios de programación, desarrollo web y productos digitales propios.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://conval.dev',
  email: process.env.CONTACT_TO_EMAIL ?? 'hello@conval.dev',
  social: {
    linkedin: 'https://linkedin.com/company/conval',
  },
};

export default siteConfig;
