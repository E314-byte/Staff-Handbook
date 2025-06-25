import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
// import User_admin from "./components/user_admin";
// import Test_admin from "./components/test_admin";
// import Question_admin from "./components/question_admin";
// import Answer_admin from "./components/answer_admin";
import "./css/adminPanel.scss";

function AdminPanel() {
  const src = "http://localhost:8080/api/user/";
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setUser(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о пользовате
  const [user_id_Updata, setUser_id_Updata] = useState("");
  const [username_Updata, setUsername_Updata] = useState("");
  const [email_Updata, setEmail_Updata] = useState("");
  const [password_hash_Updata, setPassword_hash_Updata] = useState("");
  const [massageUserUpdata, setMassageUserUpdata] = useState("");

  const UpdataUser = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/user", {
        username_Updata,
        email_Updata,
        password_hash_Updata,
        user_id_Updata,
      });
      setMassageUserUpdata("Данные пользователя изменены");
      console.log("Данные пользователя изменены");
    } catch (error) {
      setMassageUserUpdata("Не получилось изменить данные пользователя");
      console.log("Не получилось изменить данные пользователя", error);
    }
  };

  // для удаления
  const [isDeleting, setIsDeleting] = useState(0);
  const [massageIsDeleting, setMassageIsDeleting] = useState("");

  const DeleteUser = async (user_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/user/${user_id}/`
      );
      setMassageIsDeleting("Пользователь удален");
      console.log("Пользователь удален");
    } catch (error) {
      setMassageIsDeleting("Пользователь не удален");
      console.log("Пользователь не удален", error);
    }
  };

  // Создание пользователя
  const [username_CreateUser, setUsername_CreateUser] = useState("");
  const [email_CreateUser, setEmail_CreateUser] = useState("");
  const [password_hash_CreateUser, setPassword_hash_CreateUser] = useState("");
  const [massageCreateUser, setMassageCreateUser] = useState("");

  const CreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/user", {
        username_CreateUser,
        email_CreateUser,
        password_hash_CreateUser,
      });
      setMassageCreateUser("Пользователь создан");
      console.log("Пользователь создан");
    } catch (error) {
      setMassageCreateUser("Не получилось создать пользователя");
      console.log("Не получилось создать пользователя", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1 className="h1_adminPanel">Админ панель</h1>
          <ul>
            <li>
              <Link to="/admin/user_admin">
                <div className="admin_panel_items">Пользователь</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/categories_admin">
                <div className="admin_panel_items">Категории тестов</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/test_admin">
                <div className="admin_panel_items">Тесты</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/question_admin">
                <div className="admin_panel_items">Вопросы</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/answer_admin">
                <div className="admin_panel_items">Ответы</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="table_user_admin">
          <h1>Управление данными пользователей</h1>
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
        <div className="reques_fun_queries_database">
          <div className="fun">
            {/* <br /> */}
            <div className="input_parameters">
              <h1>Изменения данных пользователя</h1>

              <label className="label">
                ID Пользователя
                <span style={{ color: "red" }}>(нельзя изменять)</span>
                <input
                  type="text"
                  placeholder="ID Пользователя"
                  value={user_id_Updata}
                  onChange={(e) => setUser_id_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Имя пользователя
                <input
                  type="text"
                  placeholder="Имя"
                  value={username_Updata}
                  onChange={(e) => setUsername_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Почта
                <input
                  type="text"
                  placeholder="Почта"
                  value={email_Updata}
                  onChange={(e) => setEmail_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Пароль
                <input
                  type="password"
                  placeholder="пароль"
                  value={password_hash_Updata}
                  onChange={(e) => setPassword_hash_Updata(e.target.value)}
                ></input>
              </label>
              <button className="btn_submit_admin" onClick={UpdataUser}>
                изменить пользователя
              </button>
              <p>{massageUserUpdata}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Удаления пользователя</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                ID пользователя
                <input
                  type="text"
                  placeholder="ID пользователя"
                  value={isDeleting}
                  onChange={(e) => setIsDeleting(e.target.value)}
                ></input>
              </label>
              <button
                className="btn_submit_admin"
                onClick={() => DeleteUser(isDeleting)}
              >
                удалить пользователя
              </button>
              <p>{massageIsDeleting}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Создания пользователя</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                Имя пользователя
                <input
                  type="text"
                  placeholder="Имя"
                  value={username_CreateUser}
                  onChange={(e) => setUsername_CreateUser(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Почта
                <input
                  type="text"
                  placeholder="Почта"
                  value={email_CreateUser}
                  onChange={(e) => setEmail_CreateUser(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Пароль
                <input
                  type="password"
                  placeholder="пароль"
                  value={password_hash_CreateUser}
                  onChange={(e) => setPassword_hash_CreateUser(e.target.value)}
                ></input>
              </label>
              <button className="btn_submit_admin" onClick={CreateUser}>
                создать пользователя
              </button>
              <p>{massageCreateUser}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminPanel;
