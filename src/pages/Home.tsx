import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, Upload, Download, MessageSquare, Users } from 'lucide-react';
import Hero from '../components/Hero';
import CommonModels from '../components/CommonModels';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "No-Code Model Builder",
      description: "Build and train RL models through an intuitive visual interface without writing code."
    },
    {
      icon: <Upload className="w-8 h-8 text-indigo-600" />,
      title: "Dataset Analysis",
      description: "Upload and automatically analyze datasets with instant insights and visualizations."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: "Real-Time Metrics",
      description: "Monitor training progress with customizable metrics and dynamic performance graphs."
    },
    {
      icon: <Download className="w-8 h-8 text-indigo-600" />,
      title: "Export & Deploy",
      description: "Download trained models in multiple formats or deploy directly to cloud platforms."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      title: "AI Assistant",
      description: "Get instant help with our AI-powered chatbot for guidance and debugging."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Community Hub",
      description: "Share and learn from the community's models, datasets, and experiences."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Common Models Section */}
      <CommonModels />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to build RL models
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              No coding required. Just configure, train, and deploy.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Start building your first RL model today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/build" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/docs" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;