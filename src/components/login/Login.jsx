import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";

const providers = [{ id: "credentials", name: "Email and Password" }];

const validateCredentials = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordMinLength = 6;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Invalid email format." };
  }
  if (password.length < passwordMinLength) {
    return {
      isValid: false,
      error: `Password must be at least ${passwordMinLength} characters long.`,
    };
  }
  return { isValid: true };
};

const signIn = async (provider, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const { isValid, error } = validateCredentials(email, password);
  if (!isValid) {
    alert(`Error: ${error}`);
    return { type: "CredentialsSignin", error };
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Signed in with provider: ${provider.name}`);
      resolve({ type: "CredentialsSignin", error: null });
    }, 300);
  });
};

export default function CredentialsSignInPage() {
  const theme = useTheme();

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
    </AppProvider>
  );
}
