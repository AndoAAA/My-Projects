import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "../../data";
import { NavLink } from "react-router-dom";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        padding: 2,
        overflow: "hidden",
      }}
    >
      <Box onClick={handlePrev} sx={{ cursor: "pointer", zIndex: 1 }}>
        <ArrowBackIosNewOutlinedIcon fontSize="large" />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          transition: "transform 0.5s ease",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {sliderItems.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              display: index === currentIndex ? "flex" : "none",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                width: "50%",
                marginTop: { xs: 2, sm: 0 },
                marginLeft: { sm: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ margin: "8px 0" }}>
                {item.desc}
              </Typography>
              <NavLink to="/products">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    border: "none",
                    padding: "10px 60px",
                    fontSize: "20px",
                    backgroundColor: "teal",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </Button>
              </NavLink>
            </Box>
          </Box>
        ))}
      </Box>
      <Box onClick={handleNext} sx={{ cursor: "pointer", zIndex: 1 }}>
        <ArrowForwardIosOutlinedIcon fontSize="large" />
      </Box>
    </Container>
  );
}

export default Slider;
