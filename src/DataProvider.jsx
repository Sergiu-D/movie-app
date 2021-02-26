import React, { createContext, useState, useEffect } from "react";
import useSWR from "swr";

const API_KEY = "cd001a6467f4a6dd11d1fcd4ae1044a7";
const TRENDING_PERIOD = "day";
const DATA_URL = `https://api.themoviedb.org/3/trending/movies/day?api_key=cd001a6467f4a6dd11d1fcd4ae1044a7`;

async function fetchData() {
  const response = await fetch(DATA_URL);
  const movies = await response.json();

  return movies;
}

// async function fetchMovie(id, fetchedMovies) {
//   if (!fetchedMovies) {
//     //TODO fetch movies and return it
//     return null;
//   }
//   const result = fetchedMovies.results.find((m) => +m.id === +id);
//   debugger;
//   if (result) {
//     return result;
//   } else {
//     //TODO fetch movies and return it
//     return null;
//   }
// }

async function cachedFetch(url, parametersObj) {}

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async function loadData() {
      try {
        const data = await fetchData();
        setMovies(data);
      } catch (e) {
        console.log("Error!");
        console.log(e);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ movies, setMovies }}>
      {children}
    </DataContext.Provider>
  );
}
