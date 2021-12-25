import { VacancyItem } from "./VacancyItem";

export const ListOfVacancies = () => {
  return (
    <section className="list-of-vacancies">
      <div className="container list-of-vacancies-container">
        <div className="list-title">
          <h3>Каталог вакансий</h3>
        </div>
        <div className="list-of-vacancies-rows">
          <div className="vacancies-row first-row">
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
            />
          </div>
          <div className="vacancies-row second-row">
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
            />
          </div>
          <div className="vacancies-row third-row">
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
            />
          </div>
          <div className="vacancies-row fourth-row">
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
              style={{ borderRight: "2px solid #7709AB" }}
            />
            <VacancyItem
              vacancyTitle={"Junior Software Engineer"}
              vacancySalary={"от 2500 до 300 бел. руб."}
              vacancyCompany={"Warming, Минск"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
