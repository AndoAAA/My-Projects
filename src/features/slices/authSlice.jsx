import { createSlice } from "@reduxjs/toolkit";

const validateCredentials = (name, password) => {
  const nameValidation = /^[A-Za-z]{4,10}$/i.test(name);
  const passwordValidation =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,20}$/.test(password);

  if (!nameValidation) {
    return { isValid: false, error: "Username must be 4-10 letters." };
  }
  if (!passwordValidation) {
    return {
      isValid: false,
      error:
        "Password must be 6-20 characters with at least one uppercase, one number, and one special character.",
    };
  }
  return { isValid: true, error: null };
};

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

      const { isValid, error } = validateCredentials(name, password);

      if (!isValid) {
        state.user = {
          ...state.user,
          name,
          authUser: false,
          error,
        };
      } else {
        const newUserState = {
          name,
          image: state.user.image || "",
          authUser: true,
          error: null,
        };

        state.user = newUserState;
        localStorage.setItem("authUser", JSON.stringify(newUserState));
      }
    },
    logout(state) {
      state.user = {
        name: "",
        image: "",
        authUser: false,
        error: null,
      };
      localStorage.clear();
    },
    clearError(state) {
      state.user.error = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
