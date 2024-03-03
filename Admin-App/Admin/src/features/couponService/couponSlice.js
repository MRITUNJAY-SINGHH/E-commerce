import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import couponService from './couponService';

const initialState = {
   coupons: [],
   isLoading: false,
   error: null,
};

export const getAllCoupons = createAsyncThunk(
   'coupons/getAll',
   async (_, thunkAPI) => {
      try {
         const response = await couponService.getAllCoupons();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const addCoupon = createAsyncThunk(
   'coupons/add',
   async (coupon, thunkAPI) => {
      try {
         const response = await couponService.addCoupon(coupon);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const couponSlice = createSlice({
   name: 'coupons',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllCoupons.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllCoupons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.coupons = action.payload;
         })
         .addCase(getAllCoupons.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         })
         .addCase(addCoupon.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(addCoupon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.coupons.push(action.payload);
         })
         .addCase(addCoupon.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default couponSlice.reducer;
