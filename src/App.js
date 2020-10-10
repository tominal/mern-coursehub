import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Explore from "./components/explore/Explore";
import Checkout from "./components/checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Explore />
          </Route>
        </Switch>
        {/* FOOTER */}
      </div>
    </Router>
  );
}

export default App;
