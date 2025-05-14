import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
