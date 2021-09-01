import React from "react";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            LoggedInPath={ROUTES.BROWSE} //send to if logged in
            path={ROUTES.HOME} // going to
            exact
          >
            <Home />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            LoggedInPath={ROUTES.BROWSE} //send to if logged in
            path={ROUTES.SIGN_IN} // going to
            exact
          >
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            LoggedInPath={ROUTES.BROWSE} //send to if logged in
            path={ROUTES.SIGN_UP}
            exact
          >
            <Signup />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}
