import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <div></div>
        </Link>
      </div>
      <nav>
        <ul className="links">
          <li className="home">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="junior">
            <Link to="junior">
              <p>Junior</p>
            </Link>
          </li>
          <li className="middle">
            <Link to="middle">
              <p>Middle</p>
            </Link>
          </li>
          <li className="senior">
            <Link to="senior">
              <p>Senior</p>
            </Link>
          </li>
        </ul>
        <ul className="buttons">
          <Link to="sign-up">
            <li className="registration">
              <p>Регистрация</p>
            </li>
          </Link>
          <Link to="log-in">
            <li className="login">
              <p>Вход</p>
            </li>
          </Link>
          <li className="location">
            <p>Локация</p>
            <i class="fas fa-map-marker-alt"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};
