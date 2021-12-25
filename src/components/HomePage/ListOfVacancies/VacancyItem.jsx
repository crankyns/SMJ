import { Link } from "react-router-dom";

export const VacancyItem = ({
  vacancyTitle,
  vacancySalary,
  vacancyCompany,
  style,
}) => {
  return (
    <div className="row-item" style={style}>
      <Link>
        <div className="row-title">
          <h5>{vacancyTitle}</h5>
        </div>
      </Link>
      <div className="row-salary">
        <h6>{vacancySalary}</h6>
      </div>
      <div className="row-location">
        <p>{vacancyCompany}</p>
      </div>
    </div>
  );
};
