import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from './blogService';

const initialState = {
   blog: [],
   isLoading: false,
   error: null,
};

export const getAllBlogs = createAsyncThunk('auth/brand', async (thunkAPI) => {
   try {
      const response = await blogService.getAllBlogs();
      return response;
   } catch (error) {
      return thunkAPI.rejectWithValue(error);
   }
});

const blogSlice = createSlice({
   name: 'blog',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllBlogs.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog = action.payload;
         })
         .addCase(getAllBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default blogSlice.reducer;
