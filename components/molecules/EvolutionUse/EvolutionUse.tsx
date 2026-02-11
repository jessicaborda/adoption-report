import styles from './EvolutionUse.module.scss';
import { UsageEvolutionChart } from '@/components/atoms/UsageEvolutionChart/UsageEvolutionChart';
import { UsageEvolutionData } from '@/components/atoms/UsageEvolutionChart/UsageEvolutionChart.types';
import { TypeUse } from '@/components/atoms/TypeUse/TypeUse';

interface EvolutionUseProps {
  title: string;
  description: string;
  data: UsageEvolutionData[];
}

export const EvolutionUse = ({ title, description, data }: EvolutionUseProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.description}>{description}</h5>
      </div>
      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <UsageEvolutionChart data={data} />
        </div>
        <div className={styles.legendContainer}>
          <TypeUse label="Daily Use" type="daily" />
          <TypeUse label="Frequent Use" type="frequent" />
          <TypeUse label="Low Use" type="low" />
          <TypeUse label="No Use" type="noUse" />
        </div>
      </div>
    </div>
  );
};
