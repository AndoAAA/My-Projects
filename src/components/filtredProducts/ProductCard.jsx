import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/slices/productSlice";

const ProductCard = ({ id, name, text, price, colors, img }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <>
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 345 },
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        <Link
          to={`/filtredProducts/${type}/` + id}
          aria-label={`View details of ${name}`}
          role="link"
        >
          <CardMedia
            CardMedia
            component="img"
            width="100%"
            height="100%"
            image={img}
            alt={name}
            sx={{ objectFit: "cover" }}
            onClick={() => dispatch(singleProduct(id))}
          />
        </Link>
        <CardContent>
          <Typography
            id={`product-title-${id}`}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            id={`product-desc-${id}`}
            variant="body2"
            sx={{ color: "text.secondary", mb: 1 }}
          >
            {text}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "green" }}
            >
              {price} $
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {colors?.map((color, index) => (
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
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
};

ProductCard.defaultProps = {
  img: "placeholder-image-url",
  name: "Unknown Product",
  text: "No description available.",
  price: "0.00",
  colors: [],
};

export default ProductCard;
