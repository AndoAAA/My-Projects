import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
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
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity }));
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
          {product.stock <= 5 && (
            <Typography variant="subtitle2" color="error" gutterBottom>
              Hurry! Only {product.stock} left in stock.
            </Typography>
          )}
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
                  }}
                  aria-label={`Select color ${color}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSelectedColor(color);
                  }}
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
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                      backgroundColor: "teal",
                    },
                    borderRadius: "12px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Box my={3}>
            <Typography variant="h4" gutterBottom>
              Quantity
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                variant="outlined"
                disabled={quantity === 1}
                sx={{
                  borderRadius: "8px",
                  border: "1px solid teal",
                  color: "teal",
                  "&:hover": {
                    backgroundColor: "teal",
                    color: "white",
                  },
                  padding: "5px 15px",
                  transition: "all 0.3s ease",
                }}
              >
                -
              </Button>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {quantity}
              </Typography>
              <Button
                onClick={() => setQuantity((prev) => prev + 1)}
                variant="outlined"
                sx={{
                  borderRadius: "8px",
                  border: "1px solid teal",
                  color: "teal",
                  "&:hover": {
                    backgroundColor: "teal",
                    color: "white",
                  },
                  padding: "5px 15px",
                  transition: "all 0.3s ease",
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(product)}
              sx={{
                background: "teal",
                "&:hover": {
                  background: "darkslategray",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                },
                color: "white",
                borderRadius: "12px",
                padding: "10px 20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>

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
