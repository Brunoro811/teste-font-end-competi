import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home/home";
import Login from "../pages/login";
import Register from "../pages/register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
export default Routes;
