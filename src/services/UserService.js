// frontend/src/services/UserService.js
import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;
console.log('API_URL:', API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request config:', config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response || error);
    throw error.response?.data || { message: 'Failed to fetch users' };
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/login', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const addUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/add', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add user' };
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/api/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update user' };
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete user' };
  }
};