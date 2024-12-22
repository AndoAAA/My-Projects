import React from "react";
import Alert from "@mui/material/Alert";
import { Stack } from "@mui/material";

const Error = () => {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="error">
          Sorry no products match your filter search ... Clear the filter and
          try again 😀.
        </Alert>
      </Stack>
    </>
  );
};

export default Error;
