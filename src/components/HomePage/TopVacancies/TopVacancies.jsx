import React from "react";
import { TopVacancyItem } from "./TopVacancyItem";

export const TopVacancies = () => {
  return (
    <section className="hot-vacancies">
      <div className="container hot-vacancies-container">
        <div className="hot-vacancies-title">
          <h3>Популярные вакансии</h3>
          <div className="after">
            <div className="after-line line-1"></div>
            <div className="after-line line-2"></div>
            <div className="after-line line-3"></div>
          </div>
        </div>
        <div className="hot-vacancies-columns">
          <div className="left-column">
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
          </div>
          <div className="right-column">
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
            <TopVacancyItem
              vacancyTitle={"Senior UI/UX Designer"}
              vacancySalary={"от 2500 до 3000 бел. руб."}
              vacancyCompany={"Wargaming, Минск"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
