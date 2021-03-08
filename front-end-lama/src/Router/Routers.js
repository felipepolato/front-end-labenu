import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateMusic from "../screen/CreateMusic";
import Home from "../screen/Home";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import DetailsMusic from "../componets/DetailsMusic"
import CreatePlayList from "../screen/CreatePlayList";

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
        <Route exact path={"/signup"}>
          <Signup />
        </Route>
        <Route exact path={"/musics"}>
          <CreateMusic />
        </Route>
        <Route exact path={"/details/:id"}>
          <DetailsMusic />
        </Route>
        <Route exact path={"/playlist"}>
          <CreatePlayList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
