import React from "react";
import { Link, Links } from "react-router-dom";
import logo from "../../public/react.svg";
import "../css/header.scss"

function Header () {
    return(
        <>
        <header>
            <Link to="/"><img src={logo} className="logo" alt="React logo"/></Link>
            <div className="header-menu">
                <div className="menu-item"><Link to="/">Главная</Link></div>
                <div className="menu-item">Тест</div>
                <div className="menu-item"><Link to="/reference_material">Справочный материал</Link></div>
                <div className="menu-item">Видио уроки</div>
                <div className="menu-item">Профиль</div>
            </div>
        </header>
        </>
    )
    
}

export default Header