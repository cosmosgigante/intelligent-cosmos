'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Loader.module.css';

export default function Loader() {
  const [phase, setPhase] = useState<'visible' | 'exploding' | 'done'>('visible');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exploding'), 2200);
    const t2 = setTimeout(() => setPhase('done'), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`${styles.loader} ${phase === 'exploding' ? styles.exploding : ''}`}>
      <div className={styles.bg} />

      <div className={styles.center}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo-qe.png"
            alt="Quinta Escala"
            width={110}
            height={110}
            className={styles.logoImg}
            priority
          />
          <div className={styles.ring1} />
          <div className={styles.ring2} />
        </div>

        <p className={styles.name}>QUINTA ESCALA</p>
        <p className={styles.tagline}>SOLUCIONES DIGITALES</p>

        <div className={styles.barWrap}>
          <div className={styles.bar} />
        </div>
      </div>
    </div>
  );
}
