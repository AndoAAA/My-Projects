import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[200], 0.15),
  "&:hover, &:focus-within": {
    backgroundColor: alpha(theme.palette.grey[200], 0.25),
    boxShadow: "0 0 4px rgba(0,0,0,0.2)",
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                mr: 2,
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": { color: "teal" },
              }}
            >
              EN
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

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
            <NavLink
              to="/register"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "teal" : "black",
              })}
            >
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
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "teal" : "black",
              })}
            >
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
