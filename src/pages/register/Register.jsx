import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password || !email || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userDetails = { username, email, password };

    dispatch(register(userDetails));

    if (user) {
      navigate("/");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "gray",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

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
        <form onSubmit={handleRegister}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {error && (
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center", marginBottom: 2 }}
              >
                {error}
              </Typography>
            )}
            <TextField
              fullWidth
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              variant="outlined"
              required
            />
            <FormControlLabel
              control={<Checkbox required />}
              label={
                <>
                  <b>I agree to the Terms</b> and <b>Privacy Policy</b>
                </>
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "teal",
                color: "white",
                "&:hover": { backgroundColor: "darkcyan" },
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
