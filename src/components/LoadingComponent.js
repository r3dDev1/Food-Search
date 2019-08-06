import React, { Component } from "react";
import "./LoadingSpinner.css";

class LoadingComponent extends Component {
  render() {
    return (
      <div className="lol">
        <i className="fa fa-spinner fa-spin" />
        <p>Loading...</p>
      </div>
    );
  }
}

export default LoadingComponent;
