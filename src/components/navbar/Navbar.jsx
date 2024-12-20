import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Card from "../card/Card";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const totalAmount = useSelector((state) => state.card.totalAmount);

  const handleOpen = () => {
    setOpen(true);
  };

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
        <img
          src={logo}
          alt="Store Logo"
          style={{ maxHeight: 50 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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

          <Tooltip title="View Wish List">
            <IconButton aria-label="View Wish List">
              <FavoriteBorderIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
          <Typography variant="h6">Wish List</Typography>
          <Tooltip title="View Shopping Bag">
            <Box sx={{ position: "relative" }}>
              <IconButton
                aria-label="View Shopping Bag"
                onClick={handleOpen}
                sx={{ color: "black" }}
              >
                <ShoppingBagOutlinedIcon sx={{ fontSize: 28 }} />
              </IconButton>
              {totalAmount > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "0.25rem",
                    fontSize: "0.75rem",
                    minWidth: 20,
                    textAlign: "center",
                  }}
                >
                  {totalAmount}
                </Box>
              )}
            </Box>
          </Tooltip>
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
      <Card open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
