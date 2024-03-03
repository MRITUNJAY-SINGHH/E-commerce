import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogCategoryService from './blogCategoryService';

const initialState = {
   BlogCategory: [],
   isLoading: false,
   error: null,
};

export const getAllBlogCategories = createAsyncThunk(
   'auth/blogcategory',
   async (thunkAPI) => {
      try {
         const response = await blogCategoryService.getAllBlogCategories();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const AddBlogCategory = createAsyncThunk(
   'auth/AddBlogCategory',
   async (data, thunkAPI) => {
      try {
         const response = await blogCategoryService.AddBlogCategory(data);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const blogCategorySlice = createSlice({
   name: 'BlogCategory',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllBlogCategories.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllBlogCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.BlogCategory = action.payload;
         })
         .addCase(getAllBlogCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         })
         .addCase(AddBlogCategory.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(AddBlogCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.BlogCategory = action.payload;
         })
         .addCase(AddBlogCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default blogCategorySlice.reducer;
