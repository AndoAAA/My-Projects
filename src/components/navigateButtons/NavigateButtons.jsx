import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filtredProducts } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          paddingY: 2,
        }}
      >
        {buttons.map((button) => (
          <Box key={button}>
            <Button
              component={Link}
              to={`/filtredProducts/${button}`}
              variant="outlined"
              sx={{
                textTransform: "none",
                borderColor: "black",
                color: "black",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
              onClick={() => dispatch(filtredProducts(button))}
            >
              {button}
            </Button>
          </Box>
        ))}
      </Container>
      <Box
        sx={{
          backgroundColor: "black",
          maxWidth: "55%",
          marginX: "auto",
          textAlign: "center",
          padding: 2,
          borderRadius: 1,
          marginBottom: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "red",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          SALES UP TO 50%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <img
          src={clothes}
          alt="clothes"
          style={{
            height: "auto",
            width: "70%",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        />
      </Box>
    </>
  );
};

export default NavigateButtons;
