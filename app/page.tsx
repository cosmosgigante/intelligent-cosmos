import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import ProductsPreview from '@/components/home/ProductsPreview';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'CONVAL — Soluciones digitales de alto impacto',
  description: 'Empresa de desarrollo de software especializada en servicios de programación, desarrollo web y productos digitales propios.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProductsPreview />

      {/* CTA Banner */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaOrb} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <span className="section-label">¿Listo para empezar?</span>
              <h2>Contanos tu proyecto.<br />Te respondemos en 24 hs.</h2>
              <p>Sin compromisos. El primer diagnóstico es gratuito.</p>
              <div className={styles.ctaActions}>
                <Link href="/contacto" className="btn btn--primary btn--lg">
                  Hablar con el equipo <ArrowRight size={18} />
                </Link>
                <Link href="/portfolio" className="btn btn--secondary btn--lg">
                  Ver nuestro trabajo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
