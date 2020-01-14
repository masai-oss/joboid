import React from "react";
import axios from "axios";
import Home from "./Home";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios.get("http://127.0.0.1:5000/jobdetails").then(res => {
      this.setState({
        data: res.data.data
      });
    });
  };

  render() {
    const { data: datas } = this.state;
    return (
      <div>
        <Home />
        {datas !== undefined
          ? datas.map(e => {
              console.log(e);
              return (
                <div>
                  <h1>{e.job_title}</h1>
                  <h2>{e.location}</h2>
                  <h3>{e.description}</h3>
                  <h3>{e.payscale}</h3>
                  <h2>{e.date_posted}</h2>
                  <a
                    style={{ backgroundColor: "Yellow" }}
                    href={e.parent_source}
                  >
                    Apply Now
                  </a>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Saved;
