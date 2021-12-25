import { useState } from "react";
import { Link } from "react-router-dom";
import { InputItem } from "../Inputs/InputItem";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleInputLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="sign-up-form">
      <div className="personal-info-inputs-raw">
        <InputItem
          itemInputClass="name-input"
          itemLabelClass="name-label"
          itemInputLabelClass="name-input-label"
          lableFor="user-name-input"
          lableName="Имя"
          moreInfoName="more-info-username"
          inputType="text"
          inputId="user-name-input"
          inputPlaceholder="Иван"
          inputValue={name}
          onChange={handleInputName}
        />
        <InputItem
          itemInputClass="surname-input"
          itemLabelClass="surname-label"
          itemInputLabelClass="surname-input-label"
          lableFor="user-surname-input"
          lableName="Фамилия"
          moreInfoName="more-info-user-surname"
          inputType="text"
          inputId="user-surname-input"
          inputPlaceholder="Иванов"
          inputValue={surname}
          onChange={handleInputSurname}
        />
      </div>
      <div className="user-set-inputs-raw">
        <InputItem
          itemInputClass="login-input"
          itemLabelClass="login-label"
          itemInputLabelClass="login-input-label"
          lableFor="login-input"
          lableName="Логин"
          moreInfoName="more-info-login"
          inputType="tel"
          inputId="login-input"
          inputPlaceholder="+375291234567"
          inputValue={login}
          onChange={handleInputLogin}
        />
        <InputItem
          itemInputClass="password-input"
          itemLabelClass="password-label"
          itemInputLabelClass="password-input-label"
          lableFor="password-input"
          lableName="Пароль"
          moreInfoName="more-info-password"
          inputType="password"
          inputId="password-input"
          inputPlaceholder="1234567"
          inputValue={password}
          onChange={handleInputPassword}
        />
      </div>
      <div className="sing-up-form-bottom">
        <div className="inner">
          <div className="accept-terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="terms-label">
              <p>
                Я согласен с
                <Link to="terms">
                  <span> условиями</span>
                </Link>
              </p>
            </label>
          </div>
          <button type="submit" onClick={onSubmit}>
            Регистрация
          </button>
        </div>
      </div>
    </form>
  );
};
