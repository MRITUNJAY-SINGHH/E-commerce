import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import enquiresService from './enquiresService';

const initialState = {
   enquiry: [],
   isLoading: false,
   error: null,
};

export const getAllEnquires = createAsyncThunk(
   'auth/enquiry',
   async (thunkAPI) => {
      try {
         const response = await enquiresService.getAllEnquires();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const enquiresSlice = createSlice({
   name: 'enquiry',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllEnquires.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllEnquires.fulfilled, (state, action) => {
            state.isLoading = false;
            state.enquiry = action.payload;
         })
         .addCase(getAllEnquires.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default enquiresSlice.reducer;
