import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const UpdataQuestions = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/question", {
        question_id_Updata,
        test_id_Updata,
        textUpdata,
        pointsUpdata,
      });
      console.log("Данные изменены");
    } catch (error) {
      console.log(error);
      console.log("не получилось изменить данные");
    }
  };

  // для удаления теста
  const [isDeleting, setIsDeleting] = useState(0);

  const DeleteQuestions = async (question_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/question/${question_id}/`
      );
      console.log("Вопрос удален");
    } catch (error) {
      console.log("Вопрос не удален");
    }
  };

  // Создание теста
  //   const [question_id_Create, setQuestion_id_Create] = useState("");
  const [test_id_Create, setTest_id_Create] = useState("");
  const [textCreate, setTextCreate] = useState("");
  const [pointsCreate, setPointsCreate] = useState("");

  const CreateQuestion = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/question/", {
        // question_id_Create,
        test_id_Create,
        textCreate,
        pointsCreate,
      });
      console.log("Вопрос создан");
    } catch (error) {
      console.error(error);
      console.log("не получилось создать Вопрос");
    }
  };

  return (
    <>
      {/* <div className="container"> */}

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
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default question_admin;
