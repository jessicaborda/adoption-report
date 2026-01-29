import styles from './TypeUse.module.scss';

export type UsageType = 'daily' | 'frequent' | 'low' | 'noUse';

interface TypeUseProps {
  label: string;
  type: UsageType;
}

export const TypeUse = ({ label, type }: TypeUseProps) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.line} ${styles[type]}`}></span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
