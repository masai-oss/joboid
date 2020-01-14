import React from "react";
import { TextField, Grid, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import Joboid01 from "../images/Joboid-white.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  componentDidMount = () => {};

  onSearch = () => {
    document.getElementById("outlined-search").style.backgroundColor = "white";
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      status: true
    });
  };

  render() {
    const { status } = this.state;
    return (
      <div
        style={{ height: 115, backgroundColor: "#4285F4", color: "#0b3e20" }}
      >
        <div style={{ marginTop: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <div style={{ textAlign: "center" }}>
                <img
                  id="joboid-logo"
                  src={Joboid01}
                  style={{ height: 60, width: 200 }}
                  alt="joboid_logo"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <TextField
                  style={{ width: 500 }}
                  id="outlined-search"
                  label="Search"
                  type="search"
                  variant="filled"
                  onClick={this.onSearch}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Button>
                      <Link to="/" style={{ color: "white" }}>
                        <b>JOBS</b>
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button>
                      <Link to="/saved" style={{ color: "white" }}>
                        <b>SAVED</b>
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button>
                      <Link to="/alerts" style={{ color: "white" }}>
                        <b>ALERTS</b>
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs>
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={this.handleClick}
                  variant="contained"
                  size="small"
                >
                  Sign in
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        {status ? <Redirect to="/signin" /> : null}
      </div>
    );
  }
}

export default Home;
