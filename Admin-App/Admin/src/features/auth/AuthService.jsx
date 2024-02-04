import axios from 'axios';
import { base_url } from '../../utils/base_url';

const login = async (userData) => {
   try {
      const response = await axios.post(
         `${base_url}user/login/admin`,
         userData
      );

      if (response.data) {
         localStorage.setItem('user', JSON.stringify(response.data));
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

const AuthService = {
   login,
};

export default AuthService;
