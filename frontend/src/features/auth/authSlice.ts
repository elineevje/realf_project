import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { error } from 'console';

export type User = {
    id: number,
    name: string,
    email: string
} 

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials:any, thunkAPI) => {
  const response = await axios.post('http://localhost:8000/api/login', credentials);
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (credentials:any, thunkAPI) => {
    const response = await axios.post('http://localhost:8000/api/register', credentials);
    return response.data;
  });

  export const userLogout = createAsyncThunk<void, void>(
    'auth/logoutUser',
    async (_, thunkAPI) => {
      await axios.post('http://localhost:8000/api/logout', null, {
        withCredentials: true,
      });
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      isAuthenticated: false,
      status: 'idle',
    },
    reducers: {
      logoutUser: (state) => {
        state.user = null;
        state.isAuthenticated = false;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload.user;
          state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'failed';
          state.isAuthenticated = false;
        });
        builder
        .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
        })
        builder
        .addCase(userLogout.fulfilled, (state) => {
            state.status = 'succeeded';
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(userLogout.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default authSlice.reducer;