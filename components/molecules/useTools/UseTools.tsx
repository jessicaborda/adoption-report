import styles from './UseTools.module.scss';
import ToolMetric from '../../atoms/ToolMetric/ToolMetric';

interface ToolData {
  toolName: string;
  count: number;
  totalUsers: number;
}

interface UseToolsProps {
  title: string;
  description: string;
  tools: ToolData[];
}

export default function UseTools({ title, description, tools }: UseToolsProps) {
  // Ensure we display up to 6 tools as requested, or map all if dynamic
  const displayTools = tools.slice(0, 6); 

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h5 className={styles.description}>{description}</h5>
      
      <div className={styles.toolsList}>
        {displayTools.map((tool, index) => (
          <ToolMetric 
            key={index}
            toolName={tool.toolName}
            count={tool.count}
            totalUsers={tool.totalUsers}
          />
        ))}
      </div>
    </div>
  );
}
