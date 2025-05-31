import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo/icon.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "rgba(25, 55, 109, 1)", boxShadow: 0, padding: "10px 0" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
              height: { xs: "40px", sm: "60px", md: "80px" },
              maxWidth: "120px",
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
            sx={{
              color: theme.palette.common.white,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)", color: "#00c8ff" },
            }}
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
        transitionDuration={400}
        sx={{
          ".MuiDrawer-paper": {
            width: 250,
            padding: "20px",
            backgroundColor: "rgba(25, 55, 109, 1)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: openMenu ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s ease-in-out",
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


const NavItem = ({ to, label }) => (
  <Link to={to} smooth={true} duration={500} style={navLinkStyle}>
    {label}
  </Link>
);


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
  position: "relative",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#00c8ff",
  },
  "&::after": {
    content: "''",
    display: "block",
    width: "100%",
    height: "2px",
    background: "#00c8ff",
    position: "absolute",
    bottom: "-5px",
    left: "0",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
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
