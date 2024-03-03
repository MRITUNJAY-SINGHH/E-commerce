import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { message } from 'antd';

const getAllColors = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}color`, {
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

const AddColors = async (color) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}color`, color, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      message.success('Color added successfully');
      return response.data;
   } catch (error) {
      if (error.response) {
         message.error(
            'The color you entered already exists. Please use a different name.'
         );
         return error.response.data;
      } else {
         message.error('Network error');
         return { message: 'Network error' };
      }
   }
};

const colorService = {
   getAllColors,
   AddColors,
};

export default colorService;
