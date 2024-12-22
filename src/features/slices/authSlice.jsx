import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      passsword:"",
      image: "",
      authUser: false,
      error: false,
    },
  },
  reducers: {
    login(state, action) {
      const { name, password } = action.payload || {};
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
        if (!name || !password) {
          state.user.error = "Username and password are required.";
          state.user.authUser = false;
          return;
        }
  
        if (!userValidation || !passwordValidation) {
          state.user.error = "Invalid username or password.";
          state.user.authUser = false;
          return;
        }
  
        state.user = { ...action.payload, authUser: true, error: null };
        sessionStorage.setItem("authUser", JSON.stringify(state.user));
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
        error: null,
      };
      sessionStorage.removeItem("authUser");
    },
    clearError(state) {
      state.user.error = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
