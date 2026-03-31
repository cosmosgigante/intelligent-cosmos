'use client';

import Link from 'next/link';
import { Globe, Code2, Layers, Brain, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import services from '@/data/services';
import styles from './ServicesPreview.module.css';

const iconMap: Record<string, React.ReactNode> = {
  Globe:  <Globe  size={22} />,
  Code2:  <Code2  size={22} />,
  Layers: <Layers size={22} />,
  Brain:  <Brain  size={22} />,
};

const tierLabel: Record<string, string> = {
  standard:   'Estándar',
  premium:    'Premium',
  enterprise: 'Enterprise',
};

import { useReveal } from '@/lib/hooks/useReveal';

export default function ServicesPreview() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            label="Servicios"
            title="Lo que construimos <span class='gradient-text'>para vos</span>"
            subtitle="Soluciones técnicas adaptadas a cada etapa de tu negocio digital."
          />
          <Link href="/servicios" className={`btn btn--secondary ${styles.seeAll}`}>
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <div ref={ref} className={`${styles.bentoGrid} ${isVisible ? 'visible' : ''}`}>
          {services.map((svc, i) => (
            <Link 
              key={svc.id} 
              href={`/servicios#${svc.slug}`} 
              className={`reveal card ${styles.card} ${styles[`card${i + 1}`]} ${isVisible ? 'visible' : ''}`} 
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon}>{iconMap[svc.icon] ?? <Code2 size={22} />}</div>
                <span className={`badge ${svc.tier === 'enterprise' ? 'badge--active' : svc.tier === 'premium' ? 'badge--beta' : 'badge--development'}`}>
                  {tierLabel[svc.tier]}
                </span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{svc.name}</h3>
                <p className={styles.desc}>{svc.tagline}</p>
                <ul className={styles.features}>
                  {svc.features.slice(0, 3).map((f) => (
                    <li key={f}><span className={styles.dot} /> {f}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardArrow}>
                <ArrowRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
