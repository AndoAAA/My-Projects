import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "../../data";
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Container
      {...handlers}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: 500, sm: 600 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {/* Սլաքներ (մոբայլում չեն երևա) */}
      {!isMobile && (
        <>
          <Box
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 10,
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <ArrowBackIosNewOutlinedIcon fontSize="large" />
          </Box>

          <Box
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 10,
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <ArrowForwardIosOutlinedIcon fontSize="large" />
          </Box>
        </>
      )}

      {/* Կենտրոնացված սլայդ */}
      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {sliderItems.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: index === currentIndex ? "flex" : "none",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              p: 3,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: { xs: "80%", sm: "300px" },
                height: { xs: "250px", sm: "400px" },
                objectFit: "cover",
                borderRadius: 2,
                mx: "auto",
              }}
            />
            <Box
              sx={{
                width: { xs: "100%", sm: "50%" },
                mt: { xs: 3, sm: 0 },
                ml: { sm: 4 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
                textAlign: { xs: "center", sm: "left" },
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.desc}</Typography>
              <NavLink
                to="/products"
                style={{ alignSelf: isMobile ? "center" : "flex-start" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "teal",
                    color: "white",
                    px: 5,
                    py: 1.5,
                    fontSize: "1rem",
                    ":hover": {
                      backgroundColor: "#006d6d",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </NavLink>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Slider;
