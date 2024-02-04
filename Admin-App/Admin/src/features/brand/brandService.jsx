import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getAllBrands = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}brand`, {
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

const brandService = {
   getAllBrands,
};

export default brandService;
