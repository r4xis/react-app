import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import SecondPage from "./components/SecondPage/SecondPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movie-info" component={SecondPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
