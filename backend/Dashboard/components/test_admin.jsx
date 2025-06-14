import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const [titleUpdata, setTitleUpdata] = useState("");
  const [descriptionUpdata, setDescriptionUpdata] = useState("");
  const [test_id, setTest_id] = useState("");
  const [massageTestUpdata, setMassageTestUpdata] = useState("");

  const UpdataTest = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/test", {
        titleUpdata,
        descriptionUpdata,
        test_id,
      });
      setMassageTestUpdata("Данные теста изменены");
      console.log("Данные теста изменены");
    } catch (error) {
      setMassageTestUpdata("не получилось изменить данные теста");
      console.log("не получилось изменить данные теста", error);
    }
  };

  // для удаления теста
  const [isDeleting, setIsDeleting] = useState(0);
  const [massageIsDeleting, setMassageIsDeleting] = useState("");

  const DeleteTest = async (test_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/test/${test_id}/`
      );
      setIsDeleting("тест удален");
      console.log("тест удален");
    } catch (error) {
      setIsDeleting("тест не удален");
      console.log("тест не удален", error);
    }
  };

  // Создание теста
  const [titleCreate, setTitleCreate] = useState("");
  const [descriptionCreate, setDescriptionCreate] = useState("");
  // const [password_hash1, setPassword_hash1] = useState("");
  const [massageCreateTest, setMassageCreateTest] = useState("");

  const CreateTest = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/test/", {
        titleCreate,
        descriptionCreate,
        // password_hash1,
      });
      setMassageCreateTest("Тест создан");
      console.log("Тест создан");
    } catch (error) {
      setMassageCreateTest("Не получилось создать тест");
      console.log("Не получилось создать тест", error);
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
                <div>Пользователь</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/categories_admin">
                <div>Категории тестов</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/test_admin">
                <div>Тесты</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/question_admin">
                <div>Вопросы</div>
              </Link>
            </li>
            <li>
              <Link to="/admin/answer_admin">
                <div>Ответы</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="table_user_admin">
          <h1>Управление данными теста</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category_ID</th>
                {/* <th>created_by</th> */}
              </tr>
            </thead>
            <tbody>
              {Test.map((item) => (
                <tr key={item.test_id}>
                  <td>{item.test_id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.category_id}</td>
                  {/* <td>{item.created_by}</td> */}
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
                ID теста
                <span style={{ color: "red" }}>(нельзя изменять)</span>
                <input
                  type="text"
                  placeholder="ID теста"
                  value={test_id}
                  onChange={(e) => setTest_id(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Заголовок
                <input
                  type="text"
                  placeholder="Заголовок"
                  value={titleUpdata}
                  onChange={(e) => setTitleUpdata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Описание
                <input
                  type="text"
                  placeholder="Описание"
                  value={descriptionUpdata}
                  onChange={(e) => setDescriptionUpdata(e.target.value)}
                ></input>
              </label>
              <button className="btn_submit_admin" onClick={UpdataTest}>
                изменить тест
              </button>
              <p>{massageTestUpdata}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Удаления тест</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                ID теста
                <input
                  type="text"
                  placeholder="ID теста"
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
              <p>{massageIsDeleting}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Создания теста</h1>
            {/* <br /> */}
            <div className="input_parameters">
              <label className="label">
                Заголовок
                <input
                  type="text"
                  placeholder="Заголовок"
                  value={titleCreate}
                  onChange={(e) => setTitleCreate(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Описание
                <input
                  type="text"
                  placeholder="Описание"
                  value={descriptionCreate}
                  onChange={(e) => setDescriptionCreate(e.target.value)}
                ></input>
              </label>
              {/* <label className="label">
              Пароль
              <input
                type="password"
                placeholder="пароль"
                value={password_hash1}
                onChange={(e) => setPassword_hash1(e.target.value)}
              ></input>
            </label> */}
              <button className="btn_submit_admin" onClick={CreateTest}>
                создать тест
              </button>
              <p>{massageCreateTest}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default test_admin;
