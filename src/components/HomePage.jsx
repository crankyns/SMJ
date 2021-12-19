import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ListOfVacancies } from "./HomePage/ListOfVacancies";
import { MainSection } from "./HomePage/MainSection";
import { TopITCompanies } from "./HomePage/TopITCompanies";
import { TopVacancies } from "./HomePage/TopVacancies";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <TopVacancies />
      <TopITCompanies />
      <ListOfVacancies />
      <Footer />
    </>
  );
};
