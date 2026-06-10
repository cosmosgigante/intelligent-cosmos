import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
          <h1 className={styles.headline}>
            <span className={styles.glitch} data-text="Diseñamos.">Diseñamos.</span><br />
            <span className="gradient-text">Construimos.</span><br />
            Escalamos.
          </h1>

          <p className={styles.subheadline}>
            Construimos experiencias digitales rápidas, modernas y profesionales para que tu negocio proyecte la imagen que merece.
          </p>

          <div className={styles.actions}>
            <Link href="/contacto" className={`btn btn--primary btn--lg ${styles.ctaBtn}`}>
              Solicitar presupuesto <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className={styles.right}>
          <div className={styles.logoWrap}>
            <div className={styles.logoGlow} />
            <Logo3D />
            <div className={styles.logoMeta}>
              <span className={styles.logoService}>🌐 Diseño y desarrollo web profesional</span>
              <span className={styles.logoAvailable}>
                <span className={styles.dot} />
                Disponible para proyectos
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
