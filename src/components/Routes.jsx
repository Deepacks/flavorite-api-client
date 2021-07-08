import React from "react";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import SettingsIndex from "./settings/SettingsIndex";
//temp
import TEMP from "./TEMP";
//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes(props) {
  const [openOptions, setOpensOptions] = React.useState(false);

  return (
    <div>
      {!openOptions ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <App setOpensOptions={setOpensOptions} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/switch">
              <TEMP />
            </Route>
          </Switch>
        </Router>
      ) : (
        <SettingsIndex setOpensOptions={setOpensOptions} />
      )}
    </div>
  );
}

export default Routes;
