import "./css/App.css";
import { HomePage } from "./components/HomePage";
import { SignUp } from "./components/SignUp/SignUp";
import { LogIn } from "./components/LogIn/LogIn";
import { UserProfile } from "./components/UserProfile/UserProfile";

export const App = () => {
  return (
    <>
      {/* <HomePage /> */}
      <SignUp />
      {/* <LogIn /> */}
      {/* <UserProfile /> */}
    </>
  );
};
