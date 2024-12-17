import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }

    dispatch();
    //   addToCart({
    //     id: product.id,
    //     name: product.name,
    //     img: product.img,
    //     price: product.price,
    //     size: selectedSize,
    //     color: selectedColor,
    //   })
    alert("Product added to cart!");
  };
  return (
    <Container>
      {product ? (
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box
            component="img"
            src={product.img || "placeholder-image-url"}
            alt={product.name || "Unnamed Product"}
            sx={{
              width: "100%",
              maxHeight: { xs: "300px", sm: "600px", md: "850px" },
              objectFit: "contain",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              paddingLeft: 5,
            }}
          >
            <Typography variant="h4" sx={{ mt: 2 }}>
              {product.name || "Unnamed Product"}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Price:{" "}
              <Box component="span" sx={{ color: "green", fontWeight: "bold" }}>
                ${product.price}
              </Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 2 }}>
              {product.text || "No description available."}
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Pick a color</InputLabel>
              <Select value={selectedColor} onChange={handleColorChange}>
                {product.color?.map((color, index) => (
                  <MenuItem key={index} value={color}>
                    {color}
                  </MenuItem>
                )) || <MenuItem disabled>No colors available</MenuItem>}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Pick a size</InputLabel>
              <Select value={selectedSize} onChange={handleSizeChange}>
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
                  variant="contained"
                  color="primary"
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
    </Container>
  );
};

export default SingleProduct;
