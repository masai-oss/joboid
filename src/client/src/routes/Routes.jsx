import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
import Jobs from "./Jobs";
import Saved from "./Saved";
import Alerts from "./Alerts";
import Signin from "./Signin";
import Signup from "./Signup";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Jobs} />
        <Route path="/saved" component={Saved} />
        <Route path="/alerts" component={Alerts} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
