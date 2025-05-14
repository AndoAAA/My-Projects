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
import { login } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    const userCredentials = {
      username,
      email: "example@example.com",
      password,
    };

    dispatch(login(userCredentials));

    if (user) {
      navigate("/");
    } else {
      setError("Invalid username or password.");
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
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
                "&:hover": { backgroundColor: "darkcyan" },
              }}
            >
              Login
            </Button>
            <Typography
              variant="body2"
              sx={{ marginTop: 2, textAlign: "center" }}
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
