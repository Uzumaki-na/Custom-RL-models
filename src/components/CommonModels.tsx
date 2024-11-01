import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, TrendingUp, Gamepad, CircuitBoard, ShoppingCart } from 'lucide-react';

const commonModels = [
  {
    id: 'cartpole-dqn',
    name: 'CartPole DQN',
    description: 'Classic pole balancing problem using Deep Q-Network. Perfect for beginners.',
    icon: Gamepad,
    difficulty: 'Beginner',
    type: 'Game',
    algorithm: 'DQN',
    metrics: {
      avgReward: '195.8',
      trainTime: '~5 min',
    },
  },
  {
    id: 'trading-ppo',
    name: 'Trading Bot PPO',
    description: 'Cryptocurrency trading using Proximal Policy Optimization.',
    icon: TrendingUp,
    difficulty: 'Intermediate',
    type: 'Trading',
    algorithm: 'PPO',
    metrics: {
      avgReward: '145.2',
      trainTime: '~15 min',
    },
  },
  {
    id: 'robotics-ddpg',
    name: 'Robotic Arm DDPG',
    description: 'Robotic arm control using Deep Deterministic Policy Gradient.',
    icon: CircuitBoard,
    difficulty: 'Advanced',
    type: 'Robotics',
    algorithm: 'DDPG',
    metrics: {
      avgReward: '178.5',
      trainTime: '~30 min',
    },
  },
  {
    id: 'recommender-a2c',
    name: 'Recommender A2C',
    description: 'Product recommendation system using Advantage Actor-Critic.',
    icon: ShoppingCart,
    difficulty: 'Intermediate',
    type: 'Recommendation',
    algorithm: 'A2C',
    metrics: {
      avgReward: '156.3',
      trainTime: '~20 min',
    },
  },
];

const CommonModels = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular RL Models</h2>
          <p className="mt-4 text-xl text-gray-600">
            Start with pre-configured models for common use cases
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {commonModels.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <model.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{model.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Difficulty:</span>
                    <span className="font-medium text-gray-900">{model.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Algorithm:</span>
                    <span className="font-medium text-gray-900">{model.algorithm}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Avg. Reward:</span>
                    <span className="font-medium text-gray-900">{model.metrics.avgReward}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Train Time:</span>
                    <span className="font-medium text-gray-900">{model.metrics.trainTime}</span>
                  </div>
                </div>
                <Link
                  to={`/build?template=${model.id}`}
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Use Template
                  <Zap className="ml-2 -mr-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonModels;