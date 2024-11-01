import React from 'react';
import { BarChart3, Brain, Clock, ArrowUp } from 'lucide-react';
import ModelCard from './ModelCard';
import StatsCard from './StatsCard';
import MetricsChart from '../../components/MetricsChart';

const mockMetrics = Array.from({ length: 50 }, (_, i) => ({
  epoch: i,
  reward: Math.random() * 100 + 50 * Math.sin(i / 10),
  loss: Math.max(0.5 - i / 100, 0.1) + Math.random() * 0.1,
}));

const mockModels = [
  {
    id: 1,
    name: 'CartPole-v1 DQN',
    type: 'game',
    algorithm: 'dqn',
    status: 'completed',
    metrics: {
      reward: 195.8,
      episodes: 1000,
      duration: '2h 15m',
    },
    lastUpdated: '2h ago',
  },
  {
    id: 2,
    name: 'Trading Bot PPO',
    type: 'trading',
    algorithm: 'ppo',
    status: 'training',
    metrics: {
      reward: 145.2,
      episodes: 750,
      duration: '1h 30m',
    },
    lastUpdated: '15m ago',
  },
  {
    id: 3,
    name: 'Robotics Control',
    type: 'robotics',
    algorithm: 'ddpg',
    status: 'failed',
    metrics: {
      reward: 85.4,
      episodes: 500,
      duration: '45m',
    },
    lastUpdated: '1d ago',
  },
];

const stats = [
  {
    name: 'Total Models',
    value: '12',
    icon: Brain,
    change: '+2',
    changeType: 'increase',
  },
  {
    name: 'Average Reward',
    value: '156.3',
    icon: BarChart3,
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    name: 'Training Time',
    value: '24.5h',
    icon: Clock,
    change: '-2.3h',
    changeType: 'decrease',
  },
  {
    name: 'Success Rate',
    value: '89%',
    icon: ArrowUp,
    change: '+4%',
    changeType: 'increase',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.name} {...stat} />
          ))}
        </div>

        {/* Charts */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Training Progress</h2>
            <MetricsChart data={mockMetrics} />
          </div>
        </div>

        {/* Models */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Models</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mockModels.map((model) => (
              <ModelCard key={model.id} {...model} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;