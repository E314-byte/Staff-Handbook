import React, { useEffect, useState } from "react";
import axios from "axios";

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
 

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");
  const Put = async () => {
    try {
      const respons = await axios.put("http://localhost:8080/api/user", {
        username,
        email,
        password_hash,
      });
      console.log("что-то получилось");
    } catch (error) {
      console.log(error);
    }
  };

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
          <div>
            <h1>Админ панель</h1>
            <br />
            <label>
              Имя пользователя
              <input
                type="text"
                placeholder="Имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label>
              Почта
              <input
                type="text"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label>
              Пароль
              <input
                type="password"
                placeholder="пароль"
                value={password_hash}
                onChange={(e) => setPassword_hash(e.target.value)}
              ></input>
            </label>
          </div>
          <button onClick={Put}>изменить пользователя</button>
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
