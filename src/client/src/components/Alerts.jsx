import React from "react";
import Home from "./Home";

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
        This is the Alerts page
      </div>
    );
  }
}

export default Alerts;
