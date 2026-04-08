import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import ICosmosLogo from '@/components/ui/ICosmosLogo';
import styles from './Footer.module.css';

const footerLinks = {
  servicios: [
    { href: '/servicios#desarrollo-web',      label: 'Desarrollo Web' },
    { href: '/servicios#software-a-medida',    label: 'Software a Medida' },
    { href: '/servicios#productos-saas',       label: 'Productos SaaS' },
    { href: '/servicios#consultoria-tecnica',  label: 'Consultoría' },
  ],
  empresa: [
    { href: '/nosotros',  label: 'Sobre Nosotros' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/productos', label: 'Productos' },
    { href: '/contacto',  label: 'Contacto' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <ICosmosLogo size={24} />
              <span>Intelligent Cosmos</span>
            </Link>
            <p className={styles.tagline}>
              Infraestructura digital para empresas que quieren escalar.
            </p>
            <div className={styles.social}>

              <a href="https://linkedin.com/company/intelligent-cosmos" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* LinkedIn icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:hello@icosmos.dev" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Servicios column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul>
              {footerLinks.servicios.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Empresa</h4>
            <ul>
              {footerLinks.empresa.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className={styles.ctaCol}>
            <h4 className={styles.colTitle}>¿Hablamos?</h4>
            <p>Contanos tu proyecto y te respondemos en menos de 24 hs.</p>
            <Link href="/contacto" className="btn btn--primary">
              Iniciar proyecto <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Intelligent Cosmos. Todos los derechos reservados.</span>
          <span className={styles.built}>Construido con Next.js</span>
        </div>
      </div>
    </footer>
  );
}
