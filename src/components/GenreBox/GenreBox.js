import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Loader from "../Loader/Loader";

function GenreBox() {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    fetchData("genres").then((res) => {
      setGenres(res?.data?.results);
    });
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" component="span">
        Genre
      </Typography>
      {!genres ? (
        <Loader />
      ) : (
        <Box sx={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          {genres.map((genre, idx) => (
            <Button
              key={idx}
              variant=""
              sx={{ m: 1, fontSize: "12px" }}
              className="category"
            >
              {genre.name}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default GenreBox;
