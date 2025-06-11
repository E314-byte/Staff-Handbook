import React from "react";
import { Link, Links } from "react-router-dom";
import logo from "../assets/soldering-iron.png";
import "../css/footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <Link to="/">
          <img src={logo} className="logo" alt="React logo" />
        </Link>
        <div className="header-menu">
          <div className="menu-item">
            <Link to="/">Главная</Link>
          </div>
          <div className="menu-item">
            <Link to="/test">Тест</Link>
          </div>
          <div className="menu-item">
            <Link to="/reference_material">Справочный материал</Link>
          </div>
          <div className="menu-item">
            <Link to="/interactive_tasks">Интерактивные задания</Link>
          </div>
          <div className="menu-item">Профиль</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
