import { Metadata } from 'next';
import { Mail, Clock, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contacto/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactá a Quinta Escala para iniciar tu proyecto de desarrollo web, software o producto SaaS.',
};

export default function ContactoPage() {
  return (
    <>
      <section className={`section--sm ${styles.pageHeader}`}>
        <div className="container">
          <SectionHeader
            label="Contacto"
            title="Hablemos de tu <span class='gradient-text'>proyecto</span>"
            subtitle="Completá el formulario y te respondemos en menos de 24 horas hábiles. El primer diagnóstico es gratuito."
          />
        </div>
      </section>

      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <aside className={styles.sidebar}>
              <div className={`card ${styles.infoCard}`}>
                <h3>Información de contacto</h3>
                <ul className={styles.infoList}>
                  <li>
                    <div className={styles.infoIcon}><Mail size={18} /></div>
                    <div>
                      <span className={styles.infoLabel}>Email</span>
                      <a href="mailto:quintaescala5@gmail.com" className={styles.infoValue}>quintaescala5@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><Clock size={18} /></div>
                    <div>
                      <span className={styles.infoLabel}>Tiempo de respuesta</span>
                      <span className={styles.infoValue}>Menos de 24 hs hábiles</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.infoIcon}><MapPin size={18} /></div>
                    <div>
                      <span className={styles.infoLabel}>Ubicación</span>
                      <span className={styles.infoValue}>Argentina · Trabajo remoto global</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={`card ${styles.processCard}`}>
                <h3>¿Cómo trabajamos?</h3>
                <ol className={styles.steps}>
                  {[
                    { n: '01', label: 'Diagnóstico gratuito', desc: 'Analizamos tu proyecto sin compromiso.' },
                    { n: '02', label: 'Propuesta técnica',    desc: 'Stack, arquitectura, tiempo y presupuesto.' },
                    { n: '03', label: 'Kick-off',             desc: 'Comenzamos el desarrollo con sprints cortos.' },
                    { n: '04', label: 'Deploy y soporte',     desc: 'Entrega, documentación y soporte post-lanzamiento.' },
                  ].map((s) => (
                    <li key={s.n} className={styles.step}>
                      <span className={styles.stepN}>{s.n}</span>
                      <div>
                        <strong>{s.label}</strong>
                        <span>{s.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
