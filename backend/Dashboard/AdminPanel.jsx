import React, { useEffect, useState } from "react";
import axios from "axios";
import Axios from "../axios";
import "./css/sidebar.scss";

function AdminPanel({ URL }) {
  const src = "http://localhost:8080/api/" + URL + "/";
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setUser(data.data);
      // console.log(data.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">Пользователь</a>
            </li>
            <li>
              <a href="#">Пункт меню 2</a>
            </li>
            <li>
              <a href="#">Пункт меню 3</a>
            </li>
            <li>
              <a href="#">Пункт меню 4</a>
            </li>
          </ul>
        </div>
        <div className="content">
          {/* <div>
            <h1>Админ панель</h1>
            <br />
            <label>
              Имя пользователя
              <input placeholder="Имя"></input>
            </label>
            <label>
              Пароль
              <input placeholder="Пароль"></input>
            </label>
          </div> */}
          <button>показать всех пользователей</button>
          <br />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password_hash</th>
              </tr>
            </thead>
            <tbody>
              {User.map((item) => (
                <tr key={item.user_id}>
                  <td>{item.user_id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password_hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminPanel;
