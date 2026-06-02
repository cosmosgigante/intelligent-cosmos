import { Metadata } from 'next';
import { Target, Zap, Users, Shield } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Quiénes somos en Quinta Escala: nuestro equipo, valores y forma de trabajar.',
};

const values = [
  {
    icon: <Target size={24} />,
    title: 'Orientados a resultados',
    description: 'Medimos nuestro trabajo por el impacto que genera en tu negocio, no por líneas de código.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Velocidad sin sacrificar calidad',
    description: 'Iteramos rápido sin acumular deuda técnica. Código limpio, documentado y escalable desde el día uno.',
  },
  {
    icon: <Users size={24} />,
    title: 'Colaboración real',
    description: 'Trabajamos como parte de tu equipo, con comunicación directa, sincronía permanente y transparencia total.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Producción como estándar',
    description: 'No entregamos prototipos. Todo lo que construimos está listo para escalar desde el primer deploy.',
  },
];

const stack = [
  'Next.js', 'React', 'Node.js', 'Python', 'TypeScript',
  'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Vercel',
  'FastAPI', 'Prisma', 'GraphQL', 'Stripe', 'OpenAI',
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className={`section--sm ${styles.pageHeader}`}>
        <div className="container">
          <SectionHeader
            label="Sobre Nosotros"
            title="Construimos software <span class='gradient-text'>como empresa</span>"
            subtitle="Somos un equipo técnico con mentalidad de producto. No tercerizamos, no simulamos, no generamos código de maqueta."
          />
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>Quiénes somos</h2>
              <p>
                Quinta Escala nació de la necesidad de tener una alternativa real a las agencias tradicionales: un equipo que
                entendiera tanto de negocios como de tecnología, y que pudiera entregar software de producción con la
                velocidad de una startup.
              </p>
              <p>
                Trabajamos con empresas que necesitan ir más allá de una landing page: sistemas de gestión, plataformas
                SaaS, integraciones complejas y productos digitales propios que generen valor real.
              </p>
              <p>
                Cada proyecto pasa por nuestro proceso de arquitectura, revisión de código y testing antes de llegar a
                producción. Creemos que el código mal hecho cuesta más tiempo y dinero a largo plazo.
              </p>
            </div>
            <div className={styles.storyAside}>
              <div className={`card ${styles.statsCard}`}>
                {[
                  { n: '50+',  label: 'Proyectos entregados' },
                  { n: '3+',   label: 'Años de experiencia' },
                  { n: '100%', label: 'Proyectos en producción' },
                  { n: '24h',  label: 'Tiempo de respuesta' },
                ].map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statN}>{s.n}</span>
                    <span className={styles.statL}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <SectionHeader label="Valores" title="Cómo <span class='gradient-text'>trabajamos</span>" centered />
          <div className={`grid-2 ${styles.valuesGrid}`}>
            {values.map((v) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className={`section ${styles.techSection}`}>
        <div className="container">
          <SectionHeader label="Tecnología" title="Nuestro <span class='gradient-text'>stack</span>" centered />
          <div className={styles.techGrid}>
            {stack.map((t) => (
              <div key={t} className={styles.techItem}>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
