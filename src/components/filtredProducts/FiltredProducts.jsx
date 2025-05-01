import {
  Box,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  Grid2,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  filterByGender,
  sortByPrice,
  filterByColor,
  sortBySize,
  filtredProducts,
} from "../../features/slices/productSlice";
import Error from "../error/Error";

const FiltredProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filtredProducts || []);
  const error = useSelector((state) => state.products.error);
  const { type = "Products" } = useParams();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];

  const [anchorElColor, setAnchorElColor] = useState(null);
  const openColor = Boolean(anchorElColor);
  const handleColorClick = (event) => setAnchorElColor(event.currentTarget);
  const handleColorClose = () => setAnchorElColor(null);

  const [anchorElSize, setAnchorElSize] = useState(null);
  const openSize = Boolean(anchorElSize);
  const handleSizeClick = (event) => setAnchorElSize(event.currentTarget);
  const handleSizeClose = () => setAnchorElSize(null);

  const buttonStyle = {
    color: "black",
    border: "1px solid black",
    "&:hover": { backgroundColor: "black", color: "white" },
    flex: "1",
  };

  useEffect(() => {
    dispatch(filtredProducts(type));
  }, [dispatch, type]);

  return (
    <Container aria-label={`Products filtered by ${type}`}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "inherit",
            fontWeight: "600",
            textTransform: "capitalize",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          {type || "Products"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {genderButtons.map((gender) => (
              <Button
                key={gender}
                onClick={() => dispatch(filterByGender(gender))}
                variant="outlined"
                sx={buttonStyle}
              >
                {gender}
              </Button>
            ))}

            <Button
              onClick={() => dispatch(sortByPrice())}
              variant="outlined"
              sx={buttonStyle}
            >
              Sort by Price
            </Button>

            {/* Color Filter */}
            <Box>
              <Button
                id="color-button"
                aria-controls={openColor ? "color-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openColor ? "true" : undefined}
                onClick={handleColorClick}
                sx={buttonStyle}
              >
                Select a color
              </Button>
              <Menu
                id="color-menu"
                anchorEl={anchorElColor}
                open={openColor}
                onClose={handleColorClose}
                MenuListProps={{ "aria-labelledby": "color-button" }}
              >
                {colorButtons.map((color, index) => (
                  <MenuItem
                    onClick={() => {
                      dispatch(filterByColor(color));
                      handleColorClose();
                    }}
                    key={index}
                    aria-label={`Filter by ${color}`}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: "1px solid #ddd",
                        cursor: "pointer",
                      }}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Size Filter */}
            <Button
              id="size-button"
              disabled={type === "Bags" || type === "Shoes"}
              aria-controls={openSize ? "size-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openSize ? "true" : undefined}
              onClick={handleSizeClick}
              sx={buttonStyle}
            >
              Select a size
            </Button>
            <Menu
              id="size-menu"
              anchorEl={anchorElSize}
              open={openSize}
              onClose={handleSizeClose}
              MenuListProps={{ "aria-labelledby": "size-button" }}
            >
              {sizeButtons.map((size, index) => (
                <MenuItem
                  onClick={() => {
                    dispatch(sortBySize(size));
                    handleSizeClose();
                  }}
                  key={index}
                >
                  {size}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            onClick={() => dispatch(filtredProducts(type))}
            sx={buttonStyle}
          >
            Clear filter
          </Button>
        </Box>
      </Box>

      {/* Product Grid */}
      {error ? (
        <Error />
      ) : products.length > 0 ? (
        <Grid2
          container
          spacing={4}
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {products.map((product) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              sx={{
                "&:hover": {
                  boxShadow: 4,
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <ProductCard {...product} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          No products available.
        </Typography>
      )}
    </Container>
  );
};

export default FiltredProducts;
