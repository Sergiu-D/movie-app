import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import qs from 'query-string';
import Movie from "../Movie";
import { getKeyParam, getAPIBaseURL } from "../../helpers";

import { DataContext } from "../../DataProvider";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useSWR from "swr";

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

function qsFromParams(paramsObj) {
  const params = { ...paramsObj }
  const keys = Object.keys(params)
  keys.forEach(k => { if (!params[k]) { delete params[k] } })
  const queryString = qs.stringify(params)
  return queryString
}

const Search = () => {
  // const params = useParams();
  let queryParams = useQuery();
  const [query, setQuery] = useState(queryParams.get('query') || '')
  const [adult, setAdult] = useState(queryParams.get('adult') || '')

  const _search = useLocation().search
  useEffect(() => {
    console.log('history changed', window.location.search)
    if (queryParams.get('query') !== query) {
      setQuery(queryParams.get('query'))
    }
  }, [_search])

  let history = useHistory();
  // debugger
  const onChange = ev => {
    // debugger
    setQuery(ev.target.value)
  }
  const onSubmit = ev => {
    ev.preventDefault()
    const queryString = qsFromParams({
      adult, query: query ? query.trim() : ''
    })
    if (queryString) {
      history.push(`/search?${queryString}`)
    }
  }
  return (

    <form onSubmit={onSubmit} >
      <input required type="text" onChange={onChange} value={query} />
      <input type="checkbox" onChange={() => setAdult(!adult)} defaultChecked={adult} />
      <input type="submit" value="Search" />
    </form>

  )
}


export default function Home() {
  const queryParams = useQuery();
  const query = queryParams.get('query')
  const queryString = qsFromParams({
    query: query,
    'api_key': process.env.REACT_APP_API_KEY,
  })

  const url = !query ? `${getAPIBaseURL()}/trending/all/week?${queryString}`
    : `${getAPIBaseURL()}/search/movie/?${queryString}}`

  console.log(`swr should search for ${url}`)

  // const { movies, setMovies } = useContext(DataContext);
  const { data: movies, loading, error } = useSWR(url);
  console.log(`movies`, movies)


  const classes = useStyles();

  if (!movies) {
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
