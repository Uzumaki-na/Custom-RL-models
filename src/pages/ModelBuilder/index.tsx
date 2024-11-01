import React, { useState } from 'react';
import { Brain, Play, Settings, Database } from 'lucide-react';
import ConfigurationStep from './ConfigurationStep';
import DatasetStep from './DatasetStep';
import TrainingStep from './TrainingStep';
import ReviewStep from './ReviewStep';

const steps = [
  { id: 'configuration', name: 'Configuration', icon: Settings },
  { id: 'dataset', name: 'Dataset', icon: Database },
  { id: 'training', name: 'Training', icon: Play },
  { id: 'review', name: 'Review', icon: Brain },
];

const ModelBuilder = () => {
  const [currentStep, setCurrentStep] = useState('configuration');
  const [modelConfig, setModelConfig] = useState({
    type: '',
    algorithm: '',
    hyperparameters: {},
    dataset: null,
    trainingConfig: {},
  });

  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case 'configuration':
        return <ConfigurationStep config={modelConfig} onUpdate={setModelConfig} onNext={() => setCurrentStep('dataset')} />;
      case 'dataset':
        return <DatasetStep config={modelConfig} onUpdate={setModelConfig} onNext={() => setCurrentStep('training')} onBack={() => setCurrentStep('configuration')} />;
      case 'training':
        return <TrainingStep config={modelConfig} onUpdate={setModelConfig} onNext={() => setCurrentStep('review')} onBack={() => setCurrentStep('dataset')} />;
      case 'review':
        return <ReviewStep config={modelConfig} onBack={() => setCurrentStep('training')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Model Builder</h1>
          <p className="mt-2 text-gray-600">Create your RL model in minutes without writing code</p>
        </div>

        {/* Progress Steps */}
        <nav aria-label="Progress" className="mb-8">
          <ol className="flex items-center">
            {steps.map((step, stepIdx) => {
              const isCurrent = step.id === currentStep;
              const isCompleted = steps.findIndex(s => s.id === currentStep) > steps.findIndex(s => s.id === step.id);
              
              return (
                <li key={step.id} className={`${stepIdx !== 0 ? 'ml-8' : ''} relative`}>
                  {stepIdx !== 0 && (
                    <div className="absolute inset-0 -ml-8 flex items-center" aria-hidden="true">
                      <div className={`h-0.5 w-full ${isCompleted ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                    </div>
                  )}
                  <div className="relative flex items-center justify-center">
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      isCurrent ? 'bg-indigo-600 text-white' :
                      isCompleted ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-900">{step.name}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Step Content */}
        <div className="bg-white shadow rounded-lg p-6">
          {getCurrentStepComponent()}
        </div>
      </div>
    </div>
  );
};

export default ModelBuilder;