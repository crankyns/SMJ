import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const UserProfile = () => {
  return (
    <>
      <Header />
      <section className="user-profile-section">
        <div className="container user-profile-container">
          <div className="user-personal-info-side">
            <div className="profile-photo-name-and-links">
              <div className="profile-photo"></div>
              <div className="user-name">
                <h6>Иван Иванович Иванов</h6>
              </div>
              <div className="user-personal-links">
                <ul>
                  <li className="facebook-user-link">
                    <a href="/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="instagram-user-link">
                    <a href="/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
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
                        <p>
                          ОАО "Минский автомобильный завод"- управляющая
                          компания
                        </p>
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
                              осуществление авторского конструкторского надзора
                              за изготовлением разработанных изделий, работа с
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
          <div className="user-special-recommendations-side">
            <div className="recommendations-for-user">
              <div className="recommendations-title">
                <h4>Рекомендации</h4>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-title">
                  <h5>Junior Sorftware Engineer</h5>
                </div>
                <div className="recommendation-salary">
                  <p>от 2500 до 300 бел. руб.</p>
                </div>
                <div className="recommendation-employer">
                  <p>Wargaming, Минск</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-title">
                  <h5>Junior Sorftware Engineer</h5>
                </div>
                <div className="recommendation-salary">
                  <p>от 2500 до 300 бел. руб.</p>
                </div>
                <div className="recommendation-employer">
                  <p>Wargaming, Минск</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-title">
                  <h5>Junior Sorftware Engineer</h5>
                </div>
                <div className="recommendation-salary">
                  <p>от 2500 до 300 бел. руб.</p>
                </div>
                <div className="recommendation-employer">
                  <p>Wargaming, Минск</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
