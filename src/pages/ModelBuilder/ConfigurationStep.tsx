import React from 'react';
import { ArrowRight } from 'lucide-react';

const modelTypes = [
  { id: 'game', name: 'Game Environment', description: 'Train agents for game-like environments' },
  { id: 'robotics', name: 'Robotics', description: 'Control robotic systems and simulations' },
  { id: 'trading', name: 'Trading', description: 'Optimize trading strategies' },
  { id: 'recommendation', name: 'Recommendation', description: 'Build recommendation systems' },
];

const algorithms = [
  { id: 'dqn', name: 'Deep Q-Network (DQN)', description: 'Best for discrete action spaces' },
  { id: 'ppo', name: 'Proximal Policy Optimization (PPO)', description: 'Stable training for continuous action spaces' },
  { id: 'a2c', name: 'Advantage Actor-Critic (A2C)', description: 'Good balance of sample efficiency and stability' },
  { id: 'ddpg', name: 'Deep Deterministic Policy Gradient (DDPG)', description: 'Specialized for continuous control' },
];

interface ConfigurationStepProps {
  config: any;
  onUpdate: (config: any) => void;
  onNext: () => void;
}

const ConfigurationStep: React.FC<ConfigurationStepProps> = ({ config, onUpdate, onNext }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Choose Model Type</h2>
        <p className="mt-1 text-sm text-gray-500">Select the type of environment for your RL model</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {modelTypes.map((type) => (
            <div
              key={type.id}
              className={`relative rounded-lg border p-4 cursor-pointer hover:border-indigo-500 ${
                config.type === type.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
              onClick={() => onUpdate({ ...config, type: type.id })}
            >
              <h3 className="text-sm font-medium text-gray-900">{type.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium text-gray-900">Select Algorithm</h2>
        <p className="mt-1 text-sm text-gray-500">Choose the RL algorithm that best fits your needs</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {algorithms.map((algo) => (
            <div
              key={algo.id}
              className={`relative rounded-lg border p-4 cursor-pointer hover:border-indigo-500 ${
                config.algorithm === algo.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
              onClick={() => onUpdate({ ...config, algorithm: algo.id })}
            >
              <h3 className="text-sm font-medium text-gray-900">{algo.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{algo.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onNext}
          disabled={!config.type || !config.algorithm}
        >
          Next Step
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ConfigurationStep;