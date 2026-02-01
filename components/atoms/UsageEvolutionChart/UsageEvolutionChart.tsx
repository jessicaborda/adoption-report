"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import { UsageEvolutionChartProps } from "./UsageEvolutionChart.types";
import { chartColors } from "./UsageEvolutionChart.styles";

export const UsageEvolutionChart = ({ data }: UsageEvolutionChartProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '100%', height: 220 }} />;
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'var(--font-inter)' }}
          dy={10}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'var(--font-inter)' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#3B1E43', 
            border: 'none', 
            borderRadius: '8px',
            color: '#fff',
            fontFamily: 'var(--font-inter)'
          }}
          itemStyle={{ color: '#fff', fontFamily: 'var(--font-inter)' }}
        />
        <Line 
          type="monotone" 
          dataKey="Daily" 
          stroke={chartColors.daily} 
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="Frequent" 
          stroke={chartColors.frequent} 
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="Low" 
          stroke={chartColors.low} 
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="No Use" 
          stroke={chartColors.noUse} 
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
