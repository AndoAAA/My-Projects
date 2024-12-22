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
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/slices/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const totalAmount = useSelector((state) => state.card.totalAmount);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;

  const handleOpen = () => setOpen(true);

  const renderBadge = (count) => (
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
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box component="img" src={logo} alt="Brand Logo" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Tooltip title="View Wish List">
            <IconButton aria-label="View Wish List">
              <FavoriteBorderIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="View Shopping Bag">
            <IconButton
              aria-label="View Shopping Bag"
              onClick={handleOpen}
              sx={{ color: "black" }}
            >
              {renderBadge(totalAmount)}
            </IconButton>
          </Tooltip>
          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Avatar
            src={image || "/path/to/default/avatar.png"}
            alt={name || "User"}
            sx={{ width: 32, height: 32 }}
          />
          <Tooltip
            onClick={() => dispatch(logout())}
            content="Sign Out"
            title={`Hi ${name || "User"}`}
          >
            <Typography>
              Hi {name ? name.charAt(0).toUpperCase() + name.slice(1) : "User"}
            </Typography>
          </Tooltip>
        </Box>
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
