import { Paper, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "450px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        Page Not Found ! Sorry!
        <br />
        :(((
      </Typography>
    </Paper>
  );
};

export default PageNotFound;
