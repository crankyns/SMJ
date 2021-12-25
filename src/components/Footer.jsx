import { Link } from "react-router-dom";
import { FacebookLink } from "./Links/FacebookLink";
import { InstagramLink } from "./Links/InstagramLink";
import { TwitterLink } from "./Links/TwitterLink";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <Link to="/">
          <div></div>
        </Link>
      </div>
      <div className="footer-info">
        <div>
          <h5>Информация</h5>
          <Link to="list-of-vacancies">
            <p>Список вакансий</p>
          </Link>
          <Link to="catalog-of-vacancies">
            <p>Каталог вакансий</p>
          </Link>
        </div>
      </div>
      <div className="footer-help">
        <div>
          <h5>Помощь</h5>
          <Link to="FAQ">
            <p>Часто задаваемые вопросы</p>
          </Link>
          <Link to="about-us">
            <p>О нас</p>
          </Link>
        </div>
      </div>
      <div className="footer-contacts">
        <div>
          <h5>Контакты</h5>
          <a href="tel:+375291234567">
            <p>+303133171181</p>
          </a>
          <a href="mailto:findmyjob@gmail.com">
            <p>findmyjob@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <FacebookLink link={"/"} />
          <InstagramLink link={"/"} />
          <TwitterLink link={"/"} />
        </ul>
      </div>
    </footer>
  );
};
