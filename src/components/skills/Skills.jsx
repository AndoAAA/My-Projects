import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid2,
} from "@mui/material";
import React from "react";
import { skills } from "../../utils/data";

function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        textAlign: "center",

        background: "linear-gradient(to right, rgba(25, 55, 109, 1), #5663a7)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        Skills
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                src={skill.imageSrc}
                alt={skill.title}
                sx={{
                  height: 130,
                  width: 130,
                  mx: "auto",
                  mb: 2,
                  borderColor: "primary.main",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "rotate(10deg) scale(1.1)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                >
                  {skill.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Skills;
