import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from './uploadService';

const initialState = {
   upload: [],
   isLoading: false,
   error: null,
};

export const uploadImages = createAsyncThunk(
   'upload/images',
   async (file, thunkAPI) => {
      try {
         const formData = new FormData();
         formData.append('images', file);
         const response = await uploadService.uploadImages(formData);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const deleteImages = createAsyncThunk(
   'delete/images',
   async (public_id, thunkAPI) => {
      try {
         const response = await uploadService.deleteImages(public_id);
         return await response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const uploadSlice = createSlice({
   name: 'upload',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(uploadImages.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(uploadImages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.upload = [...state.upload, action.payload];
         })
         .addCase(uploadImages.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         })
         .addCase(deleteImages.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(deleteImages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.upload = state.upload.filter(
               (image) => image.public_id !== action.meta.arg
            );
         })
         .addCase(deleteImages.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default uploadSlice.reducer;
