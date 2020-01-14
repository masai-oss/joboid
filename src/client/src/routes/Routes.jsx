import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";
// import Jobs from "./Jobs";
import Jobs from "../components/Jobs";
import Saved from "../components/Saved";
import Alerts from "../components/Alerts";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
// import Admindashboard from '../components/Admindashboard'

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Admindashboard /> */}
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
