import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { message } from 'antd';

const getAllBlogCategories = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}blogcategory`, {
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

const AddBlogCategory = async (data) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}blogcategory`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      message.success('Blog category added successfully');
      return response.data;
   } catch (error) {
      if (error.response) {
         message.error(
            'The blog category you entered already exists. Please use a different name.'
         );
         return error.response.data;
      } else {
         message.error('Network error');
         return { message: 'Network error' };
      }
   }
};

const blogCategoryService = {
   getAllBlogCategories,
   AddBlogCategory,
};

export default blogCategoryService;
