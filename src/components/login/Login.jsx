import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    name: "",
    password: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (error) setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setError("Image size should not exceed 2MB.");
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setValues({ ...values, image: file });
      setError("");
    }
  };

  const validateForm = () => {
    if (!values.name || !values.password) {
      setError("All fields are required.");
      return false;
    }

    if (!/^[A-Za-z]{4,10}$/.test(values.name)) {
      setError("Username must be 4-10 alphabetic characters.");
      return false;
    }

    if (!/^[A-Za-z]{4,10}$/.test(values.password)) {
      setError("Password must be 4-10 characters, include a number, a letter.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    dispatch(login(values));
    setValues({ name: "", password: "", image: "" });
    setPreview(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    alert("You have successfully logged in");
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          padding: 4,
          borderRadius: 2,
          boxShadow: 4,
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
            fontSize: "2rem",
          }}
        >
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
            <TextField
              id="name"
              label="Name"
              name="name"
              size="small"
              value={values.name}
              onChange={handleChange}
              required
              variant="outlined"
              helperText="Only letters, 4-10 characters"
            />
          </FormControl>

          <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
            <TextField
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              size="small"
              value={values.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="inherit" />
                      ) : (
                        <Visibility fontSize="inherit" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              disabled={isLoading}
            />
          </FormControl>

          <FormControl sx={{ my: 2 }} fullWidth>
            <TextField
              type="file"
              name="image"
              inputRef={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              variant="outlined"
              helperText={error}
              InputProps={{
                sx: { padding: "8px", fontSize: 14, borderRadius: 1 },
              }}
            />
          </FormControl>

          {preview && !error && (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "100px",
                height: "100px",
                marginTop: "10px",
                borderRadius: "8px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          )}

          {error && !error.includes("Image") && (
            <Typography
              variant="body2"
              sx={{
                color: "red",
                textAlign: "center",
                mb: 2,
              }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="info"
            size="small"
            disableElevation
            disabled={isLoading || Boolean(error)}
            sx={{
              my: 2,
              width: "100%",
              height: "50px",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "gray", color: "white" },
            }}
          >
            {isLoading ? "Logging In..." : "Log In"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
