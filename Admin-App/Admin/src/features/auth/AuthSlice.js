import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from './AuthService';

export const loginUser = createAsyncThunk(
   'auth/login/admin',
   async (userData, thunkAPI) => {
      try {
         const response = await AuthService.login(userData);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
export const getAllOrders = createAsyncThunk(
   'auth/all-order',
   async (thunkAPI) => {
      try {
         const response = await AuthService.getAllOrders();
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const userItem = localStorage.getItem('user');
const localStorageUser = userItem ? JSON.parse(userItem) : null;

const initialState = {
   user: localStorageUser,
   orders: [],
   isAuthenticated: false,
   isLoading: false,
   error: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.message) {
               state.isAuthenticated = false;
               state.error = action.payload.message;
            } else {
               state.isAuthenticated = true;
               state.user = action.payload;
            }
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload.message;
         })
         .addCase(getAllOrders.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(getAllOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
         })
         .addCase(getAllOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
         });
   },
});

export default authSlice.reducer;
