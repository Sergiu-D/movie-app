import React, { useContext } from "react";
import Movie from "./Movie";

import { DataContext } from "../DataProvider";

export default function MovieList() {
  const [movies, setMovies] = useContext(DataContext);

  return (
    <>
      <Movie />
    </>
  );
}
