import React from "react";
import { Link, Links } from "react-router-dom";
import logo from "../assets/soldering-iron.png";
import "../css/header.scss";

function Header() {
  return (
    <>
      <header>
        <Link to="/home">
          <img src={logo} className="logo" alt="React logo" />
        </Link>
        <div className="header-menu">
          <Link to="/home">
            <div className="menu-item">Главная</div>
          </Link>
          <Link to="/test">
            <div className="menu-item">Тесты</div>
          </Link>
          <Link to="/reference_material">
            <div className="menu-item">Справочный материал</div>
          </Link>
          <Link to="/interactive_tasks">
            <div className="menu-item">Интерактивные задания</div>
          </Link>
          <Link to="/profile">
            <div className="menu-item">Профиль</div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
