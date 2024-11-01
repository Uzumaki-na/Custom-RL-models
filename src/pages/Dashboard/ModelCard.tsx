import React from 'react';
import { Brain, Clock, BarChart3 } from 'lucide-react';

interface ModelCardProps {
  name: string;
  type: string;
  algorithm: string;
  status: 'completed' | 'training' | 'failed';
  metrics: {
    reward: number;
    episodes: number;
    duration: string;
  };
  lastUpdated: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  type,
  algorithm,
  status,
  metrics,
  lastUpdated,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'training':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {type} • {algorithm.toUpperCase()}
            </p>
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <BarChart3 className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <span className="text-gray-900 font-medium">{metrics.reward}</span>
            <span className="ml-1 text-gray-500">reward</span>
          </div>
          <div className="flex items-center text-sm">
            <Brain className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <span className="text-gray-900 font-medium">{metrics.episodes}</span>
            <span className="ml-1 text-gray-500">episodes</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <span className="text-gray-900 font-medium">{metrics.duration}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span className="text-gray-500">Last updated </span>
          <time className="font-medium text-gray-900">{lastUpdated}</time>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;