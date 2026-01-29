import { getTeamAdoptionData } from "../../features/dashboard/api";
import { 
  getExecutiveSummary, 
  getEvolutionByToolType 
} from "../../features/dashboard/utils";
import DashboardView from "./components/DashboardView";

// Server Component (Feature Container)
export default async function DashboardPage() {
  const data = await getTeamAdoptionData();

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-red-500">No dashboard data available.</p>
      </div>
    );
  }

  // Data transformations
  const summaryData = getExecutiveSummary(data);
  const codingEvolutionData = getEvolutionByToolType(data, 'Coding Tools');
  const generalEvolutionData = getEvolutionByToolType(data, 'General Tools');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardView 
        summaryData={summaryData}
        codingEvolutionData={codingEvolutionData}
        generalEvolutionData={generalEvolutionData}
        teamSize={data.team_size}
        toolsUsage={data.last_month_users_usage_by_tool}
      />
    </main>
  );
}