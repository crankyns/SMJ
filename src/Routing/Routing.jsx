import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { HomePage } from "../components/HomePage";
import { LogIn } from "../components/LogIn/LogIn";
import { SignUp } from "../components/SignUp/SignUp";
import { UserProfile } from "../components/UserProfile/UserProfile";

export const Routing = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route path="/log-in">
        <LogIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route>
        <HomePage />
      </Route>
    </Switch>
  );
};
