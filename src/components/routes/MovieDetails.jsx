import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../DataProvider";
import fetchers from "../../fetchers";
import useSWR from "swr";
export default function MovieDetails() {
  //const { fetchMovie } = useContext(DataContext);
  const { id } = useParams();
  const { data, error } = useSWR(id, fetchers.fetchMovieByID);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
