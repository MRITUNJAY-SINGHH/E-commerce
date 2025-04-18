import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getUsers = async () => {
   try {
      const response = await axios.get(`${base_url}user/allUser`);
      return response.data;
   } catch (error) {
      if (error.response) {
         return error.response.data;
      } else {
         return { message: 'Network error' };
      }
   }
};

const customerService = {
   getUsers,
};

export default customerService;
