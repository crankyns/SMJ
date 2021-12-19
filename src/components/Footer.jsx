import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <a href="/">
          <div></div>
        </a>
      </div>
      <div className="footer-info">
        <div>
          <h5>Информация</h5>
          <p>
            <a href="/">Список вакансий</a>
          </p>
          <p>
            <a href="/">Каталог вакансий</a>
          </p>
        </div>
      </div>
      <div className="footer-help">
        <div>
          <h5>Помощь</h5>
          <p>
            <a href="/">Часто задаваемые вопросы</a>
          </p>
          <p>
            <a href="/">О нас</a>
          </p>
        </div>
      </div>
      <div className="footer-contacts">
        <div>
          <h5>Контакты</h5>
          <p>
            <a href="/">+303133171181</a>
          </p>
          <p>
            <a href="/">findmyjob@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
