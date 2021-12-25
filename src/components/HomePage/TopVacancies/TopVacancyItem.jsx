import { Link } from "react-router-dom";

export const TopVacancyItem = ({
  vacancyTitle,
  vacancySalary,
  vacancyCompany,
  pathToVacancy,
}) => {
  return (
    <div className="column-item">
      <div className="item-icon"></div>
      <Link to={pathToVacancy}>
        <div className="item-inner">
          <div className="item-title">
            <h5>{vacancyTitle}</h5>
          </div>
          <div className="item-salary">
            <h6>{vacancySalary}</h6>
          </div>
          <div className="item-company-name">
            <p>{vacancyCompany}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
