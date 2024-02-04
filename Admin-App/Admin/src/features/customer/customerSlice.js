import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customerService from './customerService';

const initialState = {
   customers: [],
   isLoading: false,
   error: null,
};

export const getUsers = createAsyncThunk(
   'auth/user/allUser',
   async (thunkAPI) => {
      try {
         const response = await customerService.getUsers();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const customerSlice = createSlice({
   name: 'customer',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUsers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.customers = action.payload;
         })
         .addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default customerSlice.reducer;
