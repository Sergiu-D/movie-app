import React, { useContext } from "react";
import Movie from "../Movie";

import { DataContext } from "../../DataProvider";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    maxWidth: "90%",
    margin: "3rem auto",
  },
}));

export default function MovieList() {
  const { movies, setMovies } = useContext(DataContext);
  const classes = useStyles();

  if (movies === null) {
    return <p>Loading...</p>;
  }
  const { results } = movies;
  const filteredMovies = [...results];
  // debugger;
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={6} justify="center">
          {filteredMovies.map((movie) => {
            return (
              <Grid item lg={3} md={6} sm={6}>
                <Movie movie={movie} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
