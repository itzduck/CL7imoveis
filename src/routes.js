import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from "./components/Header";

export default function Routes() {
  return (
    <Router>
      <div>
       <Header>
        
       </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


