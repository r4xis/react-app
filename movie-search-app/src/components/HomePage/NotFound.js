import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CannotFind extends Component {
  componentDidMount = () =>
    toast.error("Not found " + this.props.search, {
      position: toast.POSITION.TOP_CENTER,
    });

  render() {
    return (
      <div id="cannot-find">
        <ToastContainer />
      </div>
    );
  }
}

export default CannotFind;
