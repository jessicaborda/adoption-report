import styles from './DashboardView.module.scss';
import TeamMetric from '../../../components/molecules/team/TeamMetric';
import Users from '../../../components/molecules/Users/Users';
import UseTools from '../../../components/molecules/useTools/UseTools';

export default function DashboardView() {
  return (
    <div className={styles.container}>
      {/* 1. Header Section */}
      <div className={styles.header}>
        <h2>Adoption Report</h2>
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
          <div className={styles.rightPanelItem}></div>

          {/* Right Bottom Container */}
          <div className={styles.rightPanelItem}></div>
        </div>
      </div>
    </div>
  );
}
