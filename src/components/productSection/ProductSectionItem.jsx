import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addToCard } from "../../features/slices/cardSlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  color,
  size,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCard({
        id: id,
        img: img,
        amount: 1,
        text: text,
        size: defaultSize,
        color: defaultColor,
        price: price,
        totalPrice: totalPrice,
        name: name,
      })
    );
  };

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <>
      <Card
        sx={{
          position:"relative",
          maxWidth: 345,
          "&:hover": {
            boxShadow: 4,
            transform: "scale(1.02)",
            transition: "all 0.3s ease",
          },
        }}
      >
         <Box
          sx={{
            position: "absolute",
            top: "30px",
            right: "0px",
            color: "red",
            fontWeight: "bold",
            fontSize:'30px',
            transform:"rotate(-45deg)"
          }}
        >
          SALE%
        </Box>
        <CardMedia
          sx={{ height: 500 }}
          image={img}
          title={name}
          alt={`Image of ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
            Price: ${price.toFixed(2)}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Size: {defaultSize}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", display: "flex", gap: 1 }}
            >
              Color:{" "}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: defaultColor,
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
              ></Box>
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={handleAddToCart}
            title={`Add ${name} to cart`}
            sx={{ color: "black", border: "1px solid black" }}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductSectionItem;
