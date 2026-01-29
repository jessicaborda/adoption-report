import styles from './DashboardView.module.scss';
import TeamMetric from '../../../components/molecules/Team/TeamMetric';
import Users from '../../../components/molecules/Users/Users';
import UseTools from '../../../components/molecules/UseTools/UseTools';
import { EvolutionUse } from '../../../components/molecules/EvolutionUse/EvolutionUse';
import InformationModal from '../../../components/atoms/InformationModal/InformationModal';

const MOCK_USAGE_DATA = [
  { month: 'Ene', Daily: 30, Frequent: 20, Low: 15, "No Use": 59 },
  { month: 'Feb', Daily: 35, Frequent: 22, Low: 12, "No Use": 55 },
  { month: 'Mar', Daily: 32, Frequent: 25, Low: 18, "No Use": 49 },
  { month: 'Abr', Daily: 38, Frequent: 28, Low: 10, "No Use": 48 },
  { month: 'May', Daily: 42, Frequent: 30, Low: 8, "No Use": 44 },
  { month: 'Jun', Daily: 45, Frequent: 32, Low: 5, "No Use": 42 },
];

export default function DashboardView() {
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
            teamSize="124" 
            description="Usuarios activos en el período seleccionado" 
          />
        </div>
        <div className={styles.metricCard}>
          <Users
            title="Usuarios Daily"
            userMetrics={{
              count: 45,
              countDescription: "Usuarios con uso diario de al menos una herramienta (Último mes)",
              percentage: 36,
              percentageDescription: "del equipo"
            }}
          />
        </div>
        <div className={styles.metricCard}>
           <Users
            title="Usuarios No Use"
            userMetrics={{
              count: 89,
              countDescription: "Usuarios que no registraron uso de herramientas (Último mes)",
              percentage: 72,
              percentageDescription: "del equipo"
            }}
          />
        </div>
      </div>

      {/* 3. Split Container: Left 33%, Right Remaining */}
      <div className={styles.mainGrid}>
        {/* Left Column (33%) */}
        <div className={styles.leftPanel}>
          <UseTools 
            title="Uso de herramientas" 
            description="Herramientas más utilizadas este mes"
            tools={[
              { toolName: "Copilot", count: 97, totalUsers: 124 },
              { toolName: "ChatGPT", count: 88, totalUsers: 124 },
              { toolName: "Claude", count: 64, totalUsers: 124 },
              { toolName: "Perplexity", count: 52, totalUsers: 124 },
              { toolName: "Jasper", count: 30, totalUsers: 124 },
              { toolName: "Midjourney", count: 25, totalUsers: 124 }
            ]}
          />
        </div>

        {/* Right Column (Remaining/66%) -> Divided into Top/Bottom */}
        <div className={styles.rightPanelContainer}>
          {/* Right Top Container */}
          <div className={styles.rightPanelItem}>
            <EvolutionUse 
              title="Evolución de uso" 
              description="Evolución de adopción de herramientas en el tiempo" 
              data={MOCK_USAGE_DATA} 
            />
          </div>

          {/* Right Bottom Container */}
          <div className={styles.rightPanelItem}>
            <EvolutionUse 
              title="Evolución de uso" 
              description="Evolución de adopción de herramientas en el tiempo" 
              data={MOCK_USAGE_DATA} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
