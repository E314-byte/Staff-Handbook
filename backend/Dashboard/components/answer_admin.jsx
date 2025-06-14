import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/sidebar.scss";

function answer_admin({ URL }) {
  const src = "http://localhost:8080/api/answer/";
  const [Answer, setAnswer] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setAnswer(data.data);
      console.log(data.data);
    });
  }, []);

  // для изменения данных о тесте
  const [answer_id_Updata, setAnswer_id_Updata] = useState("");
  const [question_id_Updata, setQuestion_id_Updata] = useState("");
  const [textUpdata, setTextUpdata] = useState("");
  const [correctUpdata, setCorrectUpdata] = useState("");

  const UpdataAnswer = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/answer", {
        answer_id_Updata,
        question_id_Updata,
        textUpdata,
        correctUpdata,
      });
      console.log("Данные изменены");
    } catch (error) {
      console.log(error);
      console.log("не получилось изменить данные");
    }
  };

  // для удаления теста
  const [isDeleting, setIsDeleting] = useState(0);

  const DeleteAnswer = async (answer_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/answer/${answer_id}/`
      );
      console.log("Ответ удален");
    } catch (error) {
      console.log("Ответ не удален");
    }
  };

  // Создание теста
  // const [test_id_Create, setTest_id_Create] = useState("");
  const [question_id_Create, setQuestion_id_Create] = useState("");
  const [textCreate, setTextCreate] = useState("");
  const [correctCreate, setCorrectCreate] = useState("");

  const CreateAnswer = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/answer/", {
        question_id_Create,
        textCreate,
        correctCreate,
      });
      console.log("Ответ создан");
    } catch (error) {
      console.error(error);
      console.log("не получилось создать Ответ");
      // console.log(correctCreate);
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
              <th>Question_id</th>
              <th>Text</th>
              <th>Correct</th>
            </tr>
          </thead>
          <tbody>
            {Answer.map((item) => (
              <tr key={item.answer_id}>
                <td>{item.answer_id}</td>
                <td>{item.question_id}</td>
                <td>{item.text}</td>
                <td>{item.is_correct ? "true" : "false"}</td>
                {/* <td>{console.log(item.is_correct)}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="reques_fun_queries_database">
        <div className="fun">
          <h1>Изменения данных ответа</h1>
          <div className="input_parameters">
            {/* <br /> */}
            <label className="label">
              ID Ответа
              <input
                type="text"
                placeholder="ID Ответа"
                value={answer_id_Updata}
                onChange={(e) => setAnswer_id_Updata(e.target.value)}
              ></input>
            </label>
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
              Текст ответа
              <input
                type="text"
                placeholder="Текст ответа"
                value={textUpdata}
                onChange={(e) => setTextUpdata(e.target.value)}
              ></input>
            </label>
            <label className="label">
              Правильность ответа
              <input
                type="text"
                placeholder="Правильность ответа"
                value={correctUpdata}
                onChange={(e) =>
                  setCorrectUpdata(e.target.value ? "true" : "false")
                }
              ></input>
            </label>
            <button className="btn_submit_admin" onClick={UpdataAnswer}>
              изменить ответ
            </button>
          </div>
        </div>
        <div className="fun">
          <h1>Удаления ответа</h1>
          <div className="input_parameters">
            <label className="label">
              ID Ответа
              <input
                type="text"
                placeholder="ID Ответа"
                value={isDeleting}
                onChange={(e) => setIsDeleting(e.target.value)}
              ></input>
            </label>
            <button
              className="btn_submit_admin"
              onClick={() => DeleteAnswer(isDeleting)}
            >
              удалить вопрос
            </button>
          </div>
        </div>
        <div className="fun">
          <h1>Создания ответа</h1>

          <div className="input_parameters">
            <label className="label">
              ID Вопроса
              <input
                type="text"
                placeholder="ID Вопроса"
                value={question_id_Create}
                onChange={(e) => setQuestion_id_Create(e.target.value)}
              ></input>
            </label>
            {/* <label className="label">
              ID Вопроса
              <input
                type="text"
                placeholder="ID Вопроса"
                value={test_id_Create}
                onChange={(e) => setTest_id_Create(e.target.value)}
              ></input>
            </label> */}
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
              Правильность ответа
              <input
                type="text"
                placeholder="Правильность ответа"
                value={correctCreate}
                onChange={(e) =>
                  setCorrectCreate(e.target.value ? "true" : "false")
                }
              ></input>
            </label>
            <button className="btn_submit_admin" onClick={CreateAnswer}>
              создать ответ
            </button>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default answer_admin;
