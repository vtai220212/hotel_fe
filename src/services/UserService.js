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
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Response error:', error.response || error);
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
    console.error('Error registering user:', error.response || error);
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/login', data);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error.response || error);
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const addUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/users/add', formData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error.response || error);
    throw error.response?.data || { message: 'Failed to add user' };
  }
};

export const updateUser = async (id, formData) => {
  try {
    if (!id) {
      throw new Error('User ID is undefined');
    }

    for (let [key, value] of formData.entries()) {
      console.log(`FormData ${key}:`, value);
    }

    const response = await axiosInstance.put(`/api/users/${id}`, formData);
    console.log('Update user response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error.response || error);
    throw error.response?.data || { message: 'Failed to update user' };
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error.response || error);
    throw error.response?.data || { message: 'Failed to delete user' };
  }
};