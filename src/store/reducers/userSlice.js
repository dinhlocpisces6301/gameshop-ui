import { createSlice } from '@reduxjs/toolkit';

const name = 'user';

const initialState = {
  nickname: undefined,
  loaded: false,
  error: false,
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    getInfo: (state) => {},
    getInfoSuccess: (state, action) => {
      state.nickname = action.payload;
      state.loaded = true;
    },
  },
});

export const { getInfo, getInfoSuccess } = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user;
