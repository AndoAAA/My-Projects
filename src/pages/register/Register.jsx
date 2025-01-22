import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Register() {
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
          Create Your Account
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
            <TextField
              fullWidth
              type="email"
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="number"
              label="Phone Number"
              placeholder="Enter your phone number"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="text"
              label="Country"
              placeholder="Enter your country"
              variant="outlined"
              required
            />
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <>
                  I agree to the <b>Terms</b> and <b>Privacy Policy</b>
                </>
              }
            />
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
              Create Account
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
