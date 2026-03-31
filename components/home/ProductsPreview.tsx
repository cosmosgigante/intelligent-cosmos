'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import products from '@/data/products';
import styles from './ProductsPreview.module.css';

import { useReveal } from '@/lib/hooks/useReveal';

export default function ProductsPreview() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            label="Productos"
            title="Nuestros productos <span class='gradient-text'>digitales</span>"
            subtitle="SaaS y herramientas construidas por nuestro equipo, disponibles para el mundo."
          />
          <Link href="/productos" className={`btn btn--secondary ${styles.seeAll}`}>
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <div ref={ref} className={`${styles.grid} ${isVisible ? 'visible' : ''}`}>
          {products.map((product, i) => (
            <div 
              key={product.id} 
              className={`reveal card ${styles.card} ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.cardTop}>
                <Badge status={product.status} />
                <span className={styles.category}>{product.category}</span>
              </div>

              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.desc}>{product.description}</p>

              <div className={styles.tech}>
                {product.tech.slice(0, 3).map((t) => (
                  <Badge key={t} tech>{t}</Badge>
                ))}
                {product.tech.length > 3 && (
                  <span className={styles.moreTech}>+{product.tech.length - 3}</span>
                )}
              </div>

              <div className={styles.actions}>
                <Link href={`/productos/${product.slug}`} className="btn btn--ghost btn--sm">
                  Ver detalle <ArrowRight size={14} />
                </Link>
                {product.externalUrl && (
                  <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
