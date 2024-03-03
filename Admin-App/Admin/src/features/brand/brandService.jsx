import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { message } from 'antd';

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

const addBrand = async (title) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}brand`, title, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      message.success('Brand added successfully');
      return response.data;
   } catch (error) {
      if (error.response) {
         message.error(
            'The brand you entered already exists. Please use a different name.'
         );
         return error.response.data;
      } else {
         message.error('Network error');
         return { message: 'Network error' };
      }
   }
};

const brandService = {
   getAllBrands,
   addBrand,
};

export default brandService;
