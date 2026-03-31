import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import products from '@/data/products';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Nuestros productos digitales propios: SaaS, herramientas y sistemas construidos por CONVAL.',
};

export default function ProductosPage() {
  return (
    <>
      <section className={`section--sm ${styles.pageHeader}`}>
        <div className="container">
          <SectionHeader
            label="Productos"
            title="Software creado <span class='gradient-text'>por nosotros</span>"
            subtitle="Herramientas y plataformas SaaS que construimos para resolver problemas reales. Código propio, infraestructura propia."
          />
        </div>
      </section>

      <section className={`section ${styles.products}`}>
        <div className="container">
          <div className={`grid-3 ${styles.grid}`}>
            {products.map((product) => (
              <div key={product.id} className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <Badge status={product.status} />
                  <span className={styles.category}>{product.category}</span>
                </div>

                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.tagline}>{product.tagline}</p>
                <p className={styles.desc}>{product.description}</p>

                <div className={styles.tech}>
                  {product.tech.map((t) => (
                    <Badge key={t} tech>{t}</Badge>
                  ))}
                </div>

                <div className={styles.actions}>
                  <Link href={`/productos/${product.slug}`} className="btn btn--primary btn--sm">
                    Ver producto <ArrowRight size={14} />
                  </Link>
                  {product.externalUrl && (
                    <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                      <ExternalLink size={14} /> Abrir
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
