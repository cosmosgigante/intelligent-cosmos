import Image from 'next/image';
import styles from './Logo3D.module.css';

export default function Logo3D() {
  return (
    <div className={styles.scene}>
      <div className={styles.coin}>
        <div className={styles.front}>
          <Image src="/logo-qe.png" fill alt="Quinta Escala" sizes="300px" />
        </div>
        <div className={styles.back}>
          <Image src="/logo-qe.png" fill alt="" sizes="300px" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
      <div className={styles.glow} />
    </div>
  );
}
