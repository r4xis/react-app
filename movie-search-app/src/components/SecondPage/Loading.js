import React, { Component } from "react";
import { Roller } from "react-css-spinners";

class Loading extends Component {
  render() {
    return (
      <div id="loading">
        <Roller />
      </div>
    );
  }
}

export default Loading;
