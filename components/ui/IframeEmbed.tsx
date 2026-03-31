'use client';

import { useState } from 'react';
import styles from './IframeEmbed.module.css';

interface IframeEmbedProps {
  src: string;
  title: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  height?: number;
  className?: string;
}

export default function IframeEmbed({ src, title, aspectRatio = '16/9', height, className }: IframeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${className ?? ''}`}
      style={
        height
          ? { height: `${height}px` }
          : { aspectRatio }
      }
    >
      {!loaded && !error && (
        <div className={styles.skeleton}>
          <span className={styles.loadingText}>Cargando…</span>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          <span>No se pudo cargar el contenido</span>
        </div>
      )}

      <iframe
        src={src}
        title={title}
        className={`${styles.iframe} ${loaded ? styles.visible : ''}`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        allowFullScreen
      />
    </div>
  );
}
