import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import IframeEmbed from '@/components/ui/IframeEmbed';
import products from '@/data/products';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Producto no encontrado' };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductoDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      {/* Back nav */}
      <div className={styles.backNav}>
        <div className="container">
          <Link href="/productos" className="btn btn--ghost btn--sm">
            <ArrowLeft size={16} /> Volver a productos
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className={`section--sm ${styles.header}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <div className={styles.topRow}>
                <Badge status={product.status} />
                <span className={styles.category}>{product.category}</span>
              </div>
              <h1>{product.name}</h1>
              <p className={styles.tagline}>{product.tagline}</p>
              <p className={styles.desc}>{product.description}</p>
              <div className={styles.ctaRow}>
                {product.externalUrl && (
                  <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                    Abrir producto <ExternalLink size={16} />
                  </a>
                )}
                <Link href="/contacto" className="btn btn--secondary">
                  Consultar integración
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iframe embed */}
      {product.iframeUrl && (
        <section className={`section--sm ${styles.embedSection}`}>
          <div className="container">
            <h2 className={styles.embedTitle}>Demo en vivo</h2>
            <IframeEmbed src={product.iframeUrl} title={`Demo de ${product.name}`} aspectRatio="16/9" />
          </div>
        </section>
      )}

      {/* Long description + features */}
      <section className={`section ${styles.details}`}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.about}>
              <h2>Sobre {product.name}</h2>
              <p>{product.longDescription}</p>
            </div>

            <div className={styles.sidebar}>
              <div className={`card ${styles.featuresCard}`}>
                <h3>Funcionalidades</h3>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`card ${styles.techCard}`}>
                <h3>Stack tecnológico</h3>
                <div className={styles.techList}>
                  {product.tech.map((t) => (
                    <Badge key={t} tech>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
