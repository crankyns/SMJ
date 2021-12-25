// import { FacebookLink } from "../../Links/FacebookLink";
// import { InstagramLink } from "../../Links/InstagramLink";
// import { TwitterLink } from "../../Links/TwitterLink";

export const UserPersonalInfo = () => {
  return (
    <div className="user-personal-info-side">
      <div className="profile-photo-name-and-links">
        <div className="profile-photo"></div>
        <div className="user-name">
          <h6>Иван Иванович Иванов</h6>
        </div>
        <div className="user-personal-links">
          <ul>
            {/* <FacebookLink className="facebook-user-link" /> */}
            <li className="facebook-user-link">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            {/* <InstagramLink className="instagram-user-link" /> */}
            <li className="instagram-user-link">
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            {/* <TwitterLink className="twitter-user-link" /> */}
            <li className="twitter-user-link">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="user-profile-information">
        <ul>
          <li>
            <p className="item-title">Уровень</p>
            <p className="item-descp">Junior</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li>
            <p className="item-title">Позиция</p>
            <p className="item-descp">UI/UX Designer</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li>
            <p className="item-title">Пол</p>
            <p className="item-descp">Мужской</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li>
            <p className="item-title">Телефон</p>
            <p className="item-descp">+375291234567</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li>
            <p className="item-title">E-mail</p>
            <p className="item-descp">ivanivanov@gmail.com</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li>
            <p className="item-title">Страна</p>
            <p className="item-descp">Беларусь</p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
          <li className="work-expirience">
            <p className="item-title">Опыт работы</p>
            <p className="item-descp">
              <ul className="work-descp">
                <li className="work-company-name">
                  <p>ОАО "Минский автомобильный завод"- управляющая компания</p>
                </li>
                <li>
                  <p>Инженер-конструктор</p>
                </li>
                <li className="work-responsobilities">
                  <p>Обязанности:</p>
                  <ul>
                    <li>
                      <p>
                        * Разработка / создание 3D моделей и 2D чертежей,
                        осуществление авторского конструкторского надзора за
                        изготовлением разработанных изделий, работа с
                        поставщиками.
                      </p>
                    </li>
                    <p>Достижения:</p>
                    <li>
                      <p>
                        * Участие в разработке и сборке опытного образца
                        автобуса третьего поколения.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className="edit-item">
              <i class="fas fa-pencil-alt"></i>Изменить
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
