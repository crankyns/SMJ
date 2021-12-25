import { useState } from "react";
import { CounterCard } from "./CounterCard";

export const MainSection = () => {
  const [search, setSearch] = useState("");

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
          <form className="main-input-search" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={handleInputSearch}
            />
            <button type="submit">
              <p>Поиск работы</p>
            </button>
          </form>
          <div className="global-count-list">
            <CounterCard numberCount={"1000"} cardText={"Вакансии"} />
            <CounterCard numberCount={"5000"} cardText={"Резюме"} />
            <CounterCard numberCount={"2000"} cardText={"Соискателей"} />
          </div>
        </div>
        <div className="right-side"></div>
      </div>
    </section>
  );
};
