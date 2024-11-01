import React, { useState } from 'react';
import { ArrowLeft, Play, Download, AlertCircle } from 'lucide-react';
import MetricsChart from '../../components/MetricsChart';

interface ReviewStepProps {
  config: any;
  onBack: () => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ config, onBack }) => {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [modelId, setModelId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startTraining = async () => {
    setIsTraining(true);
    setError(null);
    try {
      // Simulate training progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setModelId('model-123'); // In real app, this would come from the API
            return 100;
          }
          // Add mock metrics data
          setMetrics((prev) => [
            ...prev,
            {
              epoch: prev.length,
              reward: Math.random() * 100,
              loss: Math.random() * 0.5,
            },
          ]);
          return prev + 1;
        });
      }, 500);
    } catch (err) {
      setError('Training failed. Please try again.');
      setIsTraining(false);
    }
  };

  const downloadModel = async () => {
    try {
      // In a real app, this would be an API call to download the model
      const modelBlob = new Blob(['Mock model data'], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(modelBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `model-${modelId}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError('Download failed. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Review Configuration</h2>
        <p className="mt-1 text-sm text-gray-500">
          Review your model configuration and start training
        </p>

        <div className="mt-6 bg-gray-50 rounded-lg p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Model Type</dt>
              <dd className="mt-1 text-sm text-gray-900">{config.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Algorithm</dt>
              <dd className="mt-1 text-sm text-gray-900">{config.algorithm}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Dataset</dt>
              <dd className="mt-1 text-sm text-gray-900">{config.dataset?.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Training Epochs</dt>
              <dd className="mt-1 text-sm text-gray-900">{config.trainingConfig?.epochs}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900">Hyperparameters</h4>
            <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              {Object.entries(config.hyperparameters || {}).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 rounded-md bg-red-50">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {isTraining && (
          <div className="mt-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                    Training Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    {progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-500"
                />
              </div>
            </div>

            {metrics.length > 0 && (
              <div className="mt-6">
                <MetricsChart data={metrics} />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={onBack}
          disabled={isTraining}
        >
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Back
        </button>
        {!isTraining ? (
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={startTraining}
          >
            <Play className="mr-2 -ml-1 h-5 w-5" />
            Start Training
          </button>
        ) : (
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
              progress === 100
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={downloadModel}
            disabled={progress < 100}
          >
            <Download className="mr-2 -ml-1 h-5 w-5" />
            Download Model
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewStep;