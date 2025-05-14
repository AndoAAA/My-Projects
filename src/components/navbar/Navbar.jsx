import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          {/* Home Icon */}
          <NavLink to="/">
            <IconButton
              sx={{
                color: "black",
                "&:hover": { color: "teal" },
              }}
              aria-label="Home"
            >
              <HomeIcon fontSize="medium" />
            </IconButton>
          </NavLink>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {user ? (
              // Displaying the user's name or avatar
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Welcome {user.username}
              </Typography>
            ) : (
              <>
                <NavLink to="/register" style={{ color: "black" }}>
                  <Button
                    color="inherit"
                    aria-label="Register"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { color: "teal" },
                    }}
                  >
                    Register
                  </Button>
                </NavLink>
                <NavLink to="/login" style={{ color: "black" }}>
                  <Button
                    color="inherit"
                    aria-label="Login"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { color: "teal" },
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
              </>
            )}

            {user && (
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { color: "teal" },
                }}
              >
                Logout
              </Button>
            )}

            <NavLink to="/cart">
              <IconButton aria-label="View cart" sx={{ color: "black" }}>
                <Badge
                  badgeContent={totalItems}
                  color="secondary"
                  sx={{
                    "& .MuiBadge-badge": {
                      top: 0,
                      right: 4,
                      backgroundColor: "teal",
                      color: "white",
                    },
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
