import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
        >
          Login
        </Typography>
        <form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Username"
              placeholder="Enter your username"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              required
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <a
                href="/#"
                style={{
                  textDecoration: "none",
                  color: "teal",
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </a>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "teal",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkcyan",
                },
              }}
            >
              Login
            </Button>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                textAlign: "center",
              }}
            >
              Don't have an account?{" "} 
              <a
                href="/register"
                style={{
                  textDecoration: "none",
                  color: "teal",
                  fontWeight: "bold",
                }}
              >
                Register
              </a>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
