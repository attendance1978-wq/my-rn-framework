import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      // Handle specific HTTP status codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          console.log('Unauthorized access');
          break;
        case 403:
          console.log('Forbidden access');
          break;
        case 404:
          console.log('Resource not found');
          break;
        case 500:
          console.log('Server error');
          break;
        default:
          console.log('API error:', error.message);
      }
    } else if (error.request) {
      console.log('Network error:', error.message);
    } else {
      console.log('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: credentials => api.post('/auth/login', credentials),
  register: data => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: data => api.put('/users/profile', data),
};

// Utility function for mock data (for development)
export const fetchMockData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'Item 1', description: 'Description for item 1' },
        { id: '2', title: 'Item 2', description: 'Description for item 2' },
        { id: '3', title: 'Item 3', description: 'Description for item 3' },
      ]);
    }, 1000);
  });
};

export default api;
