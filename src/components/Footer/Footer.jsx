import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: 3,
        textAlign: "center",
        mt:3
      }}
    >
      <Container>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            maxWidth: 150,
            margin: "0 auto",
            marginBottom: 2,
          }}
        />
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          &copy; {year} All Rights Reserved.
        </Typography>
        <Typography variant="body2">
          Made with www.tarverdyan-projects.net
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
