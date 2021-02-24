import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routers() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoadingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
