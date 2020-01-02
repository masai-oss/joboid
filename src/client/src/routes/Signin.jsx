import React from "react";
import {
  CssBaseline,
  Container,
  Button,
  TextField,
  Typography,
  Grid
} from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      status: true
    });
  };

  render() {
    const { email, password, status } = this.state;
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
            <Grid container justify="flex-end">
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
