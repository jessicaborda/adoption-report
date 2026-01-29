import styles from './DashboardView.module.scss';
import TeamMetric from '../../../components/molecules/Team/TeamMetric';
import ExecutiveSummary from '../../../components/molecules/ExecutiveSummary/ExecutiveSummary';
import ToolUsage from '../../../components/molecules/ToolUsage/ToolUsage';
import { EvolutionUse } from '../../../components/molecules/EvolutionUse/EvolutionUse';
import InformationModal from '../../../components/atoms/InformationModal/InformationModal';

import { ToolUsageData } from '../../../features/dashboard/types';

interface ChartData {
  month: string;
  Daily: number;
  Frequent: number;
  Low: number;
  "No Use": number;
}

interface DashboardViewProps {
  summaryData: {
    title: string;
    userMetrics: {
      count: string | number;
      countDescription: string;
      percentage: number;
      percentageDescription: string;
    };
  }[];
  codingEvolutionData: ChartData[];
  generalEvolutionData: ChartData[];
  teamSize: string;
  toolsUsage: ToolUsageData[];
}

export default function DashboardView({ 
  summaryData, 
  codingEvolutionData, 
  generalEvolutionData, 
  teamSize, 
  toolsUsage 
}: DashboardViewProps) {
  return (
    <div className={styles.container}>
      {/* 1. Header Section */}
      <div className={styles.header}>
        <h2>Adoption Report</h2>
        <InformationModal />
      </div>

      {/* 2. Top Row: 3 equal columns */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <TeamMetric 
            title="Tamaño del equipo" 
            teamSize={teamSize} 
            description="Usuarios activos en el período seleccionado" 
          />
        </div>
        {summaryData.map((summary, index) => (
          <div key={index} className={styles.metricCard}>
            <ExecutiveSummary
              title={summary.title}
              userMetrics={summary.userMetrics}
            />
          </div>
        ))}
      </div>

      {/* 3. Split Container: Left 33%, Right Remaining */}
      <div className={styles.mainGrid}>
        {/* Left Column (33%) */}
        <div className={styles.leftPanel}>
          <ToolUsage 
            title="Uso de herramientas" 
            description="Herramientas más utilizadas este mes"
            tools={toolsUsage.map(t => ({
              toolName: t.tool_name,
              count: t.users_number,
              totalUsers: parseInt(teamSize)
            }))}
          />
        </div>

        {/* Right Column (Remaining/66%) -> Divided into Top/Bottom */}
        <div className={styles.rightPanelContainer}>
          {/* Right Top Container */}
          <div className={styles.rightPanelItem}>
            <EvolutionUse 
              title="Coding Tools" 
              description="Evolución de adopción de herramientas de código" 
              data={codingEvolutionData} 
            />
          </div>

          {/* Right Bottom Container */}
          <div className={styles.rightPanelItem}>
            <EvolutionUse 
              title="General Tools" 
              description="Evolución de adopción de herramientas generales" 
              data={generalEvolutionData} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
