import React from "react";
import MovieList from "./components/MovieList";

import { DataProvider } from "./DataProvider";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <DataProvider>
      <div className="App">
        <MovieList />
      </div>
    </DataProvider>
  );
}
