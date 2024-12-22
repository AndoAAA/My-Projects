import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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

  // State for color menu
  const [anchorElColor, setAnchorElColor] = React.useState(null);
  const openColor = Boolean(anchorElColor);
  const handleColorClick = (event) => setAnchorElColor(event.currentTarget);
  const handleColorClose = () => setAnchorElColor(null);

  // State for size menu
  const [anchorElSize, setAnchorElSize] = React.useState(null);
  const openSize = Boolean(anchorElSize);
  const handleSizeClick = (event) => setAnchorElSize(event.currentTarget);
  const handleSizeClose = () => setAnchorElSize(null);

  return (
    <>
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
                <Box key={gender}>
                  <Button
                    onClick={() => dispatch(filterByGender(gender))}
                    variant="outlined"
                    sx={{
                      color: "black",
                      border: "1px solid black",
                      "&:hover": { backgroundColor: "black", color: "white" },
                      flex: "1",
                    }}
                  >
                    {gender}
                  </Button>
                </Box>
              ))}
              <Button
                onClick={() => dispatch(sortByPrice())}
                variant="outlined"
                sx={{
                  color: "black",
                  border: "1px solid black",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
              >
                High Price
              </Button>
              <Box>
                <Button
                  id="color-button"
                  aria-controls={openColor ? "color-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openColor ? "true" : undefined}
                  onClick={handleColorClick}
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    "&:hover": { backgroundColor: "black", color: "white" },
                  }}
                >
                  Select a color
                </Button>
                <Menu
                  id="color-menu"
                  anchorEl={anchorElColor}
                  open={openColor}
                  onClose={handleColorClose}
                  MenuListProps={{
                    "aria-labelledby": "color-button",
                  }}
                >
                  {colorButtons.map((color, index) => (
                    <MenuItem
                      onClick={() => {
                        dispatch(filterByColor(color));
                        handleColorClose();
                      }}
                      key={index}
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
                      ></Box>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Button
                id="size-button"
                disabled={type === "Bags" || type === "Shoes"}
                aria-controls={openSize ? "size-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openSize ? "true" : undefined}
                onClick={handleSizeClick}
                sx={{
                  color: "black",
                  border: "1px solid black",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
              >
                Select a size
              </Button>
              <Menu
                id="size-menu"
                anchorEl={anchorElSize}
                open={openSize}
                onClose={handleSizeClose}
                MenuListProps={{
                  "aria-labelledby": "size-button",
                }}
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
              sx={{
                color: "black",
                border: "1px solid black",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              Clear filter
            </Button>
          </Box>
        </Box>
        {error ? (
          <Error />
        ) : products.length > 0 ? (
          <Grid2
            container
            spacing={4}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
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
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  price={product.price}
                  img={product.img}
                  colors={product.color}
                />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            No products available.
          </Typography>
        )}
      </Container>
    </>
  );
};

export default FiltredProducts;
