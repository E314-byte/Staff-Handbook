import React, { useEffect, useState } from "react";
import axios from "axios";
import User_admin from "./components/user_admin";
import Test_admin from "./components/test_admin";
// import "./css/sidebar.scss";

function AdminPanel({ URL }) {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1>Админ панель</h1>
          <ul>
            <li>
              <a href="#">Пользователь</a>
            </li>
            <li>
              <a href="#">Категории тестов</a>
            </li>
            <li>
              <a href="#">Тесты</a>
            </li>
            <li>
              <a href="#">Вопросы</a>
            </li>
            <li>
              <a href="#">Ответы</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <User_admin />
          <Test_admin />
        </div>
      </div>
    </>
  );
}
export default AdminPanel;
