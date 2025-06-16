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
    console.error('Lỗi yêu cầu:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Phản hồi:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('Lỗi phản hồi:', error.response || error);
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
    console.error('Lỗi lấy danh sách người dùng:', error.response || error);
    throw error.response?.data || { message: 'Không thể lấy danh sách người dùng' };
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Lỗi đăng ký người dùng:', error.response || error);
    throw error.response?.data || { message: 'Đăng ký thất bại' };
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users/login', data);
    console.log('Phản hồi đăng nhập - Dữ liệu thô:', response);
    return response.data;
  } catch (error) {
    console.error('Lỗi đăng nhập người dùng:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Đăng nhập thất bại' };
  }
};

export const addUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/users/add', formData);
    return response.data;
  } catch (error) {
    console.error('Lỗi thêm người dùng:', error.response || error);
    throw error.response?.data || { message: 'Thêm người dùng thất bại' };
  }
};

export const updateUser = async (id, formData) => {
  try {
    if (!id) {
      throw new Error('ID người dùng không xác định');
    }

    const currentUser = JSON.parse(localStorage.getItem('user')) || {};
    const currentUserRole = currentUser.role || 'customer';

    // Tạo bản sao formData và loại bỏ role nếu không phải admin
    const filteredFormData = new FormData();
    for (let [key, value] of formData.entries()) {
      if (key !== 'role' || currentUserRole === 'admin') {
        filteredFormData.append(key, value);
      }
      console.log(`FormData ${key}:`, value);
    }

    const response = await axiosInstance.put(`/api/users/${id}`, filteredFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('Phản hồi cập nhật người dùng:', response.status, response.data);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error('Trạng thái phản hồi không mong muốn');
    }
  } catch (error) {
    console.error('Lỗi cập nhật người dùng:', error.response || error);
    throw error.response?.data || { message: 'Cập nhật người dùng thất bại' };
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi xóa người dùng:', error.response || error);
    throw error.response?.data || { message: 'Xóa người dùng thất bại' };
  }
};