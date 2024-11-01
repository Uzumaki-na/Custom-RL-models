import React from 'react';
import { Download, ExternalLink, Trash2 } from 'lucide-react';
import MetricsChart from '../components/MetricsChart';

const mockHistory = [
  {
    id: 'model-123',
    name: 'CartPole DQN',
    type: 'Game Environment',
    algorithm: 'DQN',
    status: 'completed',
    metrics: {
      finalReward: 195.8,
      avgReward: 180.5,
      trainTime: '2h 15m',
    },
    createdAt: '2024-03-10T14:30:00Z',
    data: Array.from({ length: 50 }, (_, i) => ({
      epoch: i,
      reward: Math.random() * 100 + 50 * Math.sin(i / 10),
      loss: Math.max(0.5 - i / 100, 0.1) + Math.random() * 0.1,
    })),
  },
  {
    id: 'model-124',
    name: 'Trading Bot PPO',
    type: 'Trading',
    algorithm: 'PPO',
    status: 'completed',
    metrics: {
      finalReward: 145.2,
      avgReward: 132.8,
      trainTime: '1h 30m',
    },
    createdAt: '2024-03-09T10:15:00Z',
    data: Array.from({ length: 50 }, (_, i) => ({
      epoch: i,
      reward: Math.random() * 100 + 50 * Math.sin(i / 10),
      loss: Math.max(0.5 - i / 100, 0.1) + Math.random() * 0.1,
    })),
  },
];

const ModelHistory = () => {
  const downloadModel = (modelId: string) => {
    // Implementation similar to ReviewStep
    const modelBlob = new Blob(['Mock model data'], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(modelBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `model-${modelId}.zip`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Model History</h1>
        <p className="mt-2 text-gray-600">View and manage your trained models</p>

        <div className="mt-8 space-y-8">
          {mockHistory.map((model) => (
            <div key={model.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{model.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {model.type} • {model.algorithm}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => downloadModel(model.id)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    <button className="inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Metrics</h3>
                    <dl className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Final Reward</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">
                          {model.metrics.finalReward}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Average Reward</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">
                          {model.metrics.avgReward}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Training Time</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">
                          {model.metrics.trainTime}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Training Progress</h3>
                    <MetricsChart data={model.data} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelHistory;