import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import portfolio from '@/data/portfolio';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Proyectos reales desarrollados por Intelligent Cosmos: sistemas, aplicaciones web y plataformas SaaS.',
};

const categoryLabel: Record<string, string> = {
  web:      'Web App',
  saas:     'SaaS',
  software: 'Software',
  mobile:   'Mobile',
  other:    'Otro',
};

export default function PortfolioPage() {
  const featured = portfolio.filter((p) => p.featured);
  const rest     = portfolio.filter((p) => !p.featured);

  return (
    <>
      <section className={`section--sm ${styles.pageHeader}`}>
        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="Proyectos <span class='gradient-text'>reales</span>, resultados reales"
            subtitle="Selección de trabajos entregados. Cada proyecto con su stack, su contexto y su solución."
          />
        </div>
      </section>

      <section className={`section ${styles.portfolio}`}>
        <div className="container">

          {/* Featured projects */}
          {featured.length > 0 && (
            <>
              <h3 className={styles.groupTitle}>Destacados</h3>
              <div className={`grid-2 ${styles.featured}`}>
                {featured.map((project) => (
                  <div key={project.id} className={`card ${styles.projectCard}`}>
                    <div className={styles.cardTop}>
                      <span className={`badge badge--development`}>{categoryLabel[project.category]}</span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.description}</p>
                    <div className={styles.tech}>
                      {project.tech.map((t) => (
                        <Badge key={t} tech>{t}</Badge>
                      ))}
                    </div>
                    {project.externalUrl && (
                      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className={`btn btn--ghost btn--sm ${styles.extLink}`}>
                        Ver proyecto <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Other projects */}
          {rest.length > 0 && (
            <>
              <h3 className={styles.groupTitle} style={{ marginTop: 'var(--space-12)' }}>Otros proyectos</h3>
              <div className={`grid-3 ${styles.others}`}>
                {rest.map((project) => (
                  <div key={project.id} className={`card ${styles.projectCard}`}>
                    <div className={styles.cardTop}>
                      <span className="badge badge--development">{categoryLabel[project.category]}</span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <h4 className={styles.title}>{project.title}</h4>
                    <p className={styles.desc}>{project.description}</p>
                    <div className={styles.tech}>
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t} tech>{t}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
