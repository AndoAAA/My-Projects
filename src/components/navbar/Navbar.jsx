import { AppBar, Box, Toolbar, IconButton, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import logo from "../../assets/logo/my-logo.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(25, 55, 109, 1)",
        boxShadow: 0,
        padding: "10px 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          px: 3,
        }}
      >
        {/* Logo / Brand */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              height: { xs: "40px", sm: "50px", md: "120px" },
              width: "auto",
              maxWidth: "150px",
              objectFit: "contain",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
        </Link>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            onClick={() => setOpenMenu(!openMenu)}
            sx={{ color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* Navigation Links (Desktop) */}
        {!isMobile && (
          <Box component="nav" sx={navLinksStyle}>
            <NavItem to="about" label="About" />
            <NavItem to="skills" label="Skills" />
            <NavItem to="projects" label="Projects" />
            <NavItem to="contact" label="Contacts" />
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        sx={{
          ".MuiDrawer-paper": {
            width: 250,
            padding: "20px",
            backgroundColor: "rgba(25, 55, 109, 1)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <IconButton
          onClick={() => setOpenMenu(false)}
          sx={{ color: "white", alignSelf: "flex-end" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            cursor: "pointer",
          }}
        >
          <MobileNavItem to="about" label="About" closeMenu={setOpenMenu} />
          <MobileNavItem to="skills" label="Skills" closeMenu={setOpenMenu} />
          <MobileNavItem
            to="projects"
            label="Projects"
            closeMenu={setOpenMenu}
          />
          <MobileNavItem
            to="contact"
            label="Contacts"
            closeMenu={setOpenMenu}
          />
        </Box>
      </Drawer>
    </AppBar>
  );
}

// Reusable Nav Item (Desktop)
const NavItem = ({ to, label }) => (
  <Link to={to} smooth={true} duration={500} style={navLinkStyle}>
    {label}
  </Link>
);

// Reusable Nav Item (Mobile)
const MobileNavItem = ({ to, label, closeMenu }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    style={mobileNavLinkStyle}
    onClick={() => closeMenu(false)}
  >
    {label}
  </Link>
);

// Styles
const navLinksStyle = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const navLinkStyle = {
  cursor: "pointer",
  color: "#fff",
  fontSize: "1.1rem",
  fontWeight: "600",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": { color: "#00c8ff" },
};

const mobileNavLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "600",
  padding: "10px 0",
  borderBottom: "1px solid #ccc",
  transition: "color 0.3s ease",
  "&:hover": { color: "#00c8ff" },
};

export default Navbar;
