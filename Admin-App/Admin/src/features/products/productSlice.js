import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
   product: [],
   isLoading: false,
   error: null,
   successMessage: null,
};

export const getAllProducts = createAsyncThunk(
   'product/getAllProducts',
   async (thunkAPI) => {
      try {
         const response = await productService.getAllProducts();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
export const createProduct = createAsyncThunk(
   'product/createProduct',
   async (productData, thunkAPI) => {
      try {
         const response = await productService.createProduct(productData);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   }
);

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
         })
         .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         })
         .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.createProduct = action.payload;
            state.successMessage = 'Product added successfully';
            state.error = null;
         })
         .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.successMessage = null;
         });
   },
});

export default productSlice.reducer;
