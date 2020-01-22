import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core/";
import axios from "axios";
import Home from "./Home";
import Expansionpanel from "./Expansionpanel";

export default class jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }

  componentDidMount = () => {
    axios.get("http://127.0.0.1:5000/jobdetails").then(res => {
      this.setState({
        allData: res.data.data
      });
    });
  };

  render() {
    const { allData: data } = this.state;
    return (
      <>
        <CssBaseline />
        <Home />
        <Expansionpanel />
        {data !== undefined
          ? data.map(e => {
              return (
                <div>
                  <h1>{e.job_id}</h1>
                  <h1>{e.job_title}</h1>
                  <h2>{e.location}</h2>
                  <h3>{e.job_type}</h3>
                  <h3>{e.payscale}</h3>
                  <h2>{e.date_posted}</h2>
                  <a style={{ backgroundColor: "Yellow" }} href={e.description}>
                    Apply Now
                  </a>
                  <hr />
                </div>
              );
            })
          : null}
      </>
    );
  }
}
