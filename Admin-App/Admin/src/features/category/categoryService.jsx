import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getAllCategory = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}category`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
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

const addCategory = async (Data) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}category`, Data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
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

const categoryService = {
   getAllCategory,
   addCategory,
};

export default categoryService;
