import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Team from "./Team/Team";
// import TeamDetail from "./Team/TeamDetail/TeamDetail";
import Detail from "./Team/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team/:id">
            <Detail></Detail>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/team">
            <Home />
          </Route>
          <Router exact path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
