import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

import {
  CssBaseline,
  Container,
  Button,
  TextField,
  Typography,
  Grid
} from "@material-ui/core/";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: false,
      inValid: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("http://127.0.0.1:5000/login", {
        email,
        password
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            status: true
          });
          localStorage.setItem("Authorization", res.data.Authorization);
        }
        return <Redirect to="/" />;
      })
      .catch(err => {
        console.log(err);
        this.setState({
          inValid: true
        });
      });
  };

  render() {
    const { email, password, status } = this.state;
    const { inValid } = this.state;
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={{ width: "100%" }} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div style={{ marginTop: 15 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={e => this.handleClick(e)}
              >
                Sign In
              </Button>
            </div>
            {inValid ? (
              <small style={{ color: "red" }}>
                Email or Password does not match
              </small>
            ) : null}
            <Grid container justify="flex-end" style={{ marginTop: 20 }}>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {status ? <Redirect to="/" /> : null}
      </Container>
    );
  }
}

export default Signin;
