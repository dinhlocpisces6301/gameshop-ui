import { createSlice } from '@reduxjs/toolkit';

const name = 'auth';

const initialState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  message: { id: '', content: '' },
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    login(state) {
      state.logging = true;
    },
    loginSuccess(state, action) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.error = false;
      state.message = { id: 200, content: 'Login successful' };
    },
    loginFailed(state, action) {
      state.logging = false;
      state.message = action.payload;
      state.error = true;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.message = { id: '', content: '' };
      state.error = null;
    },
  },
});

export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state) => state.auth;
