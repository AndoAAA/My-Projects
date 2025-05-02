import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Container,
  Avatar,
  Badge,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import logo from "../../assets/images/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const totalAmount = useSelector((state) => state.card.totalAmount);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { name, image } = user || {};
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const renderBadge = useMemo(
    () => (count) => (
      <Badge
        badgeContent={count}
        color="error"
        overlap="circular"
        sx={{
          "& .MuiBadge-badge": {
            minWidth: 20,
            height: 20,
            fontSize: "0.75rem",
          },
        }}
      >
        <ShoppingBagOutlinedIcon sx={{ fontSize: 28 }} />
      </Badge>
    ),
    []
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Welcome ALL
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <NavLink to="/">
          <Box
            component="img"
            src={logo}
            alt="Brand Logo"
            sx={{ width: { xs: "100px", sm: "150px" } }}
          />
        </NavLink>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Tooltip title="View Shopping Bag">
            <IconButton
              aria-label="View Shopping Bag"
              onClick={handleOpen}
              sx={{
                color: "black",
                "&:hover": { color: "white", backgroundColor: "black" },
                transition: "color 0.3s, background-color 0.3s",
              }}
            >
              {renderBadge(totalAmount)}
            </IconButton>
          </Tooltip>

          {user ? (
            <>
              <Tooltip title={name}>
                <Avatar
                  src={typeof image === "string" ? image : image?.url || ""}
                  alt="avatar"
                  sx={{ width: 32, height: 32, cursor: "pointer" }}
                  onClick={handleMenu}
                />
              </Tooltip>
              <Typography
                sx={{
                  marginLeft: 1,
                  color: "black",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Hi {name}
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </>
          ) : (
            <NavLink to="/login">
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  borderColor: "black",
                  color: "black",
                  "&:hover": { backgroundColor: "black", color: "white" },
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                Log in
              </Button>
            </NavLink>
          )}
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "black",
          padding: 2,
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {[
          "50% OFF",
          "Free shipping and returns",
          "Different payment methods",
        ].map((text, index) => (
          <Typography
            key={index}
            variant="h6"
            sx={{ color: "white", textAlign: "center" }}
          >
            {text}
          </Typography>
        ))}
      </Box>

      <Card open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
