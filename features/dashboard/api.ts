import { DashboardData } from './types';

// Mock data
const MOCK_DATA: DashboardData = {
  id: 'dash-001',
  title: 'Q1 Adoption Report',
  metrics: {
    activeUsers: 12500,
    retention: 85.5,
    revenue: 450000,
  },
  lastUpdated: new Date().toISOString(),
};

/**
 * Simulate server-side delay
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getDashboardData(): Promise<DashboardData> {
  // Simulate network latency
  await delay(1500);
  
  // Randomly throw error to test error boundaries if needed (not implemented yet)
  // if (Math.random() < 0.1) throw new Error('Failed to fetch dashboard data');

  return MOCK_DATA;
}
