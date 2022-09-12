import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ContentBox from "../Content-box/ContentBox";
import RightSidebar from "../Sidebar-right/RightSidebar";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Sidebar />
      </Box>
      <ContentBox>
        <Outlet />
      </ContentBox>
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default Layout;
