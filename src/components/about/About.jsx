import { Box, Typography } from "@mui/material";
import React from "react";
import myPhoto from "../../assets/myphoto.jpg";

function About() {
  return (
    <Box
      id="about"
      sx={{
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, rgba(25, 55, 109, 1), #5663a7)",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          backgroundColor: "#0f2349",
          borderRadius: "12px",
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "20px",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            What I Can Do for You
          </Typography>
          <img
            src={myPhoto}
            alt="about icon"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
              border: "4px solid white",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </Box>
        <Box sx={{ flex: 2, maxWidth: "600px" }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                backgroundColor: "#fff",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontWeight: "600" }}
                >
                  🖥️ Create responsive, user-friendly designs that your
                  customers will love.
                </Typography>
              </Box>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                backgroundColor: "#fff",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontWeight: "600" }}
                >
                  🎨 Build clean, modern interfaces using React JS, Material UI,
                  and more.
                </Typography>
              </Box>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                backgroundColor: "#fff",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontWeight: "600" }}
                >
                  🚀 Deliver functional websites designed to support your
                  business goals.
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
