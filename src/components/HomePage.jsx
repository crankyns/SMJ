import { useLocation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ListOfVacancies } from "./HomePage/ListOfVacancies/ListOfVacancies";
import { MainSection } from "./HomePage/MainSection/MainSection";
import { TopITCompanies } from "./HomePage/TopITCompanies";
import { TopVacancies } from "./HomePage/TopVacancies/TopVacancies";
import { LogIn } from "./LogIn/LogIn";
import { SignUp } from "./SignUp/SignUp";
import { UserProfile } from "./UserProfile/UserProfile";

export const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && (
        <>
          <MainSection />
          <TopVacancies />
          <TopITCompanies />
          <ListOfVacancies />
        </>
      )}
      {location.pathname === "/log-in" && <LogIn />}
      {location.pathname === "/sign-up" && <SignUp />}
      {location.pathname === "/user" && <UserProfile />}
      <Footer />
    </>
  );
};
