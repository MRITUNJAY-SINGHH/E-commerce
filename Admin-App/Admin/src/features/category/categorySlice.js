import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from './categoryService';

const initialState = {
   category: [],
   isLoading: false,
   error: null,
};

export const getAllCategory = createAsyncThunk(
   'auth/category',
   async (thunkAPI) => {
      try {
         const response = await categoryService.getAllCategory();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllCategory.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.category = action.payload;
         })
         .addCase(getAllCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default categorySlice.reducer;
