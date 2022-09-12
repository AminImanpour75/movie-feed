import SearchBox from "../SearchBox/SearchBox";
import { Box, styled } from "@mui/material";
import React from "react";
import GenreBox from "../GenreBox/GenreBox";
import RecentlyPlayCard from "../RecentlyPlayCard/RecentlyPlayCard";

function RightSidebar() {
  const SidebarBox = styled(Box)({
    width: "250px",
    backgroundColor: "#353535",
    color: "#ccc",
    overflowX: "hidden",
  });
  return (
    <SidebarBox>
      <Box sx={{ position: "fixed", top: "0", bottom: "0", overflowY: "auto" }}>
        <SearchBox />
        <GenreBox />
        <RecentlyPlayCard />
      </Box>
    </SidebarBox>
  );
}

export default RightSidebar;
