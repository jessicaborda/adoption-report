import styles from './NumberUsers.module.scss';

interface NumberUsersProps {
  userCount: string | number;
  description: string;
}

export default function NumberUsers({ userCount, description }: NumberUsersProps) {
  return (
    <div className={styles.container}>
      <h1>{userCount}</h1>
      <h5>{description}</h5>
    </div>
  );
}
