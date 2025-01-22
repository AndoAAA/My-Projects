import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function Products({ items, heading }) {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        {heading}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "center",
              padding: 0,
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                "& .action-buttons": {
                  opacity: 1,
                  visibility: "visible",
                },
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#e0e0e0",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <Box
                className="action-buttons"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 2,
                  opacity: 0,
                  visibility: "hidden",
                  transition: "opacity 0.3s ease, visibility 0.3s ease",
                  position: "absolute",
                  bottom: "60px",
                  left: 0,
                  right: 0,
                  padding: "0 10px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "teal",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "darkcyan",
                    },
                  }}
                >
                  <ShoppingCartIcon /> Add To Cart
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "teal",
                    color: "teal",
                    "&:hover": {
                      borderColor: "darkcyan",
                      color: "darkcyan",
                    },
                  }}
                >
                  <SearchIcon /> View Details
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "teal" }}>
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ margin: "8px 0", color: "teal" }}
              >
                ${item.price.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Products;
