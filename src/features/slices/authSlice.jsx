import { createSlice } from "@reduxjs/toolkit";

const validateUsername = (name) => /^[A-Za-z]{4,10}$/i.test(name);

const validatePassword = (password) =>
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
    password
  );

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("authUser")) || {
      name: "",
      image: "",
      authUser: false,
      error: null,
    },
  },
  reducers: {
    login(state, action) {
      const { name, password } = action.payload;
      const isNameValid = validateUsername(name);
      const isPasswordValid = validatePassword(password);

      if (!isNameValid) {
        state.user.error = "Username must be 4-10 alphabetic characters.";
      } else if (!isPasswordValid) {
        state.user.error =
          "Password must be 4-10 characters, include a number, a letter, and a special character.";
      } else {
        state.user = { ...action.payload, authUser: true, error: null };
        localStorage.setItem("authUser", JSON.stringify(state.user));
      }
    },
    logout(state) {
      state.user = {
        name: "",
        image: "",
        authUser: false,
        error: null,
      };
      localStorage.removeItem("reduxState");
    },
    clearError(state) {
      state.user.error = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
