import { List, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
function SearchBox() {
  return (
    <Box
      component="form"
      sx={{
        m: 2,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#121212",
        borderRadius: "20px",
      }}
    >
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#ccc" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#ccc" }}
        placeholder="Search Movies"
      />

      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#ccc" }}
        aria-label="list"
      >
        <List />
      </IconButton>
    </Box>
  );
}

export default SearchBox;
