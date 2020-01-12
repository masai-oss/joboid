import React from "react";
import { TextField, Grid, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      token: null
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      status: true
    });
  };

  handleLogout = () => {
    localStorage.removeItem("Authorization");
    this.setState({
      token: null
    });
    return <Redirect to="/" />;
  };

  render() {
    const { status } = this.state;
    this.state.token = localStorage.getItem("Authorization");
    const { token } = this.state;

    return (
      <div style={{ height: 115, backgroundColor: "#4285F4", color: "white" }}>
        <div style={{ marginTop: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <div style={{ textAlign: "center", fontSize: 30 }}>
                <b>Google</b>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <TextField
                  style={{ width: 500 }}
                  id="outlined-search"
                  label="Search"
                  type="search"
                  variant="outlined"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Button>
                      <Link to="/">JOBS</Link>
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button>
                      <Link to="/saved">SAVED</Link>
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button>
                      <Link to="/alerts">ALERTS</Link>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs>
              <div style={{ textAlign: "center" }}>
                {token == null ? (
                  <Button onClick={this.handleClick} variant="contained">
                    Sign in
                  </Button>
                ) : (
                  <Button onClick={this.handleLogout} variant="contained">
                    Logout
                  </Button>
                )}
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
