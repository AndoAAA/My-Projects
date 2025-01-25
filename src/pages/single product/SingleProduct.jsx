import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function SingleProduct() {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));
  const colors = ["red", "purple", "teal", "green", "black"];
  const sizes = ["SX", "S", "M", "L", "XL"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(
      `${product.title} (Color: ${selectedColor}, Size: ${selectedSize}) added to cart!`
    );
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <Box textAlign="center" mt={5}>
          <Typography variant="h4" color="error">
            Product not found!
          </Typography>
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        p={{ xs: 2, md: 4 }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Box
          flex={1}
          textAlign="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={product.img}
            alt={product.title}
            style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: 8 }}
          />
        </Box>
        <Box flex={1} px={2}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            {product.title}
          </Typography>
          <Typography variant="h5" color="teal" gutterBottom>
            {`$${product.price.toFixed(2)}`}
          </Typography>
          <Box my={3}>
            <Typography variant="h4" gutterBottom>
              Colors
            </Typography>
            <Box display="flex">
              {colors.map((color, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    backgroundColor: color,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    m: 2,
                    cursor: "pointer",
                    outline:
                      selectedColor === color ? `3px solid ${color}` : "none",
                    outlineOffset: selectedColor === color ? "4px" : "0px",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.2s ease",
                    },
                    "&:focus": {
                      outline: `2px dashed ${color}`,
                    },
                  }}
                  aria-label={`Select color ${color}`}
                  role="button"
                />
              ))}
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="h4" gutterBottom>
              Sizes
            </Typography>
            <Box display="flex" gap={2}>
              {sizes.map((size, index) => (
                <Button
                  key={index}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    border: "1px solid teal",
                    backgroundColor:
                      selectedSize === size ? "teal" : "transparent",
                    color: selectedSize === size ? "white" : "teal",
                    "&:hover": {
                      backgroundColor: "darkslategray",
                      color: "white",
                      "&:focus": {
                        outline: "2px solid teal",
                      },
                    },
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(product)}
              sx={{
                backgroundColor: "teal",
                "&:hover": {
                  backgroundColor: "darkslategray",
                },
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default SingleProduct;
