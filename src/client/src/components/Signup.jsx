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
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    // alert("Siggned up");
  };

  render() {
    const { username, email, password } = this.state;
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
          <Typography component="h1" variant="h5" style={{ marginBottom: 10 }}>
            Sign up
          </Typography>
          <form style={{ width: "100%" }} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="uname"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
            </Grid>
            <div style={{ marginTop: 15 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleClick}
              >
                Sign Up
              </Button>
            </div>

            <Grid container justify="flex-end" style={{ marginTop: 20 }}>
              <Grid item>
                <Link to="/signin" variant="body2">
                  <i>Already have an account? Sign in</i>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <GithubOauth /> */}
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
