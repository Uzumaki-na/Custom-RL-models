import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = {
  // Model management
  createModel: async (config: any) => {
    const response = await axios.post(`${API_URL}/models/create`, config);
    return response.data;
  },

  trainModel: async (modelId: string) => {
    const response = await axios.post(`${API_URL}/models/${modelId}/train`);
    return response.data;
  },

  getModelStatus: async (modelId: string) => {
    const response = await axios.get(`${API_URL}/models/${modelId}/status`);
    return response.data;
  },

  getModelMetrics: async (modelId: string) => {
    const response = await axios.get(`${API_URL}/models/${modelId}/metrics`);
    return response.data;
  },

  listModels: async () => {
    const response = await axios.get(`${API_URL}/models`);
    return response.data;
  },
};

export default api;