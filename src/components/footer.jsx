import React from "react";
import logo from "../../public/react.svg";
import "../css/footer.scss"

function Footer (){
    return(
        <>
            <footer>
                <img src={logo} className="logo" alt="React logo"/>
                <div className="header-menu">
                    <div className="menu-item">Тест</div>
                    <div className="menu-item">Справочный материал</div>
                    <div className="menu-item">Видио уроки</div>
                    <div className="menu-item">Профиль</div>
                </div>
            </footer>
        </>
    )
}

export default Footer