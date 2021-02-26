import React, { useState, useContext } from "react";
import { DataContext } from "../DataProvider";

export default function Movie({ movie }) {
  return (
    <a href={`/movie_details/${movie.id}`}>
      <div>
        <h1>Title: {movie.name || movie.original_title}</h1>
      </div>
    </a>
  );
}
