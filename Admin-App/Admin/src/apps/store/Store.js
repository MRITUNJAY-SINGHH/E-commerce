import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../../features/auth/AuthSlice';
import customerReducer from '../../features/customer/customerSlice';
import productReducer from '../../features/products/productSlice';
import brandReducer from '../../features/brand/brandSlice';
import categoryReducer from '../../features/category/categorySlice';
import colorReducer from '../../features/color/colorSlice';
import blogReducer from '../../features/blog/blogSlice';
import blogCategorySlice from '../../features/blogCategory/blogSlice';

const store = configureStore({
   reducer: {
      auth: AuthReducer,
      customer: customerReducer,
      product: productReducer,
      brand: brandReducer,
      category: categoryReducer,
      color: colorReducer,
      blog: blogReducer,
      BlogCategory: blogCategorySlice,
   },
});
export default store;
