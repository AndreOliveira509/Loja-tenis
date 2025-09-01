import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'x-auth-token': token
    }
  };
};

export const getProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, getAuthHeader());
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await axios.put(`${API_URL}/profile`, userData, getAuthHeader());
  return response.data;
};

export const deleteUser = async () => {
  const response = await axios.delete(`${API_URL}/profile`, getAuthHeader());
  return response.data;
};