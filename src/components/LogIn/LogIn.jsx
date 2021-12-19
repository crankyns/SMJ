import React, { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputLogin = (e) => {
    setLogin(e.target.value);
    console.log(login);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <>
      <Header />
      <section className="login-section">
        <div className="container login-container">
          <div className="login-form-side">
            <div className="form-header-title">
              <div className="candidate-login-title">
                <h4>Соискатель</h4>
              </div>
              <div className="employer-login-title">
                <h4>Работодатель</h4>
              </div>
            </div>
            <div className="form-header-description">
              <p>
                Пожалуйста, введите свою информацию в поля ниже, чтобы войти.
              </p>
            </div>
            <form action="" className="login-form">
              <div className="login-label">
                <label className="login-input-label" htmlFor="login-input">
                  <p>Логин</p>
                </label>
                <div className="more-info-login">
                  <i class="fas fa-question-circle"></i>
                </div>
              </div>
              <input
                type="tel"
                id="login-input"
                placeholder="Номер телефона"
                value={login}
                onChange={handleInputLogin}
              />
              <div className="password-label">
                <label
                  className="password-input-label"
                  htmlFor="password-input"
                >
                  <p>Пароль</p>
                </label>
                <div className="more-info-password">
                  <i class="fas fa-question-circle"></i>
                </div>
              </div>
              <input
                type="password"
                id="password-input"
                placeholder="Пароль"
                value={password}
                onChange={handleInputPassword}
              />
              <div className="forgotten-password">
                <a href="/">
                  <p>Забыли пароль?</p>
                </a>
              </div>
              <div className="bottom-form">
                <div className="remember-me">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me" className="remember-me-label">
                    <p>Запомнить меня</p>
                  </label>
                </div>
                <button>Войти</button>
              </div>
            </form>
            <div className="switch-to-registration">
              <p>
                Ещё нет учётной записи? <br />
                <a href="/">
                  <span> Зарегистрируйтесь</span>
                </a>
              </p>
            </div>
          </div>
          <div className="login-background-pic-side"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
