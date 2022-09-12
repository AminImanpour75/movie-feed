import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import fetchData from "../../utils/fetchData";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchData(`movie/${id}`)
      .then((res) => setMovieDetail(res?.data?.result))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movieDetail) {
    return <Loader />;
  }

  return (
    <Card>
      <CardHeader title={movieDetail?.title} subheader={movieDetail?.release} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component="img"
          height="200"
          width="100%"
          image={movieDetail?.image}
          alt={movieDetail?.title}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h2>Description:</h2>
            {movieDetail?.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieDetail;
