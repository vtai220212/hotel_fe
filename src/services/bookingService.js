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

export const createBooking = async (bookingData) => {
  const response = await axiosWithAuth.post(`/api/bookings`, bookingData);
  return response.data;
};

export const getBookingById = async (bookingId) => {
  const response = await axiosWithAuth.get(`/api/bookings/${bookingId}`);
  return response.data;
};

export const updateBooking = async (bookingId, updateData) => {
  const response = await axiosWithAuth.put(`/api/bookings/${bookingId}`, updateData);
  return response.data;
};

export const cancelBooking = async (bookingId) => {
  const response = await axiosWithAuth.put(`/api/bookings/${bookingId}/cancel`);
  return response.data;
};

export const deleteBooking = async (bookingId) => {
  const response = await axiosWithAuth.delete(`/api/bookings/${bookingId}`);
  return response.data;
};

export const getBookingsByUser = async () => {
  const response = await axiosWithAuth.get(`/api/bookings/my-bookings`);
  return response.data;
};

export const getAllBookings = async () => {
  const response = await axiosWithAuth.get(`/api/bookings`);
  return response.data;
};