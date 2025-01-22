import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

function NewsLetter() {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Newsletter
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, color: "gray" }}>
        What's Fresh and New: Updates You Don’t Want to Miss
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Email"
          sx={{ backgroundColor: "white" }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "teal",
            color: "white",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "darkcyan",
            },
          }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default NewsLetter;
