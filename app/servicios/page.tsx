import { Metadata } from 'next';
import { Globe, Code2, Layers, Brain, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import services from '@/data/services';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios de desarrollo web, software a medida, productos SaaS y consultoría técnica. Conocé nuestras soluciones.',
};

const iconMap: Record<string, React.ReactNode> = {
  Globe:  <Globe  size={28} />,
  Code2:  <Code2  size={28} />,
  Layers: <Layers size={28} />,
  Brain:  <Brain  size={28} />,
};

const tierLabel: Record<string, { label: string; color: string }> = {
  standard:   { label: 'Estándar',   color: 'badge--development' },
  premium:    { label: 'Premium',    color: 'badge--beta' },
  enterprise: { label: 'Enterprise', color: 'badge--active' },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Page header */}
      <section className={`section--sm ${styles.pageHeader}`}>
        <div className="container">
          <SectionHeader
            label="Servicios"
            title="Soluciones para cada <span class='gradient-text'>etapa</span>"
            subtitle="Desde tu primera web hasta sistemas empresariales complejos. Trabajamos con vos en cada paso."
          />
        </div>
      </section>

      {/* Services list */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className={styles.list}>
            {services.map((svc, i) => (
              <div key={svc.id} id={svc.slug} className={`card ${styles.serviceCard} ${i % 2 === 1 ? styles.reversed : ''}`}>
                <div className={styles.serviceLeft}>
                  <div className={styles.serviceTop}>
                    <div className={styles.icon}>{iconMap[svc.icon] ?? <Code2 size={28} />}</div>
                    <span className={`badge ${tierLabel[svc.tier].color}`}>{tierLabel[svc.tier].label}</span>
                  </div>
                  <h2 className={styles.serviceName}>{svc.name}</h2>
                  <p className={styles.serviceTagline}>{svc.tagline}</p>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                  <Link href="/contacto" className="btn btn--primary" style={{ marginTop: 'var(--space-6)', alignSelf: 'flex-start' }}>
                    Consultar servicio
                  </Link>
                </div>

                <div className={styles.serviceRight}>
                  <div className={styles.block}>
                    <h4>Características</h4>
                    <ul>
                      {svc.features.map((f) => (
                        <li key={f}>
                          <CheckCircle2 size={16} className={styles.check} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.block}>
                    <h4>Entregables</h4>
                    <ul>
                      {svc.deliverables.map((d) => (
                        <li key={d}>
                          <CheckCircle2 size={16} className={styles.check} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
