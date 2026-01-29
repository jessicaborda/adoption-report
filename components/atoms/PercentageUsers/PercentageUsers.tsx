import styles from './PercentageUsers.module.scss';

interface PercentageUsersProps {
  percentage: number;
  description: string;
}

export default function PercentageUsers({ percentage, description }: PercentageUsersProps) {
  // Determine the color class based on percentage ranges
  const getColorClass = (val: number) => {
    if (val >= 60) return styles.daily; // High usage
    if (val >= 30) return styles.frequent; // Medium usage
    if (val > 0) return styles.low; // Low usage
    return styles.none; // No usage
  };

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.chart} ${getColorClass(percentage)}`} 
        style={{ '--percentage': percentage } as React.CSSProperties}
      >
        <div className={styles.content}>
          <h2 className={styles.percentage}>{percentage}%</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
