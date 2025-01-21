import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { categories } from "../../data";

function Categories() {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {categories.map((item) => (
        <Box
          key={item.id}
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "48%", md: "30%" },
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
                width:"100%",
                height:"100%",
              position: "absolute",
              top: 0,
              left: 0,
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              color: "white",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: 1,
                backgroundColor: "teal",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkcyan",
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Categories;
