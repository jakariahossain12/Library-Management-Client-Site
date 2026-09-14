import axios from 'axios';

// Get host API from env or fallback to your Render URL
const HOST_API = 
  import.meta.env?.VITE_HOST_API || 
  'https://library-management-api-9ghg.onrender.com';

const apiClient = axios.create({
  baseURL: HOST_API,
});

// Automatically attach Bearer token from localStorage if it exists
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('lm_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;