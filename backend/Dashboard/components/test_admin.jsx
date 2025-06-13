import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/sidebar.scss";

function test_admin({ URL }) {
  const src = "http://localhost:8080/api/test/";
  const [Test, setTest] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setTest(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о тесте
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");

  const UpdataTest = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/test/", {
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

  const DeleteTest = async (test_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/test/${test_id}/`
      );
      console.log("пользователь удален");
      console.log(test_id);
    } catch (error) {
      console.log("пользователь не удален");
      console.log(test_id);
    }
  };

  // Создание пользователя
  const [username1, setUsername1] = useState("");
  const [email1, setEmail1] = useState("");
  const [password_hash1, setPassword_hash1] = useState("");

  const CreateTest = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/test/", {
        username1,
        email1,
        password_hash1,
      });
      console.log("Тест создан");
    } catch (error) {
      console.error(error);
      console.log("не получилось создать тест");
    }
  };

  return (
    <>
      {/* <div className="container"> */}

      <div className="table_user_admin">
        <h1>Управление данными теста</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category_ID</th>
              <th>created_by</th>
            </tr>
          </thead>
          <tbody>
            {Test.map((item) => (
              <tr key={item.test_id}>
                <td>{item.test_id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category_id}</td>
                <td>{item.category_id}</td>
                <td>{item.created_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="reques_fun_queries_database">
        <div className="fun">
          <div className="input_parameters">
            <h1>Изменения данных теста</h1>
            {/* <br /> */}
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
            <button className="btn_submit_admin" onClick={UpdataTest}>
              изменить тест
            </button>
          </div>
        </div>
        <div className="fun">
          <h1>Удаления тест</h1>
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
              onClick={() => DeleteTest(isDeleting)}
            >
              удалить тест
            </button>
          </div>
        </div>
        <div className="fun">
          <h1>Создания теста</h1>
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
            <button className="btn_submit_admin" onClick={CreateTest}>
              создать тест
            </button>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default test_admin;
