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

export const getRooms = async (categoryId) => {
  const response = await axios.get(`${API_URL}/api/rooms`, {
    params: categoryId ? { category: categoryId } : {},
  });
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${API_URL}/api/categories`);
  return response.data;
};

export const getRoomById = async (roomId) => {
  const response = await axios.get(`${API_URL}/api/rooms/${roomId}`);
  return response.data;
};

export const deleteRoom = async (roomId) => {
  const response = await axiosWithAuth.delete(`/api/rooms/${roomId}`);
  return response.data;
};

export const createRoom = async (roomData) => {
  const { code, title, price, discount, beds, guests, area, view, category, status, images } = roomData;
  const response = await axiosWithAuth.post(`/api/rooms`, { code, title, price, discount, beds, guests, area, view, category, status, images });
  return response.data;
};

export const updateRoom = async (roomData) => {
  const response = await axiosWithAuth.put(`/api/rooms/${roomData._id}`, roomData);
  return response.data;
};

export const uploadImage = async (formData) => {
  const response = await axiosWithAuth.post(`/api/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};