import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Funnel from "./components/Funnel";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route path="/act-now" render={(props) => <Funnel {...props} />} />
      <footer>Vizier Estate Group © 2020</footer>
    </div>
  );
}

export default App;
