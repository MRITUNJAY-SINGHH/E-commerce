import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../features/auth/AuthSlice';
import customerReducer from '../../features/customer/customerSlice';
import productReducer from '../../features/products/productSlice';
import brandReducer from '../../features/brand/brandSlice';

const store = configureStore({
   reducer: {
      auth: AuthReducer,
      customer: customerReducer,
      product: productReducer,
      brand: brandReducer,
   },
});
export default store;
