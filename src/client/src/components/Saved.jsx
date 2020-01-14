import React from "react";
import Home from "./Home";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Home />
        This is the saved page
      </div>
    );
  }
}

export default Saved;
