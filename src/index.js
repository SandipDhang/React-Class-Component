import React, { Component } from "react";
import ReactDom from "react-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>SD Creations</h1>
        <h3>Thanks for watching</h3>
      </div>
    );
  }
}

ReactDom.render(<Home />, document.getElementById("root"));
