import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import colorService from './colorService';

const initialState = {
   color: [],
   isLoading: false,
   error: null,
};

export const getAllColors = createAsyncThunk('auth/color', async (thunkAPI) => {
   try {
      const response = await colorService.getAllColors();
      return response;
   } catch (error) {
      return thunkAPI.rejectWithValue(error);
   }
});
export const AddColors = createAsyncThunk(
   'add/color',
   async (color, thunkAPI) => {
      try {
         const response = await colorService.AddColors(color);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const colorSlice = createSlice({
   name: 'color',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllColors.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllColors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.color = action.payload;
         })
         .addCase(getAllColors.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         })
         .addCase(AddColors.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(AddColors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.color = action.payload;
         })
         .addCase(AddColors.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default colorSlice.reducer;
