import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import payment from "../../assets/payment.png";
import { footerLinks } from "../../data";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 4,
        backgroundColor: "#f5f5f5",
        gap: 4,
      }}
    >
      {/* Footer Left */}
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Tarverdyan Projects
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", marginBottom: 2 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              backgroundColor: "#3b5999",
              borderRadius: "50%",
              padding: 1,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookIcon />
          </Box>
          <Box
            sx={{
              backgroundColor: "#e44059",
              borderRadius: "50%",
              padding: 1,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstagramIcon />
          </Box>
          <Box
            sx={{
              backgroundColor: "#55acee",
              borderRadius: "50%",
              padding: 1,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TwitterIcon />
          </Box>
          <Box
            sx={{
              backgroundColor: "#e60023",
              borderRadius: "50%",
              padding: 1,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PinterestIcon />
          </Box>
        </Box>
      </Box>

      {/* Footer Center */}
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Useful Links
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
            gap: 1,
          }}
        >
          {footerLinks.map((link) => (
            <Typography
              key={link.id}
              component="li"
              sx={{
                color: "gray",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {link.title}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Footer Right */}
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Contact
        </Typography>
        <Box sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ marginRight: 1, color: "teal" }} />
          <Typography variant="body2">123 Street, Yerevan, Armenia</Typography>
        </Box>
        <Box sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ marginRight: 1, color: "teal" }} />
          <Typography variant="body2">+374-98-69-27-77</Typography>
        </Box>
        <Box sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}>
          <EmailIcon sx={{ marginRight: 1, color: "teal" }} />
          <Typography variant="body2">tarverdyan070@gmail.com</Typography>
        </Box>
        <img
          src={payment}
          alt="payment methods"
          style={{ width: "150px", marginTop: 10 }}
        />
      </Box>
    </Box>
  );
}

export default Footer;
