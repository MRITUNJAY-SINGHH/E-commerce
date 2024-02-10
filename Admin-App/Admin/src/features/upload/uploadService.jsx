import axios from 'axios';
import { base_url } from '../../utils/base_url';

const uploadImages = async (formData) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}upload`, formData, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
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

const uploadService = {
   uploadImages,
};

export default uploadService;
