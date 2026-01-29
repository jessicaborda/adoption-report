import { TeamAdoptionData } from './types';

/**
 * Transforms team data into ExecutiveSummary props format
 */
export const getExecutiveSummary = (data: TeamAdoptionData) => {
  return [
    {
      title: "Usuarios Daily",
      userMetrics: {
        count: data.last_month_daily_use_users_number,
        countDescription: "Usuarios con uso diario de al menos una herramienta (Último mes)",
        percentage: parseInt(data.last_month_daily_use_users_percentage),
        percentageDescription: "del equipo"
      }
    },
    {
      title: "Usuarios No Use",
      userMetrics: {
        count: data.last_month_no_use_users_number,
        countDescription: "Usuarios que no registraron uso de herramientas (Último mes)",
        percentage: parseInt(data.last_month_no_use_users_percentage),
        percentageDescription: "del equipo"
      }
    }
  ];
};

/**
 * Gets evolution data by tool type
 */
export const getEvolutionByToolType = (data: TeamAdoptionData, type: 'Coding Tools' | 'General Tools') => {
  const months = type === 'Coding Tools' ? data.last_six_months.coding_tools : data.last_six_months.general_tools;
  
  return months.map(m => ({
    month: m.month_name,
    Daily: m.daily_use_users_number,
    Frequent: m.frequent_use_users_number,
    Low: m.low_use_users_number,
    "No Use": m.no_use_users_number
  }));
};
