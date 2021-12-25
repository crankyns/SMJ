import React from "react";
import "./css/App.css";
import { HomePage } from "./components/HomePage";
import { SignUp } from "./components/SignUp/SignUp";
import { LogIn } from "./components/LogIn/LogIn";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./Routing/Routing";

export const App = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};
