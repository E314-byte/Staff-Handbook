import React from "react";
import "../css/welcome_info.scss";

function Welcome_Info() {
  return (
    <>
      <div className="info">
        <div className="info-title">
          Эти тесты разработаны с целью обучения и проверки знаний пользователя,
          работающего в компьютерных магазинах. Они охватывают ключевые аспекты,
          необходимые для в данной сферы.
        </div>
        <button className="button_test">Пройти тесты</button>
      </div>
    </>
  );
}

export default Welcome_Info;
