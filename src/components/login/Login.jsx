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
import React from "react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    image: "",
  });
  const [preview, setPreview] = React.useState(null);
  const [error, setError] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === "name" || name === "password") {
      setError("");
    }
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
      setPreview(URL.createObjectURL(file));
      setValues({ ...values, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.password) {
      setError("All fields are required.");
      return;
    }
    setIsLoading(true);
    dispatch(login({ values }))
      .then(() => {
        setIsLoading(false);
        setValues({ name: "", password: "", image: "" });
        setPreview(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Failed to log in. Please try again.");
      });
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
            color: "primary.main",
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
              type="name"
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
              helperText={error && "Please enter a valid password"}
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
              accept="image/*"
              onChange={handleImageChange}
              variant="outlined"
              disabled={isLoading}
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

          {error && (
            <Typography
              variant="body2"
              sx={{
                color: "red",
                textAlign: "center",
                mb: 2,
                marginBottom: "16px",
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
            disabled={isLoading}
            sx={{
              my: 2,
              width: "100%",
              height: "50px",
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
