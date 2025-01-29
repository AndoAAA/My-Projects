import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(25, 55, 109, 1)",
        boxShadow: 0,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo / Brand */}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            Portfolio
          </Typography>
        </Link>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            sx={{ color: "white" }}
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Navigation Links (Desktop) */}
        {!isMobile && (
          <Box component="nav" sx={{ display: "flex", gap: "30px",}}>
            <a href="#about" style={navLinkStyle}>
              About
            </a>
            <a href="#projects" style={navLinkStyle}>
              Projects
            </a>
            <a href="#contacts" style={navLinkStyle}>
              Contacts
            </a>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu Drawer with Animation */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        sx={{
          ".MuiDrawer-paper": {
            width: 250,
            padding: "20px",
            backgroundColor: "rgba(25, 55, 109, 1)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: openMenu ? "translateX(0)" : "translateX(100%)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <a
            href="#about"
            style={mobileNavLinkStyle}
            onClick={() => setOpenMenu(false)}
            
          >
            About
          </a>
          <a
            href="#projects"
            style={mobileNavLinkStyle}
            onClick={() => setOpenMenu(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            style={mobileNavLinkStyle}
            onClick={() => setOpenMenu(false)}
          >
            Contacts
          </a>
        </Box>
      </Drawer>
    </AppBar>
  );
}

// Desktop Link Styles
const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.1rem",
  fontWeight: "500",
  transition: "color 0.3s ease, transform 0.3s ease",
  position: "relative",
  paddingBottom: "2px",
  "&:hover": {
    color: "#00c8ff",
    transform: "scale(1.05)",
  },
};

// Mobile Nav Link Styles
const mobileNavLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "600",
  padding: "10px 0",
  borderBottom: "1px solid #ccc",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: "#00c8ff",
    transform: "scale(1.05)",
  },
};

export default Navbar;
