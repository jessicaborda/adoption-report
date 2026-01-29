export interface DashboardData {
  id: string;
  title: string;
  metrics: {
    activeUsers: number;
    retention: number;
    revenue: number;
  };
  lastUpdated: string;
}
