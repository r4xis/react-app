import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movie-info" component={MovieInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
