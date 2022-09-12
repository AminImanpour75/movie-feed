import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Loader from "../../components/Loader/Loader";
import { Box, Card, Typography } from "@mui/material";
import ReactPlayer from "react-player";

const Trailers = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchData(`trailers/${id}`)
      .then((res) => setMovie(res?.data?.result[0]))
      .catch((err) => console.log(err));
  }, [id]);
  if (!movie) {
    return <Loader />;
  }
  return (
    <Card sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${movie?.videoId}`}
        controls
      />

      <Box m={1} sx={{ color: "#fff" }}>
        <Typography variant="h5">{movie?.title}</Typography>
        <Typography variant="body" sx={{ color: "#ddd" }}>
          {movie?.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default Trailers;
