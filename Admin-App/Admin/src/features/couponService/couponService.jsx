import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { message } from 'antd';

const getAllCoupons = async () => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${base_url}coupon`, {
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

const addCoupon = async (coupon) => {
   try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${base_url}coupon`, coupon, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      message.success('Coupon added successfully');
      return response.data;
   } catch (error) {
      if (error.response) {
         message.error(
            'The coupon name you entered already exists. Please use a different name.'
         );
         return error.response.data;
      } else {
         message.error('Network error');
         return { message: 'Network error' };
      }
   }
};

const couponService = {
   getAllCoupons,
   addCoupon,
};

export default couponService;
