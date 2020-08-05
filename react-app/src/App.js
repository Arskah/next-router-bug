import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/page-two">
          <Page2 />
        </Route>
        <Route path="/page-three">
          <Page3 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
