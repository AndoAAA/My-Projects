import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Tooltip,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCard } from "../../features/slices/cardSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setErrorSnackbar(true);
      return;
    }

    dispatch(
      addToCard({
        id: product.id,
        name: product.name,
        img: product.img,
        text: product.text,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        amount: 1,
      })
    );

    setOpenSnackbar(true);
  };

  return (
    <Container sx={{ py: 4 }}>
      {product ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            gap: 5,
          }}
        >
          <Box
            component="img"
            src={product.img}
            alt={product.name}
            sx={{
              width: "100%",
              maxHeight: { xs: "300px", sm: "600px", md: "850px" },
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              px: { xs: 0, md: 2 },
            }}
          >
            <Typography variant="h4">
              {product.name || "Unnamed Product"}
            </Typography>

            <Typography variant="h6">
              Price:{" "}
              <Box component="span" sx={{ color: "green", fontWeight: "bold" }}>
                ${product.price}
              </Box>
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {product.text || "No description available."}
            </Typography>

            <FormControl fullWidth>
              <InputLabel>Pick a color</InputLabel>
              <Select
                value={selectedColor}
                onChange={handleColorChange}
                label="Pick a color"
              >
                {product.color?.map((color, index) => (
                  <MenuItem key={index} value={color}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: color,
                          border: "1px solid #ccc",
                        }}
                      />
                      <Typography variant="body2">{color}</Typography>
                    </Box>
                  </MenuItem>
                )) || <MenuItem disabled>No colors available</MenuItem>}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Pick a size</InputLabel>
              <Select
                value={selectedSize}
                onChange={handleSizeChange}
                label="Pick a size"
              >
                {product.size?.map((size, index) => (
                  <MenuItem key={index} value={size}>
                    {size}
                  </MenuItem>
                )) || <MenuItem disabled>No sizes available</MenuItem>}
              </Select>
            </FormControl>

            <Tooltip title="Item will not be added if it already exists in the cart.">
              <span>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid black",
                    color: "black",
                    "&:hover": { backgroundColor: "black", color: "white" },
                  }}
                  disabled={!selectedSize || !selectedColor}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Box>
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
          Product not found.{" "}
          <Button
            component={Link}
            to="/products"
            variant="outlined"
            color="secondary"
          >
            Go Back to Products
          </Button>
        </Typography>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product added to cart!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please select size and color before adding to cart.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SingleProduct;
