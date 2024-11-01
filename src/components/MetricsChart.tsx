import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MetricsChartProps {
  data: any[];
}

const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="reward"
            stroke="#8884d8"
            name="Reward"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="loss"
            stroke="#82ca9d"
            name="Loss"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsChart;