import React, { useState } from "react";

export const MainSection = () => {
  const [search, setSearch] = useState("");

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <section className="main">
      <div className="container main-container-39">
        <div className="left-side">
          <div className="main-title">
            <h5>
              Не сомневайся, ты именно тот. <br />
              Работа найдётся и для тебя!
            </h5>
          </div>
          <div className="main-input-search">
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={handleInputSearch}
            />
            <button>Поиск работы</button>
          </div>
          <div className="global-count-list">
            <div className="list-item vacancies-item">
              <p className="item-number vacancies-number">10000</p>
              <p className="item-text vacancies-text">Вакансий</p>
            </div>
            <div className="list-item cv-item">
              <p className="item-number cv-number">5000</p>
              <p className="item-text cv-text">Резюме</p>
            </div>
            <div className="list-item candidates-item">
              <p className="item-number candidates-number">2000</p>
              <p className="item-text candidates-text">Соискателей</p>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </section>
  );
};
