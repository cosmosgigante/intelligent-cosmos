import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      
      {/* Cinematic Glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.orb3} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Infraestructura digital de alto nivel</span>
        </div>

        <h1 className={styles.headline}>
          Desarrollamos el software<br />
          <span className="gradient-text">que escala tu mundo</span>
        </h1>

        <p className={styles.subheadline}>
          Estrategia técnica y ejecución de alta precisión para<br />
          aplicaciones web, sistemas a medida y productos SaaS.
        </p>

        <div className={styles.actions}>
          <Link href="/contacto" className="btn btn--primary btn--lg">
            Iniciar proyecto <ArrowRight size={18} />
          </Link>
          <Link href="/portfolio" className="btn btn--secondary btn--lg">
            Ver portfolio
          </Link>
        </div>

        {/* Cinematic Visual Asset */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}><span /><span /><span /></div>
              <div className={styles.tab}>icosmos.app/v1</div>
            </div>
            <div className={styles.cardBody}>
              <div className={`${styles.codeLine} ${styles.type1}`} style={{ width: '80%' }} />
              <div className={`${styles.codeLine} ${styles.type2}`} style={{ width: '60%' }} />
              <div className={`${styles.codeLine} ${styles.type3}`} style={{ width: '90%', background: 'white' }} />
              <div className={`${styles.codeLine} ${styles.type4}`} style={{ width: '40%' }} />
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {[
            { value: '50+', label: 'Proyectos Pro' },
            { value: '100%', label: 'Uptime garantizado' },
            { value: '24h', label: 'Respuesta técnica' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
