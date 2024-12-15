import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filtredProducts);
  console.log("prducts", products);

  const { type } = useParams();
  console.log("params", type);

  return (
    <>
      <Container>
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "inherit",
              fontWeight: "600",
              textTransform: "capitalize",
              marginBottom: 2,
            }}
          >
            {type || "Products"}
          </Typography>
        </Box>
        {products.length > 0 ? (
          <Grid2 container spacing={4}>
            {products.map((product) => (
              <Grid2 item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  price={product.price}
                  img={product.img}
                  colors={product.colors}
                />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            No products available for "{type}".
          </Typography>
        )}
      </Container>
    </>
  );
}

export default FiltredProducts;
