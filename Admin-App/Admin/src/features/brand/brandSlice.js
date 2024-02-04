import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import brandService from './brandService';

const initialState = {
   brand: [],
   isLoading: false,
   error: null,
};

export const getAllBrands = createAsyncThunk('auth/brand', async (thunkAPI) => {
   try {
      const response = await brandService.getAllBrands();
      return response;
   } catch (error) {
      return thunkAPI.rejectWithValue(error);
   }
});

const brandSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllBrands.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllBrands.fulfilled, (state, action) => {
            state.isLoading = false;
            state.brand = action.payload;
         })
         .addCase(getAllBrands.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default brandSlice.reducer;
