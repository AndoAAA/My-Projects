import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  Box,
  Button,
  Typography,
  Snackbar,
  Alert,
  Stack,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function SingleProduct() {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];
  const sizes = ["SX", "S", "M", "L", "XL"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        selectedColor,
        selectedSize,
        quantity,
      })
    );
    setOpen(true);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <Box textAlign="center" mt={10}>
          <Typography variant="h4" color="error" fontWeight={600}>
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
        component="main"
        maxWidth="1200px"
        mx="auto"
        px={{ xs: 2, sm: 3, md: 4 }}
        py={{ xs: 4, md: 8 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={6}
      >
        {/* Image */}
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            boxShadow: 3,
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "#f9f9f9",
            minHeight: { xs: 300, md: 450 },
          }}
        >
          <img
            src={product.img}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        {/* Product Details */}
        <Box flex={1} display="flex" flexDirection="column" gap={3}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            letterSpacing={1}
            color="text.primary"
          >
            {product.title}
          </Typography>

          <Typography
            variant="h5"
            color="teal"
            fontWeight={700}
            sx={{ letterSpacing: 0.5 }}
          >
            ${product.price.toFixed(2)}
          </Typography>

          {product.stock <= 5 && (
            <Typography
              variant="body2"
              color="error"
              fontWeight={600}
              sx={{ mb: 2 }}
            >
              Hurry! Only {product.stock} left in stock.
            </Typography>
          )}

          <Divider />

          {/* Colors */}
          <Box>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Colors
            </Typography>
            <Stack direction="row" spacing={2}>
              {colors.map((color) => (
                <Box
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: color,
                    cursor: "pointer",
                    border:
                      selectedColor === color
                        ? "3px solid teal"
                        : "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      borderColor: "teal",
                    },
                  }}
                  role="button"
                  aria-label={`Select color ${color}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedColor(color);
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Sizes */}
          <Box>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Sizes
            </Typography>
            <Stack direction="row" spacing={2}>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  color="primary"
                  sx={{
                    borderRadius: 2,
                    minWidth: 48,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    borderColor: "teal",
                    color: selectedSize === size ? "white" : "teal",
                    bgcolor: selectedSize === size ? "teal" : "transparent",
                    "&:hover": {
                      bgcolor: "darkslategray",
                      color: "white",
                    },
                  }}
                >
                  {size}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Quantity */}
          <Box>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Quantity
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
                variant="outlined"
                sx={{
                  minWidth: 40,
                  height: 40,
                  color: "teal",
                  borderColor: "teal",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  "&:hover": {
                    bgcolor: "teal",
                    color: "white",
                  },
                }}
              >
                −
              </Button>
              <Typography variant="h6" minWidth={24} textAlign="center">
                {quantity}
              </Typography>
              <Button
                onClick={() => setQuantity((q) => q + 1)}
                variant="outlined"
                sx={{
                  minWidth: 40,
                  height: 40,
                  color: "teal",
                  borderColor: "teal",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  "&:hover": {
                    bgcolor: "teal",
                    color: "white",
                  },
                }}
              >
                +
              </Button>
            </Stack>
          </Box>

          {/* Add to Cart */}
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              fullWidth
              sx={{
                bgcolor: "teal",
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: 3,
                "&:hover": {
                  bgcolor: "darkslategray",
                },
                textTransform: "none",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {`${product.title} (Color: ${selectedColor}, Size: ${selectedSize}, Quantity: ${quantity}) added to cart!`}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}

export default SingleProduct;
