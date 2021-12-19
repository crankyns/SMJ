import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const SignUp = () => {
  return (
    <>
      <Header />
      <section className="sign-up-section">
        <div className="container sing-up-container">
          <div className="sign-up-form-side">
            <div className="form-header-title">
              <div className="candidate-sign-up-title">
                <h4>Соискатель</h4>
              </div>
              <div className="employer-sign-up-title">
                <h4>Работодатель</h4>
              </div>
            </div>
            <div className="form-header-description">
              <p>
                Нам нужно, чтобы вы помогли нам с основной информацией для
                создания вашей учетной записи. Вот наши условия. Пожалуйста,
                прочтите их внимательно.
              </p>
            </div>
            <form action="" className="sign-up-form">
              <div className="personal-info-inputs-raw">
                <div className="name-input">
                  <div className="name-label">
                    <label
                      className="name-input-label"
                      htmlFor="user-name-input"
                    >
                      <p>Имя</p>
                    </label>
                    <div className="more-info-username">
                      <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                  <input type="text" id="user-name-input" placeholder="Имя" />
                </div>
                <div className="surname-input">
                  <div className="surname-label">
                    <label
                      className="surname-input-label"
                      htmlFor="user-surname-input"
                    >
                      <p>Фамилия</p>
                    </label>
                    <div className="more-info-user-surname">
                      <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="user-surname-input"
                    placeholder="Фамилия"
                  />
                </div>
              </div>
              <div className="user-set-inputs-raw">
                <div className="login-input">
                  <div className="login-label">
                    <label className="login-input-label" htmlFor="login-input">
                      <p>Логин</p>
                    </label>
                    <div className="more-info-login">
                      <i class="fas fa-question-circle"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="login-input"
                    placeholder="Номер телефона"
                  />
                </div>
                <div className="password-input">
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
                  <input type="text" id="password-input" placeholder="Пароль" />
                </div>
              </div>
              <div className="sing-up-form-bottom">
                <div className="inner">
                  <div className="accept-terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="terms-label">
                      <p>
                        Я согласен с
                        <a href="/">
                          <span> условиями</span>
                        </a>
                      </p>
                    </label>
                  </div>
                  <button>Регистрация</button>
                </div>
              </div>
            </form>
          </div>
          <div className="sign-up-background-pic-side"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
