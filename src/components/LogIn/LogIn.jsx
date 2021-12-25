import { useState } from "react";
import { useHistory } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LogInForm } from "./LogInForm";

export const LogIn = () => {
  const [candidate, setCandidate] = useState(true);
  const [employer, setEmployer] = useState(false);

  const history = useHistory();

  const chooseCandidate = () => {
    setCandidate(true);
    setEmployer(false);
  };
  const chooseEmployer = () => {
    setEmployer(true);
    setCandidate(false);
  };

  const routeToSignUp = () => {
    history.push("/sign-up");
  };

  const toUserPage = () => {
    history.push("/user");
  };

  return (
    <>
      <Header />
      <section className="login-section">
        <div className="container login-container">
          <div className="login-form-side">
            <div className="form-header-title">
              <div className="candidate-login-title">
                <h4
                  className={`${candidate ? "true" : ""} `}
                  onClick={chooseCandidate}
                >
                  Соискатель
                </h4>
              </div>
              <div className="employer-login-title">
                <h4
                  onClick={chooseEmployer}
                  className={`${employer ? "true" : ""} `}
                >
                  Работодатель
                </h4>
              </div>
            </div>
            <div className="form-header-description">
              <p>
                Пожалуйста, введите свою информацию в поля ниже, чтобы войти.
              </p>
            </div>
            <LogInForm />
            <div className="switch-to-registration">
              <p>
                Ещё нет учётной записи? <br />
                <span onClick={routeToSignUp}> Зарегистрируйтесь</span>
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
