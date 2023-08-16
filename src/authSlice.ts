import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('authenticated') ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
