import React from "react";
import MovieList from "./components/routes/MovieList";
import MovieDetails from "./components/routes/MovieDetails";

import About from "./components/routes/About";

import { DataProvider } from "./DataProvider";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
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
