import React from "react";
import {
  CssBaseline,
  Container,
  Button,
  TextField,
  Typography,
  Grid
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import GithubOauth from "./common/GithubLogin";
import FacebookOauth from "./common/FacebookLogin";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    // Axios call goes here. I didn't write the code for axios, because it is cauisng linting error while pushing
    // and import axios also
  };

  render() {
    const { email, password } = this.state;
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
                onClick={this.handleClick}
              >
                Sign In
              </Button>
            </div>
            <Grid container justify="flex-end" style={{ marginTop: 20 }}>
              <Grid item>
                <Link to="/signup" variant="body2">
                  <i>Dont have an account? Sign Up</i>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Grid container spacing={2} align="center" style={{ marginTop: 20 }}>
          <Grid item xs={6}>
            <FacebookOauth />
          </Grid>
          <Grid item xs={6}>
            <GithubOauth />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Signin;
