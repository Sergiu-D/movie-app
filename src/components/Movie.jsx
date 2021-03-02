import React, { useState, useContext } from "react";
import { DataContext } from "../DataProvider";

export default function Movie({ movie }) {
  const movieImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  console.log(movie);
  return (
    <a href={`/movie_details/${movie.id}`}>
      <div>
        <img src={movieImage} alt={movie.name || movie.original_title} />
        <h1>{movie.title || movie.name || movie.original_title}</h1>
      </div>
    </a>
  );
}
