import styles from './Users.module.scss';
import NumberUsers from '../../atoms/NumberUsers/NumberUsers';
import PercentageUsers from '../../atoms/PercentageUsers/PercentageUsers';

interface UsersProps {
  title: string;
  userMetrics: {
    count: string | number;
    countDescription: string;
    percentage: number;
    percentageDescription: string;
  };
}

export default function Users({ title, userMetrics }: UsersProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.contentRow}>
        <div className={styles.item}>
          <NumberUsers 
            userCount={userMetrics.count} 
            description={userMetrics.countDescription} 
          />
        </div>
        <div className={styles.item}>
          <PercentageUsers 
            percentage={userMetrics.percentage} 
            description={userMetrics.percentageDescription} 
          />
        </div>
      </div>
    </div>
  );
}
