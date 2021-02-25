import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../screen/Home";
import Login from "../screen/Login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
