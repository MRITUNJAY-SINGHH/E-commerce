import axios from 'axios';
import { base_url } from '../../utils/base_url';

const login = async (userData) => {
   try {
      const response = await axios.post(
         `${base_url}user/login/admin`,
         userData
      );

      if (response.data) {
         localStorage.setItem('token', response.data.token);
      }

      return response.data;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      } else {
         return { message: 'Network error' };
      }
   }
};
const getAllOrders = async () => {
   try {
      const token = localStorage.getItem('token');

      const headers = {
         Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(`${base_url}user/all-user-order`, {
         headers,
      });

      return response.data;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      } else {
         return { message: 'Network error' };
      }
   }
};
const AuthService = {
   login,
   getAllOrders,
};

export default AuthService;
