import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Snackbar, Alert, CircularProgress } from "@mui/material";

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

const signIn = async (provider, formData, setError, setLoading) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const { isValid, error } = validateCredentials(email, password);
  if (!isValid) {
    setError(error);
    return { type: "CredentialsSignin", error };
  }

  setLoading(true);
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Signed in with provider: ${provider.name}`);
        resolve({ type: "CredentialsSignin", error: null });
      }, 300);
    });
  } finally {
    setLoading(false);
  }
};

export default function CredentialsSignInPage() {
  const theme = useTheme();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = async (provider, formData) => {
    await signIn(provider, formData, setError, setLoading);
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={handleSignIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
          form: { "aria-describedby": "signin-error" },
        }}
      />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        role="alert"
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
      {loading && <CircularProgress />}
    </AppProvider>
  );
}
