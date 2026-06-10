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
            <span className={styles.glitch} data-text="Desarrollamos">Desarrollamos</span>
            {' '}el software<br />
            <span className="gradient-text">que escala tu mundo</span>
          </h1>

          <p className={styles.subheadline}>
            Estrategia técnica y ejecución de alta precisión para
            aplicaciones web, sistemas a medida y productos SaaS.
          </p>

          <div className={styles.actions}>
            <Link href="/contacto" className={`btn btn--primary btn--lg ${styles.ctaBtn}`}>
              Iniciar proyecto <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="btn btn--secondary btn--lg">
              Ver portfolio
            </Link>
          </div>

          <div className={styles.stats}>
            {[
              { value: '50+',  label: 'Proyectos Pro' },
              { value: '100%', label: 'Uptime garantizado' },
              { value: '24h',  label: 'Respuesta técnica' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
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
