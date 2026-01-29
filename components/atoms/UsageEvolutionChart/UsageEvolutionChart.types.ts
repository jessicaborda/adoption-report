export interface UsageEvolutionData {
  month: string;
  Daily: number;
  Frequent: number;
  Low: number;
  "No Use": number;
}

export interface UsageEvolutionChartProps {
  data: UsageEvolutionData[];
}