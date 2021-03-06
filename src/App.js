import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./Homepage";
import Cards from "./Cards";
import Customize from "./Customize";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/cards" component={Cards} />
        <Route path="/customize" component={Customize} />
      </div>
    </HashRouter>
  );
}

export default App;
