import React from "react";
import { Box, styled } from "@mui/material";
import Appbar from "../Appbar/Appbar";
function ContentBox(props) {
  const Container = styled(Box)({
    width: "100%",
    backgroundColor: "#1e272e",
    minHeight: "100vh",
    overflowX: "hidden",
  });
  return (
    <Container>
      <Appbar />
      {props.children}
    </Container>
  );
}

export default ContentBox;
