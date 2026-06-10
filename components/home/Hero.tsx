import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Logo3D from '@/components/ui/Logo3D';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />

      <div className={`container ${styles.content}`}>

        {/* ── LEFT COLUMN ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <Sparkles size={13} />
            <span>Infraestructura digital de alto nivel</span>
            <span className={styles.available}>
              <span className={styles.dot} />
              disponible para proyectos
            </span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.glitch} data-text="Diseñamos.">Diseñamos.</span><br />
            <span className="gradient-text">Construimos.</span><br />
            Escalamos.
          </h1>

          <p className={styles.subheadline}>
            Creamos páginas web y soluciones digitales preparadas para acompañar el crecimiento de tu negocio.
          </p>

          <div className={styles.actions}>
            <Link href="/contacto" className={`btn btn--primary btn--lg ${styles.ctaBtn}`}>
              Iniciar proyecto <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn--secondary btn--lg">
              Ver portfolio
            </Link>
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.logoWrap}>
            <div className={styles.logoGlow} />
            <Logo3D />
          </div>
        </div>

      </div>
    </section>
  );
}
