import React, { useContext } from "react";
import Movie from "../Movie";

import { DataContext } from "../../DataProvider";

export default function MovieList() {
  const { movies, setMovies } = useContext(DataContext);
  if (movies === null) {
    return <p>Loading...</p>;
  }
  const { results } = movies;
  const filteredMovies = [...results];
  // debugger;
  return (
    <>
      {filteredMovies.map((movie) => {
        return <Movie movie={movie} />;
      })}
    </>
  );
}
