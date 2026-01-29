"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { UsageEvolutionChartProps } from "./UsageEvolutionChart.types";

export const UsageEvolutionChart = ({ data }: UsageEvolutionChartProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '100%', height: 180 }} />;
  }

  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <XAxis dataKey="month" hide />
        <YAxis hide />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="Daily" 
          stroke="#7ED7B3" 
          strokeWidth={2}
          dot={false}
        />
        <Line 
          type="monotone" 
          dataKey="Frequent" 
          stroke="#FFD166" 
          strokeWidth={2}
          dot={false}
        />
        <Line 
          type="monotone" 
          dataKey="Low" 
          stroke="#F4A261" 
          strokeWidth={2}
          dot={false}
        />
        <Line 
          type="monotone" 
          dataKey="No Use" 
          stroke="#C77DFF" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};