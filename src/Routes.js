import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Checkout />
      </Route>
    </Switch>
  );
}