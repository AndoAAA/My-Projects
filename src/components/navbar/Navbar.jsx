import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo/icon.png";
import "./Navbar.css";
import { Events, scrollSpy } from "react-scroll";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    try {
      scrollSpy.update();
    } catch (e) {
      console.warn("ScrollSpy error:", e);
    }

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

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
          offset={-80}
          className="logo-link"
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
          <Box component="nav" className="nav-links">
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
          },
        }}
      >
        <IconButton
          onClick={() => setOpenMenu(false)}
          sx={{ color: "white", alignSelf: "flex-end" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Box className="mobile-nav">
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
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-80}
    spy={true}
    activeClass="active"
    className="nav-link"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ to, label, closeMenu }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-80}
    activeClass="active"
    className="nav-link"
    onClick={() => closeMenu(false)}
  >
    {label}
  </Link>
);

export default Navbar;
