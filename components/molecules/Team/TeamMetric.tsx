import styles from './TeamMetric.module.scss';

interface TeamMetricProps {
  title: string;
  teamSize: string | number;
  description: string;
}

export default function TeamMetric({ title, teamSize, description }: TeamMetricProps) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h1>{teamSize}</h1>
      <h5>{description}</h5>
    </div>
  );
}
