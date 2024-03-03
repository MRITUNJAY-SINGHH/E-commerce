import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { message } from 'antd';

const getAllBlogs = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}blog`, {
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

const addBlog = async (data) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}blog`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      message.success('Blog added successfully');
      return response.data;
   } catch (error) {
      if (error.response) {
         message.error(
            'The blog  you entered already exists. Please use a different name.'
         );
         return error.response.data;
      } else {
         message.error('Network error');
         return { message: 'Network error' };
      }
   }
};

const blogService = {
   getAllBlogs,
   addBlog,
};

export default blogService;
