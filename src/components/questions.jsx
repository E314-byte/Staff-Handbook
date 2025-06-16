import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Answers from "../components/answers";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/staff_test.scss";

function Questions({ URL }) {
  const Params = useParams();
  console.log(Params);

  const [QuestionsAndTest, setQuestionsAndTest] = useState([]);
  const [answer_select, setAnswer_select] = useState({});

  const handleSelectAnswer = (answer_id, value_answer) => {
    setAnswer_select({ ...answer_select, [answer_id]: value_answer });
  };
  console.log(answer_select);

  // прописать
  const sendData = () => {
    try {
      axios.post("http://localhost:8080/point/sum", {
        test_id: Params.id,
        answer_select,
      });
      console.log("Данные успешно отправлены");
    } catch (error) {
      console.error("Ошибка при отправке");
    }
  };

  const src = "http://localhost:8080/api/" + URL + "/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log(data.data);
      setQuestions(data.data);
    });
  }, []);

  useEffect(() => {
    const qat = Questions.filter((sss) => sss.test_id == Params.id);
    // console.log(qat);
    // console.log(setQuestionsAndTest);
    // console.log(QuestionsAndTest);
    setQuestionsAndTest(qat);
  }, [Questions, Params.id]);

  return (
    <>
      <section>
        <Header />
        {QuestionsAndTest.map((question) => (
          <div key={question.question_id} className="question">
            <div>
              <h1>{question.text}</h1>
              <div>{question.points}</div>
            </div>
            <hr />
            <Answers
              setTest={question.question_id}
              OnSelect={handleSelectAnswer}
            />
          </div>
        ))}
        <button className="button_test" type="button" onClick={sendData}>
          Подтвердить
        </button>
        <Footer />
      </section>
    </>
  );
}

export default Questions;
