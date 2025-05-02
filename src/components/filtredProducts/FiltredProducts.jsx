import {
  Box,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  Grid,
  CircularProgress,
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
  sortByName,
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

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const buttonStyle = {
    color: "black",
    border: "1px solid black",
    "&:hover": { backgroundColor: "black", color: "white" },
    flex: "1",
    minWidth: "120px",
    fontSize: "0.9rem",
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
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          {type || "Products"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              flexGrow: 1,
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

            <Button
              onClick={() => dispatch(sortByName())}
              variant="outlined"
              sx={buttonStyle}
            >
              Sort by Name
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
                Select Color
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
                      setSelectedColor(color);
                      handleColorClose();
                    }}
                    key={index}
                    aria-label={`Filter by ${color}`}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: color,
                          border: "1px solid #aaa",
                        }}
                      />
                      <Typography sx={{ textTransform: "capitalize" }}>
                        {color}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Size Filter */}
            <Box>
              <Button
                id="size-button"
                disabled={type === "Bags" || type === "Shoes"}
                aria-controls={openSize ? "size-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openSize ? "true" : undefined}
                onClick={handleSizeClick}
                sx={buttonStyle}
              >
                Select Size
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
                      setSelectedSize(size);
                      handleSizeClose();
                    }}
                    key={index}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        textAlign: "center",
                        minWidth: "40px",
                      }}
                    >
                      {size}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Button
            onClick={() => {
              dispatch(filtredProducts(type));
              setSelectedColor(null);
              setSelectedSize(null);
            }}
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Clear Filter
          </Button>
        </Box>
      </Box>

      {(selectedColor || selectedSize) && (
        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "gray",
            textAlign: "center",
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          {(selectedColor || selectedSize) && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                marginTop: 2,
                flexWrap: "wrap",
                paddingBottom: "30px",
              }}
            >
              {products.length > 0 && (
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {products.length} products found
                </Typography>
              )}

              {selectedColor && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Color:
                  </Typography>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: selectedColor,
                      border: "1px solid #ccc",
                    }}
                  />
                </Box>
              )}

              {selectedSize && (
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Size: {selectedSize}
                </Typography>
              )}
            </Box>
          )}
        </Typography>
      )}

      {/* Loading Spinner */}
      {products.length === 0 && !error ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Error />
      ) : products.length > 0 ? (
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {products.map((product) => (
            <Grid
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
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          No products available.
        </Typography>
      )}
    </Container>
  );
};

export default FiltredProducts;
