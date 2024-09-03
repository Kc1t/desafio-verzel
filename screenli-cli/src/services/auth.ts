import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`; 

const getToken = () => {
  return localStorage.getItem('token');
};

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during registration');
    }
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred during login');
    }
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
