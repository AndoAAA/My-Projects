import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navbar = () => {
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
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 2,
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <img src={logo} alt="store" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            size="large"
            sx={{
              color: "black",
              fontSize: 18,
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Logout
          </Button>
          <FavoriteBorderIcon sx={{ fontSize: 28 }} />
          <Typography variant="h6">Wish List</Typography>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 28 }} />
          <Typography variant="h6">Shopping Bag</Typography>
        </Box>
      </Box>
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
        <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
          50% OFF
        </Typography>
        <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
          Free shipping and returns
        </Typography>
        <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
          Different payment methods
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
