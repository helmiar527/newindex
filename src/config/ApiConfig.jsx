// Import environment variables
import useErrorStore from '../services/err/errorStore';

// Inisialisasi env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const CLIENT_USERNAME = import.meta.env.VITE_CLIENT_USERNAME;

// Validasi environment variables
const validateEnvironment = () => {
  const missingVars = [];
  
  if (!API_BASE_URL) missingVars.push('VITE_API_BASE_URL');
  if (!API_KEY) missingVars.push('VITE_API_KEY');
  if (!CLIENT_USERNAME) missingVars.push('VITE_CLIENT_USERNAME');
  
  if (missingVars.length > 0) {
    useErrorStore.getState().addError(
      'environment_variables_config',
      `Missing environment variables: ${missingVars.join(', ')}`
    );
  }
};

// Panggil validasi
validateEnvironment();

// List API endpoints
export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/auth/gettoken`,
  CONTACT: `${API_BASE_URL}/contact`,
};

// Export
export default {
  API_BASE_URL,
  API_KEY,
  CLIENT_USERNAME,
  API_ENDPOINTS,
};