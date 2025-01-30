import { Box, Typography, Link } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        padding: "80px 5%",
        textAlign: "center",
        background: "linear-gradient(to right, rgba(25, 55, 109, 1), #5663a7)",
        color: "white",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Contact Me
      </Typography>
      <Typography variant="h6" sx={{ color: "white", marginBottom: "40px" }}>
        Feel free to reach out anytime!
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/** Contact Item */}
        {[
          {
            icon: <EmailIcon fontSize="large" />,
            label: "Email",
            link: "mailto:tarverdyan070@gmail.com",
          },
          {
            icon: <LinkedInIcon fontSize="large" />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/andranik-tarverdyan-04a356319/",
          },
          {
            icon: <GitHubIcon fontSize="large" />,
            label: "GitHub",
            link: "https://github.com/AndoAAA",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "15px 25px",
              borderRadius: "10px",
              background:
                "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)",
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              boxShadow: "0 6px 12px rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 24px rgba(255, 255, 255, 0.2)",
                background:
                  "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, #6f8bbd 100%)",
              },
            }}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;
