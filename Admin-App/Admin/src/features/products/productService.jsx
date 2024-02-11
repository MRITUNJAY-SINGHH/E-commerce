import axios from 'axios';
import { base_url } from '../../utils/base_url';

const getAllProducts = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}product`, {
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

//Create products

const createProduct = async (product) => {
   try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${base_url}product`, product, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data;
   } catch (error) {
      if (
         error.response &&
         error.response.data.name === 'MongoError' &&
         error.response.data.code === 11000
      ) {
         return {
            message:
               'Duplicate key error: A product with this title already exists.',
         };
      } else if (error.response) {
         return error.response.data;
      } else {
         return { message: 'Network error' };
      }
   }
};

const productService = {
   getAllProducts,
   createProduct,
};

export default productService;
