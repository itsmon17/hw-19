import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthorization: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.isAuthorization = payload.isAuthorization;
    },
    logout: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice;
