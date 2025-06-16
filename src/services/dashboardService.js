import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

// Tạo instance của axios với header mặc định
const axiosWithAuth = axios.create({
  baseURL: API_URL,
});

axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getDashboardStats = async () => {
  const response = await axiosWithAuth.get('/api/dashboard/stats');
  return response.data;
};