import React, { useCallback } from 'react';
import { ArrowRight, ArrowLeft, Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface DatasetStepProps {
  config: any;
  onUpdate: (config: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const DatasetStep: React.FC<DatasetStepProps> = ({ config, onUpdate, onNext, onBack }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    onUpdate({
      ...config,
      dataset: {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
      },
    });
  }, [config, onUpdate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json'],
      'text/csv': ['.csv'],
    },
    maxFiles: 1,
  });

  const removeFile = () => {
    onUpdate({
      ...config,
      dataset: null,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Upload Dataset</h2>
        <p className="mt-1 text-sm text-gray-500">
          Upload your training data in CSV or JSON format
        </p>

        {!config.dataset ? (
          <div
            {...getRootProps()}
            className={`mt-4 border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
              ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'}`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your dataset here, or click to select a file
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Supported formats: CSV, JSON (max 100MB)
            </p>
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-gray-300 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Upload className="h-8 w-8 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{config.dataset.name}</p>
                  <p className="text-sm text-gray-500">
                    {(config.dataset.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Back
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onNext}
          disabled={!config.dataset}
        >
          Next Step
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DatasetStep;