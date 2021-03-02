import React from "react";

import MovieList from "./components/routes/MovieList";
import MovieDetails from "./components/routes/MovieDetails";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

import About from "./components/routes/About";

import { DataProvider } from "./DataProvider";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              centered
            >
              <Link to="/">
                <Tab label="Home" />
              </Link>
              <Link to="/about">
                <Tab label="About" />
              </Link>
            </Tabs>
          </Paper>
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/movie_details/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}
