import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getAllBrands = async () => {
   try {
      const response = await axios.get(`${base_url}product`);
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
