import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

// Hàm để lấy token từ local storage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Tạo instance của axios với header mặc định
const axiosWithAuth = axios.create({
  baseURL: API_URL,
});

// Interceptor để thêm token vào header của mỗi request
axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/api/categories`);
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await axiosWithAuth.post(`/api/categories`, categoryData);
  return response.data;
};

export const updateCategory = async (categoryData) => {
  const response = await axiosWithAuth.put(`/api/categories/${categoryData._id}`, categoryData);
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const response = await axiosWithAuth.delete(`/api/categories/${categoryId}`);
  return response.data;
};