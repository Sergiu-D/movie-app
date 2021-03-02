import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider";
import fetchers from "../../fetchers";
import useSWR from "swr";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function MovieDetails() {
  //const { fetchMovie } = useContext(DataContext);
  const { id } = useParams();
  const { data: movie, error } = useSWR(id, fetchers.fetchMovieByID);
  if (!movie) {
    return <p>Loading...</p>;
  }

  const movieImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const movieName = movie.title || movie.name || movie.original_title;
  console.log(movie);

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{ height: "100vh", marginTop: "3rem", textAlign: "center" }}
      >
        <img src={movieImage} alt={movieName} height="60%" />
        <Typography component="div" variant="h2" gutterBottom>
          {movieName}
        </Typography>
        <Typography style={{ lineHeight: "2rem", color: "#333333" }}>
          {movie.overview}
        </Typography>
      </Container>
    </>
  );
}
