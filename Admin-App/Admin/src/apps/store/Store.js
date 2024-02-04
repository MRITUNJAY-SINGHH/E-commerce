import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../features/auth/AuthSlice';
import customerReducer from '../../features/customer/customerSlice';

const store = configureStore({
   reducer: {
      auth: AuthReducer,
      customer: customerReducer,
   },
});
export default store;
