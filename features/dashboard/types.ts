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

export interface ToolUsageData {
  tool_name: string;
  users_number: number;
}

export interface MonthAdoption {
  year: number;
  month: number;
  month_name: string;
  no_use_users_number: number;
  low_use_users_number: number;
  frequent_use_users_number: number;
  daily_use_users_number: number;
}

export interface TeamAdoptionData {
  team_name: string;
  team_size: string;
  last_month_daily_use_users_number: number;
  last_month_daily_use_users_percentage: string;
  last_month_no_use_users_number: number;
  last_month_no_use_users_percentage: string;
  last_month_users_usage_by_tool: ToolUsageData[];
  last_six_months: {
    coding_tools: MonthAdoption[];
    general_tools: MonthAdoption[];
  };
}
