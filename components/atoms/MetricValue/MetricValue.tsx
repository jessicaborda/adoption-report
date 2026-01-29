import styles from './MetricValue.module.scss';

interface MetricValueProps {
  userCount: string | number;
  description: string;
}

export default function MetricValue({ userCount, description }: MetricValueProps) {
  return (
    <div className={styles.container}>
      <h1>{userCount}</h1>
      <h5>{description}</h5>
    </div>
  );
}
