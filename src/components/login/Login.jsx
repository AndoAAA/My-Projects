import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const providers = [{ id: "credentials", name: "Email and password" }];

export default function Login() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const signIn = async (provider, formData) => {
    const email = formData?.get("email");
    const password = formData?.get("password");

    dispatch(login({ name: email, password }));

    return new Promise((resolve) => {
      setTimeout(() => {
        const error = email && password ? null : "Invalid credentials.";
        resolve({
          type: "CredentialsSignin",
          error: error,
        });
      }, 300);
    });
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
        }}
      />
    </AppProvider>
  );
}
