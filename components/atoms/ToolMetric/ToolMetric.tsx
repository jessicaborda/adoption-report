import styles from './ToolMetric.module.scss';

interface ToolMetricProps {
  toolName: string;
  count: number;
  totalUsers: number; // To calculate percentage
}

export default function ToolMetric({ toolName, count, totalUsers }: ToolMetricProps) {
  const percentage = Math.round((count / totalUsers) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.toolName}>{toolName}</h6>
        <h6 className={styles.userCount}>{count} usuarios</h6>
      </div>
      <div className={styles.progressBarTrack}>
        <div 
          className={styles.progressBarFill} 
          style={{ '--progress': `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
