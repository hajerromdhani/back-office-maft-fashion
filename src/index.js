import React from "react";
import ReactDOM from "react-dom";
//import LoginPage from "views/Login/LoginPage";
import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

// const isLoggedIn = true

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* {!isLoggedIn && <Redirect to='/login' />} */}
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
