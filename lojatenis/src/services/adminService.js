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

export const getAllUsers = async () => {
  const response = await axios.get(API_URL, getAuthHeader());
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`, getAuthHeader());
  return response.data;
};