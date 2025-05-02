import React from "react";
import { storeData } from "../../assets/data/dummyData";
import { Box, Container, Typography } from "@mui/material";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "black",
          maxWidth: "55%",
          marginX: "auto",
          textAlign: "center",
          padding: 2,
          borderRadius: 1,
          marginBottom: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "red",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Summer T-Shirt Sale 30%
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {storeData.slice(0, 6).map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: {
                xs: "0 0 100%",
                sm: "0 0 48%",
                md: "0 0 30%",
              },
              boxSizing: "border-box",
            }}
          >
            <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              text={product.text}
              color={product.color}
              size={product.size}
              price={product.price}
              totalPrice={product.totalPrice}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductSection;
