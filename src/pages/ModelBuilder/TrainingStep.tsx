import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Sliders } from 'lucide-react';

interface TrainingStepProps {
  config: any;
  onUpdate: (config: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const hyperparameterRanges = {
  dqn: [
    { id: 'learning_rate', name: 'Learning Rate', min: 0.0001, max: 0.1, step: 0.0001, default: 0.001 },
    { id: 'batch_size', name: 'Batch Size', min: 16, max: 512, step: 16, default: 64 },
    { id: 'buffer_size', name: 'Buffer Size', min: 1000, max: 1000000, step: 1000, default: 10000 },
    { id: 'gamma', name: 'Discount Factor (γ)', min: 0.8, max: 0.99, step: 0.01, default: 0.99 },
  ],
  ppo: [
    { id: 'learning_rate', name: 'Learning Rate', min: 0.0001, max: 0.1, step: 0.0001, default: 0.0003 },
    { id: 'n_steps', name: 'Steps per Update', min: 32, max: 2048, step: 32, default: 128 },
    { id: 'clip_range', name: 'Clip Range', min: 0.1, max: 0.4, step: 0.1, default: 0.2 },
    { id: 'gae_lambda', name: 'GAE Lambda', min: 0.8, max: 1, step: 0.01, default: 0.95 },
  ],
  a2c: [
    { id: 'learning_rate', name: 'Learning Rate', min: 0.0001, max: 0.1, step: 0.0001, default: 0.0007 },
    { id: 'n_steps', name: 'Steps per Update', min: 4, max: 128, step: 4, default: 8 },
    { id: 'ent_coef', name: 'Entropy Coefficient', min: 0, max: 0.1, step: 0.01, default: 0.01 },
    { id: 'vf_coef', name: 'Value Function Coefficient', min: 0.1, max: 1, step: 0.1, default: 0.5 },
  ],
  ddpg: [
    { id: 'learning_rate', name: 'Learning Rate', min: 0.0001, max: 0.1, step: 0.0001, default: 0.001 },
    { id: 'buffer_size', name: 'Buffer Size', min: 1000, max: 1000000, step: 1000, default: 100000 },
    { id: 'tau', name: 'Soft Update Coefficient (τ)', min: 0.001, max: 0.1, step: 0.001, default: 0.005 },
    { id: 'train_freq', name: 'Training Frequency', min: 1, max: 10, step: 1, default: 1 },
  ],
};

const TrainingStep: React.FC<TrainingStepProps> = ({ config, onUpdate, onNext, onBack }) => {
  const [epochs, setEpochs] = useState(100);
  const algorithm = config.algorithm;
  const parameters = hyperparameterRanges[algorithm as keyof typeof hyperparameterRanges] || [];

  const handleParameterChange = (parameterId: string, value: number) => {
    onUpdate({
      ...config,
      hyperparameters: {
        ...config.hyperparameters,
        [parameterId]: value,
      },
      trainingConfig: {
        ...config.trainingConfig,
        epochs,
      },
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Training Configuration</h2>
        <p className="mt-1 text-sm text-gray-500">
          Configure hyperparameters and training settings for your model
        </p>

        <div className="mt-6">
          <label htmlFor="epochs" className="block text-sm font-medium text-gray-700">
            Training Epochs
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="epochs"
              id="epochs"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={epochs}
              onChange={(e) => setEpochs(parseInt(e.target.value))}
              min={1}
              max={1000}
            />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {parameters.map((param) => (
            <div key={param.id}>
              <label htmlFor={param.id} className="block text-sm font-medium text-gray-700">
                {param.name}
              </label>
              <div className="mt-1 flex items-center space-x-4">
                <input
                  type="range"
                  id={param.id}
                  min={param.min}
                  max={param.max}
                  step={param.step}
                  value={config.hyperparameters[param.id] || param.default}
                  onChange={(e) => handleParameterChange(param.id, parseFloat(e.target.value))}
                  className="flex-1"
                />
                <span className="w-20 text-sm text-gray-500">
                  {(config.hyperparameters[param.id] || param.default).toFixed(4)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Back
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={onNext}
        >
          Next Step
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TrainingStep;