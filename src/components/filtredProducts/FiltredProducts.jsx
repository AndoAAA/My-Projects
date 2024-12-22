import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filtredProducts || []);
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Box sx={{ display: "flex", gap: 3 }}>
            {genderButtons.map((item, index) => (
              <Box key={index}>
                <Button
                  variant="outlined"
                  sx={{ color: "black", border: "1px solid black" }}
                >
                  {item}
                </Button>
              </Box>
            ))}
            <Button
              variant="outlined"
              sx={{ color: "black", border: "1px solid black" }}
            >
              High Price
            </Button>
            <Box>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "black", border: "1px solid black" }}
              >
                Select a color
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {colorButtons.map((color, index) => (
                  <MenuItem onClick={handleClose} key={index}>
                    <Box
                      key={index}
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
          </Box>
        </Box>
        {products.length > 0 ? (
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
              <Grid2 item xs={12} sm={6} md={4} key={product.id}>
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
            No products available for "{type ? ` for "${type}"` : "."}".
          </Typography>
        )}
      </Container>
    </>
  );
};

export default FiltredProducts;
