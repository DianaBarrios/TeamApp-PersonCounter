import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Challenge from "./challenge";
import Notfound from "./notfound";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div class="nav-smiles">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/challenge">
            Challenge
          </a>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/challenge" component={Challenge} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
