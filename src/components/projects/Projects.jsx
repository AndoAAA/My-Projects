import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
} from "@mui/material";
import React from "react";
import { projects } from "../../utils/data";

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        padding: "80px 5%",
        textAlign: "center",
        background: "linear-gradient(to right, rgba(25, 55, 109, 1), #5663a7)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "40px",
          fontWeight: "bold",
          color: "#fff",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        My Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <Grid2 key={project.title} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                margin: "auto",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(255, 255, 255, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 24px rgba(255, 255, 255, 0.2)",
                },
                backgroundColor: "#0f2349",
                color: "#fff",
              }}
            >
              <CardMedia
                component="img"
                image={project.imageSrc}
                alt={project.title}
                sx={{
                  height: 200,
                  width: "100%",
                  objectFit: project.title.includes("Clinic")
                    ? "contain"
                    : "cover",
                  backgroundColor: "#fff",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {project.skills.map((skill) => (
                    <Typography
                      key={skill}
                      variant="caption"
                      sx={{
                        background:
                          "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, #6f8bbd 100%)",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                  }}
                >
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                      padding: "8px 16px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, #6f8bbd 100%)",
                        color: "white",
                      },
                    }}
                  >
                    Project
                  </Button>
                  <Button
                    variant="outlined"
                    href={project.source}
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                      padding: "8px 16px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, #6f8bbd 100%)",
                        color: "white",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
