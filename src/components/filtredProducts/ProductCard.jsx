import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ id, name, text, price, colors, img }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          CardMedia
          component="img"
          height="200"
          image={img}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {text}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            {price} $
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {colors?.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: "1px solid #ddd",
                }}
              ></Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
