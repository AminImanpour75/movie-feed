import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Star } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        display: "flex",
        height: "360px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "6px",
          right: "6px",
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          backgroundColor: "#121212",
          padding: "1px 3px",
          borderRadius: "5px",
          opacity: "0.6",
        }}
      >
        <Star
          sx={{
            fontSize: "16px",
            color: "yellow",
            margin: 0.5,
          }}
        />
        7.9
      </Box>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100%" }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.8",
          }}
          image={movie.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {movie.titleOriginal.slice(0, 28)}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.year}
            </Typography>
            <Typography variant="body2">
              {movie.description.slice(0, 180)} ...
            </Typography>
          </CardContent>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0, m: 2 }}
          >
            <Box>
              <span
                style={{
                  marginRight: "10px",
                  backgroundColor: "yellow",
                  padding: "3px 5px",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                IMDB
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "yellow",
                }}
              >
                {movie.rating} rating
              </span>
            </Box>
            <Box>
              <Button variant="contained" color="secondary">
                <Link
                  to={`/movie/${movie._id}`}
                  style={{ textDecoration: "none" }}
                >
                  Read More
                </Link>
              </Button>

              <Button variant="contained" color="secondary">
                <Link
                  to={`/trailer/${movie._id}`}
                  style={{ textDecoration: "none" }}
                >
                  Trailer
                </Link>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
