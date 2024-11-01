import React from 'react';
import { Search, Filter, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import ModelShareCard from './ModelShareCard';
import DiscussionCard from './DiscussionCard';

const mockModels = [
  {
    id: 1,
    title: 'CartPole DQN Implementation',
    author: 'Sarah Chen',
    description: 'A stable DQN implementation for the CartPole environment with consistent rewards above 195.',
    tags: ['DQN', 'Game', 'CartPole'],
    likes: 234,
    comments: 45,
    shares: 12,
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 2,
    title: 'Trading Bot using PPO',
    author: 'Michael Ross',
    description: 'Cryptocurrency trading bot using PPO algorithm with risk management features.',
    tags: ['PPO', 'Trading', 'Crypto'],
    likes: 187,
    comments: 32,
    shares: 8,
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
];

const mockDiscussions = [
  {
    id: 1,
    title: 'Best practices for hyperparameter tuning in DQN',
    author: 'Alex Thompson',
    content: 'What are your approaches to efficiently tune DQN hyperparameters? I\'m particularly interested in learning rate scheduling...',
    tags: ['DQN', 'Hyperparameters', 'Discussion'],
    replies: 23,
    views: 456,
    date: '3 hours ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
  {
    id: 2,
    title: 'Implementing DDPG for robotic control',
    author: 'Emily Wang',
    content: 'Looking for advice on implementing DDPG for a 6-DOF robotic arm. Main challenge is handling continuous action space...',
    tags: ['DDPG', 'Robotics', 'Help'],
    replies: 15,
    views: 289,
    date: '1 day ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Community</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Share Model
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mt-6 flex space-x-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search models, discussions..."
              />
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Filters
          </button>
        </div>

        {/* Content Sections */}
        <div className="mt-8 space-y-8">
          {/* Shared Models */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Models</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {mockModels.map((model) => (
                <ModelShareCard key={model.id} {...model} />
              ))}
            </div>
          </section>

          {/* Discussions */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Discussions</h2>
            <div className="space-y-4">
              {mockDiscussions.map((discussion) => (
                <DiscussionCard key={discussion.id} {...discussion} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Community;