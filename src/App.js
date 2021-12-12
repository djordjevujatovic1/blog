import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bitcoin from "./components/Bitcoin/Bitcoin";
import Tesla from "./components/Tesla/Tesla";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bitcoin" component={Bitcoin} />
          <Route path="/tesla" component={Tesla} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
