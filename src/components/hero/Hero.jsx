import { Box, Typography, Button } from "@mui/material";
import React from "react";
import myphoto from "../../assets/myphoto.jpg";
function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        padding: "0 20px",
        background:
          "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "20px", md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Hi, I'm Andranik
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "300",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          I'm a Front-end Developer
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "25px",
            background:
              "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)",
          }}
          component="a"
          href="/assets/cv/cv.pdf"
          download="Andranik_Tarverdyan_CV.pdf"
        >
          Download CV
        </Button>
      </Box>

      <Box
        sx={{
          width: { xs: "80%", md: "40%" },
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={myphoto}
          alt="profile"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
