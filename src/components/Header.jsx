import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <div></div>
        </a>
      </div>
      <nav>
        <ul className="links">
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li className="junior">
            <a href="/">Junior</a>
          </li>
          <li className="middle">
            <a href="/">Middle</a>
          </li>
          <li className="senior">
            <a href="/">Senior</a>
          </li>
        </ul>
        <ul className="buttons">
          <li className="registration">
            <a href="/">Регистрация</a>
          </li>
          <li className="login">
            <a href="/">Вход</a>
          </li>
          <li className="location">
            <a href="/">Локация</a>
            <i class="fas fa-map-marker-alt"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};
