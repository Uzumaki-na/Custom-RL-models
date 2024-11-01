import React from 'react';
import { Book, Code, Terminal, Zap, MessageCircle, FileText } from 'lucide-react';
import DocCard from './DocCard';
import SearchBar from './SearchBar';

const documentationSections = [
  {
    title: 'Getting Started',
    icon: Book,
    items: [
      { title: 'Introduction to RL Platform', link: '#' },
      { title: 'Quick Start Guide', link: '#' },
      { title: 'Core Concepts', link: '#' },
      { title: 'First Model Tutorial', link: '#' },
    ],
  },
  {
    title: 'Model Building',
    icon: Code,
    items: [
      { title: 'Model Types Overview', link: '#' },
      { title: 'Algorithm Selection Guide', link: '#' },
      { title: 'Hyperparameter Tuning', link: '#' },
      { title: 'Training Best Practices', link: '#' },
    ],
  },
  {
    title: 'API Reference',
    icon: Terminal,
    items: [
      { title: 'REST API Documentation', link: '#' },
      { title: 'Python SDK', link: '#' },
      { title: 'JavaScript SDK', link: '#' },
      { title: 'WebSocket API', link: '#' },
    ],
  },
  {
    title: 'Integration Guides',
    icon: Zap,
    items: [
      { title: 'Cloud Deployment', link: '#' },
      { title: 'Custom Environments', link: '#' },
      { title: 'Model Export Formats', link: '#' },
      { title: 'Third-party Integrations', link: '#' },
    ],
  },
  {
    title: 'Community Resources',
    icon: MessageCircle,
    items: [
      { title: 'Community Guidelines', link: '#' },
      { title: 'Contributing Guide', link: '#' },
      { title: 'Model Sharing Protocol', link: '#' },
      { title: 'Discussion Forums', link: '#' },
    ],
  },
  {
    title: 'Examples & Tutorials',
    icon: FileText,
    items: [
      { title: 'Example Projects', link: '#' },
      { title: 'Video Tutorials', link: '#' },
      { title: 'Case Studies', link: '#' },
      { title: 'Common Patterns', link: '#' },
    ],
  },
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about building and deploying RL models
          </p>
        </div>

        <div className="mt-8">
          <SearchBar />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {documentationSections.map((section) => (
            <DocCard
              key={section.title}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;