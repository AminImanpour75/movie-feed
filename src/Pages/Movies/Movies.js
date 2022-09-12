import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import fetchData from "../../utils/fetchData";

function Movies() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchData("movies").then((res) => {
      setMovies(res?.data?.results);
    });
  }, []);

  return (
    <Box sx={{ padding: "15px", color: "#fff" }}>
      <Typography variant="h6" component="h2">
        Movies
      </Typography>

      {!movies ? (
        <Loader />
      ) : (
        <Grid container spacing={1} sx={{ p: 1 }}>
          {movies.map((movie) => (
            <Grid key={movie._id} item md={6} xs={12}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Movies;
