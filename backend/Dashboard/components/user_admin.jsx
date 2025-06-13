import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/sidebar.scss";

function user_admin({ URL }) {
  const src = "http://localhost:8080/api/user/";
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setUser(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о пользовате
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");

  const UpdataUser = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/user", {
        username,
        email,
        password_hash,
      });
      console.log("Данные изменены");
    } catch (error) {
      console.log(error);
      console.log("не получилось изменить данные");
    }
  };

  // для удаления
  const [isDeleting, setIsDeleting] = useState(0);

  const DeleteUser = async (user_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/user/${user_id}/`
      );
      console.log("пользователь удален");
      console.log(user_id);
    } catch (error) {
      console.log("пользователь не удален");
      console.log(user_id);
    }
  };

  // Создание пользователя
  const [username1, setUsername1] = useState("");
  const [email1, setEmail1] = useState("");
  const [password_hash1, setPassword_hash1] = useState("");

  const CreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/user", {
        username1,
        email1,
        password_hash1,
      });
      console.log("пользователь создан");
    } catch (error) {
      console.error(error);
      console.log("не получилось создать пользователя");
    }
  };

  return (
    <>
      {/* <div className="container"> */}

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
              Имя пользователя
              <input
                type="text"
                placeholder="Имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label className="label">
              Почта
              <input
                type="text"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label className="label">
              Пароль
              <input
                type="password"
                placeholder="пароль"
                value={password_hash}
                onChange={(e) => setPassword_hash(e.target.value)}
              ></input>
            </label>
            <button className="btn_submit_admin" onClick={UpdataUser}>
              изменить пользователя
            </button>
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
                value={username1}
                onChange={(e) => setUsername1(e.target.value)}
              ></input>
            </label>
            <label className="label">
              Почта
              <input
                type="text"
                placeholder="Почта"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              ></input>
            </label>
            <label className="label">
              Пароль
              <input
                type="password"
                placeholder="пароль"
                value={password_hash1}
                onChange={(e) => setPassword_hash1(e.target.value)}
              ></input>
            </label>
            <button className="btn_submit_admin" onClick={CreateUser}>
              создать пользователя
            </button>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default user_admin;
