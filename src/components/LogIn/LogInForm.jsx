import { useState } from "react";
import { Link } from "react-router-dom";
import { InputItem } from "../Inputs/InputItem";

export const LogInForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const rememberUser = () => {
    setRememberMe(!rememberMe);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="login-form">
      <InputItem
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
      <div className="forgotten-password">
        <Link to="/">
          <p>Забыли пароль?</p>
        </Link>
      </div>
      <div className="bottom-form">
        <div className="remember-me">
          <input type="checkbox" id="remember-me" onChange={rememberUser} />
          <label htmlFor="remember-me" className="remember-me-label">
            <p>Запомнить меня</p>
          </label>
        </div>
        <Link to="/user">
          <button type="submit" onClick={onSubmit}>
            Войти
          </button>
        </Link>
      </div>
    </form>
  );
};
