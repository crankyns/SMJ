import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  const [candidate, setCandidate] = useState(true);
  const [employer, setEmployer] = useState(false);

  const chooseCandidate = () => {
    setCandidate(true);
    setEmployer(false);
  };
  const chooseEmployer = () => {
    setEmployer(true);
    setCandidate(false);
  };

  return (
    <>
      <Header />
      <section className="sign-up-section">
        <div className="container sing-up-container">
          <div className="sign-up-form-side">
            <div className="form-header-title">
              <div className="candidate-sign-up-title">
                <h4
                  className={`${candidate ? "true" : ""} `}
                  onClick={chooseCandidate}
                >
                  Соискатель
                </h4>
              </div>
              <div className="employer-sign-up-title">
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
                Нам нужно, чтобы вы помогли нам с основной информацией для
                создания вашей учетной записи. Вот наши условия. Пожалуйста,
                прочтите их внимательно.
              </p>
            </div>
            <SignUpForm />
          </div>
          <div className="sign-up-background-pic-side"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
