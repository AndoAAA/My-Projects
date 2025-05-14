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
        {/* Image */}
        <Box flex={1} textAlign="center">
          <img
            src={product.img}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              borderRadius: 8,
            }}
          />
        </Box>

        {/* Details */}
        <Box flex={1} px={2}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {product.title}
          </Typography>

          <Typography variant="h6" color="teal" gutterBottom>
            ${product.price.toFixed(2)}
          </Typography>

          {product.stock <= 5 && (
            <Typography variant="subtitle2" color="error">
              Hurry! Only {product.stock} left in stock.
            </Typography>
          )}

          {/* Colors */}
          <Box my={3}>
            <Typography variant="h6">Colors</Typography>
            <Box display="flex" gap={1} mt={1}>
              {colors.map((color) => (
                <Box
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    backgroundColor: color,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    cursor: "pointer",
                    outline:
                      selectedColor === color
                        ? `3px solid ${color}`
                        : "none",
                    outlineOffset: "3px",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "transform 0.2s ease",
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
            </Box>
          </Box>

          {/* Sizes */}
          <Box my={3}>
            <Typography variant="h6">Sizes</Typography>
            <Box display="flex" gap={2} mt={1}>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant={
                    selectedSize === size ? "contained" : "outlined"
                  }
                  sx={{
                    borderColor: "teal",
                    color:
                      selectedSize === size ? "white" : "teal",
                    backgroundColor:
                      selectedSize === size ? "teal" : "transparent",
                    "&:hover": {
                      backgroundColor: "darkslategray",
                      color: "white",
                    },
                    borderRadius: "12px",
                    textTransform: "none",
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Quantity */}
          <Box my={3}>
            <Typography variant="h6">Quantity</Typography>
            <Box display="flex" alignItems="center" gap={2} mt={1}>
              <Button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
                variant="outlined"
                sx={{
                  minWidth: 36,
                  color: "teal",
                  borderColor: "teal",
                  "&:hover": {
                    backgroundColor: "teal",
                    color: "white",
                  },
                }}
              >
                -
              </Button>
              <Typography>{quantity}</Typography>
              <Button
                onClick={() => setQuantity((q) => q + 1)}
                variant="outlined"
                sx={{
                  minWidth: 36,
                  color: "teal",
                  borderColor: "teal",
                  "&:hover": {
                    backgroundColor: "teal",
                    color: "white",
                  },
                }}
              >
                +
              </Button>
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Box mt={4}>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{
                backgroundColor: "teal",
                color: "white",
                padding: "10px 24px",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "darkslategray",
                },
                textTransform: "capitalize",
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
