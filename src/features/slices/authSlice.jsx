import { createSlice } from "@reduxjs/toolkit";

const validateUsername = (name) => /^[A-Za-z]{4,10}$/i.test(name);
const validatePassword = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(password);

const initialState = JSON.parse(localStorage.getItem("authUser")) || {
  name: "",
  image: "",
  authUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { name, password, image } = action.payload;
      const isNameValid = validateUsername(name);
      const isPasswordValid = validatePassword(password);

      if (!isNameValid) {
        state.error = "Username must be 4-10 alphabetic characters.";
      } else if (!isPasswordValid) {
        state.error =
          "Password must be 4-10 characters, include a number and a letter.";
      } else {
        state.name = name;
        state.image = image || "";
        state.authUser = true;
        state.error = null;
        localStorage.setItem("authUser", JSON.stringify(state));
      }
    },
    logout(state) {
      state.name = "";
      state.image = "";
      state.authUser = false;
      state.error = null;
      localStorage.removeItem("authUser");
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
