import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dotSlide,
  nextSlide,
  prevSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slider.value);

  const handleNextSlide = () => {
    dispatch(nextSlide((slideIndex + 1) % sliderData.length));
  };

  const handlePrevSlide = () => {
    dispatch(
      prevSlide((slideIndex - 1 + sliderData.length) % sliderData.length)
    );
  };

  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "850px",
          }}
        >
          {sliderData.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: index === slideIndex ? "block" : "none",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <img
                src={item.img}
                alt="slider-item"
                style={{
                  maxHeight: "850px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
            gap: "8px",
          }}
        >
          {sliderData.map((_, index) => (
            <Button
              key={index}
              onClick={() => dispatch(dotSlide(index))}
              aria-label={`Go to slide ${index + 1}`}
              sx={{
                width: "22px",
                height: "22px",
                minWidth: "12px",
                borderRadius: "50%",
                backgroundColor: index === slideIndex ? "black" : "gray",
                "&:hover": { backgroundColor: "darkgray" },
                padding: 1,
              }}
            ></Button>
          ))}
        </Box>
        <Button
          onClick={handlePrevSlide}
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            top: "50%",
            left: "60px",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          onClick={handleNextSlide}
          aria-label="Next slide"
          sx={{
            position: "absolute",
            top: "50%",
            right: "60px",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </>
  );
};

export default Slider;
