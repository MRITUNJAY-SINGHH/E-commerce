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
      return error.response
         ? error.response.data
         : { message: 'Network error' };
   }
};

const deleteImages = async (public_id) => {
   try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
         `${base_url}upload/delete/${public_id}`,
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      return error.response
         ? error.response.data
         : { message: 'Network error' };
   }
};

const uploadService = {
   uploadImages,
   deleteImages,
};

export default uploadService;
