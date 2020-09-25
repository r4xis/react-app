import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/left/Categories";

import { getDiscounted } from "./actions/mainAction";
import Discounted from "./components/main/discounted-products/Items";
import Products from "./components/main/products/Items";

class Page extends Component {
  componentDidMount() {
    this.props.getDiscounted();
  }
  render() {
    return (
      <Router>
        <div id="Page">
          <Navbar />
          <div id="Main">
            <Sidebar />
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Discounted items={this.props.main.discounted} />
                )}
              />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps, { getDiscounted })(Page);
