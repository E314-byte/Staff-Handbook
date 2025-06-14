import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/sidebar.scss";

function question_admin({ URL }) {
  const src = "http://localhost:8080/api/question/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setQuestions(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о тесте
  const [question_id_Updata, setQuestion_id_Updata] = useState("");
  const [test_id_Updata, setTest_id_Updata] = useState("");
  const [textUpdata, setTextUpdata] = useState("");
  const [pointsUpdata, setPointsUpdata] = useState("");
  const [massageQuestionsUpdata, setMassageQuestionsUpdata] = useState("");

  const UpdataQuestions = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/question", {
        test_id_Updata,
        textUpdata,
        pointsUpdata,
        question_id_Updata,
      });
      setMassageQuestionsUpdata("Данные вопроса изменены");
      console.log("Данные вопроса изменены");
    } catch (error) {
      setMassageQuestionsUpdata("Не получилось изменить данные вопроса");
      console.log("Не получилось изменить данные вопроса", error);
    }
  };

  // для удаления теста
  const [isDeleting, setIsDeleting] = useState(0);
  const [massageIsDeleting, setMassageIsDeleting] = useState("");

  const DeleteQuestions = async (question_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/question/${question_id}/`
      );
      setMassageIsDeleting("Вопрос удален");
      console.log("Вопрос удален");
    } catch (error) {
      setMassageIsDeleting("Вопрос не удален");
      console.log("Вопрос не удален", error);
    }
  };

  // Создание теста
  //   const [question_id_Create, setQuestion_id_Create] = useState("");
  const [test_id_Create, setTest_id_Create] = useState("");
  const [textCreate, setTextCreate] = useState("");
  const [pointsCreate, setPointsCreate] = useState("");
  const [massageCreateQuestion, setMassageCreateQuestion] = useState("");

  const CreateQuestion = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/question/", {
        // question_id_Create,
        test_id_Create,
        textCreate,
        pointsCreate,
      });
      setMassageCreateQuestion("Вопрос создан");
      console.log("Вопрос создан");
    } catch (error) {
      setMassageCreateQuestion("Не получилось создать вопрос");
      console.log("Не получилось создать вопрос", error);
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
          <h1>Управление данными вопросов</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Test_id</th>
                <th>Text</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {Questions.map((item) => (
                <tr key={item.question_id}>
                  <td>{item.question_id}</td>
                  <td>{item.test_id}</td>
                  <td>{item.text}</td>
                  <td>{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reques_fun_queries_database">
          <div className="fun">
            <h1>Изменения данных вопроса</h1>
            <div className="input_parameters">
              {/* <br /> */}
              <label className="label">
                ID Вопроса
                <span style={{ color: "red" }}>(нельзя изменять)</span>
                <input
                  type="text"
                  placeholder="ID Вопроса"
                  value={question_id_Updata}
                  onChange={(e) => setQuestion_id_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                ID Теста
                <input
                  type="text"
                  placeholder="ID Теста"
                  value={test_id_Updata}
                  onChange={(e) => setTest_id_Updata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Текст вопроса
                <input
                  type="text"
                  placeholder="Текст вопроса"
                  value={textUpdata}
                  onChange={(e) => setTextUpdata(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Очки вопроса
                <input
                  type="text"
                  placeholder="Очки вопроса"
                  value={pointsUpdata}
                  onChange={(e) => setPointsUpdata(e.target.value)}
                ></input>
              </label>
              <button className="btn_submit_admin" onClick={UpdataQuestions}>
                изменить вопрос
              </button>
              <p>{massageQuestionsUpdata}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Удаления вопроса</h1>
            <div className="input_parameters">
              <label className="label">
                ID Вопроса
                <input
                  type="text"
                  placeholder="ID Вопроса"
                  value={isDeleting}
                  onChange={(e) => setIsDeleting(e.target.value)}
                ></input>
              </label>
              <button
                className="btn_submit_admin"
                onClick={() => DeleteQuestions(isDeleting)}
              >
                удалить вопрос
              </button>
              <p>{massageIsDeleting}</p>
            </div>
          </div>
          <div className="fun">
            <h1>Создания вопроса</h1>

            <div className="input_parameters">
              {/* <label className="label">
              ID Вопроса
              <input
                type="text"
                placeholder="ID Вопроса"
                value={question_id_Create}
                onChange={(e) => setQuestion_id_Create(e.target.value)}
              ></input>
            </label> */}
              <label className="label">
                ID Теста
                <input
                  type="text"
                  placeholder="ID Теста"
                  value={test_id_Create}
                  onChange={(e) => setTest_id_Create(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Текст
                <input
                  type="text"
                  placeholder="Текст"
                  value={textCreate}
                  onChange={(e) => setTextCreate(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Очки вопроса
                <input
                  type="text"
                  placeholder="Очки вопроса"
                  value={pointsCreate}
                  onChange={(e) => setPointsCreate(e.target.value)}
                ></input>
              </label>
              <button className="btn_submit_admin" onClick={CreateQuestion}>
                создать вопрос
              </button>
              <p>{massageCreateQuestion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default question_admin;
