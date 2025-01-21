import React from "react";
import { Box, Typography } from "@mui/material";

function Announcement() {
  const commonStyles = {
    fontSize: "14px",
    fontWeight: 600,
    color: "white",
    letterSpacing: "1.5px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        height:"40px",
        backgroundColor: "teal",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0 60px",
      }}
    >
      <Typography variant="body1" sx={commonStyles}>
        Free Delivery
      </Typography>
      <Typography variant="body1" sx={commonStyles}>
        Welcome offer 15% off
      </Typography>
      <Typography variant="body1" sx={commonStyles}>
        Free Returns
      </Typography>
    </Box>
  );
}

export default Announcement;
