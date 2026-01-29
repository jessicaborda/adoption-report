import styles from './ExecutiveSummary.module.scss';
import MetricValue from '../../atoms/MetricValue/MetricValue';
import PercentageRing from '../../atoms/PercentageRing/PercentageRing';

interface ExecutiveSummaryProps {
  title: string;
  userMetrics: {
    count: string | number;
    countDescription: string;
    percentage: number;
    percentageDescription: string;
  };
}

export default function ExecutiveSummary({ title, userMetrics }: ExecutiveSummaryProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.contentRow}>
        <div className={styles.item}>
          <MetricValue 
            userCount={userMetrics.count} 
            description={userMetrics.countDescription} 
          />
        </div>
        <div className={styles.item}>
          <PercentageRing 
            percentage={userMetrics.percentage} 
            description={userMetrics.percentageDescription} 
          />
        </div>
      </div>
    </div>
  );
}
