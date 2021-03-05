import React, { useContext, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import qs from 'query-string';
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

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  // const params = useParams();
  let queryParams = useQuery();

  // console.log(params)
  let history = useHistory();
  const [query, setQuery] = useState(queryParams.get('query') || '')
  const [adult, setAdult] = useState(queryParams.get('adult') || '')
  // debugger
  const onChange = ev => {
    // debugger
    setQuery(ev.target.value)
  }
  const onSubmit = ev => {
    ev.preventDefault()
    const params = {
      adult, query
    }
    const keys = Object.keys(params)
    keys.forEach(k => { if (!params[k]) { delete params[k] } })
    const queryString = qs.stringify(params)
    history.replace(`/search?${queryString}`)
  }
  return (

    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={query} />
      <input type="checkbox" onChange={() => setAdult(!adult)} defaultChecked={adult} />
      <input type="submit" value="Search" />
    </form>

  )
}


export default function Home() {
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
      <Search />
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
