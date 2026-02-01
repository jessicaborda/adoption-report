import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Bienvenido al Reporte de Adopción
        </h1>
        <p className={styles.description}>
          Esta es una prueba técnica para el puesto de Frontend Developer. Explora los datos detallados sobre las tendencias de adopción y uso de herramientas en la organización. 
          Este reporte proporciona una visión integral para la toma de decisiones estratégicas.
        </p>
        <Link href="/dashboard" className={styles.button}>
          Ver Reporte
        </Link>
      </div>
    </main>
  );
}
