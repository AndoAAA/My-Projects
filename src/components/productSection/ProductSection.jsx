import React from "react";
import { storeData } from "../../assets/data/dummyData";
import { Box, Container, Grid2, Typography } from "@mui/material";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <>
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
        <Grid2 container spacing={3} sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {storeData.slice(0, 6).map((product, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
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
          </Grid2>
        ))}
      </Grid2>
      </Container>
    </>
  );
};

export default ProductSection;
