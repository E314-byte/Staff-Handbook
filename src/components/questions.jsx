import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Answers from "../components/answers";
import Headr from "../components/header";
import Footer from "../components/footer";
import App from "../App";
import "./../css/staff_test.scss";

function Questions({ setTest, URL }) {
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
    axios.post("", {
      test_id: Params.id,
      answer_select,
    });
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
        <Headr />
        {QuestionsAndTest.map((question) => (
          <div key={question.question_id} className="question">
            <div>
              <h1>{question.text}</h1>
              <p>{question.points}</p>
            </div>
            <hr />
            <Answers
              setTest={question.question_id}
              OnSelect={handleSelectAnswer}
            />
            {/* <div className="answers">
              Выберите ответ
              <label className="answer">
                <input type="radio" name="radio" value={1} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis provident quae maiores facere nam enim sit, suscipit
                nihil ipsa impedit, ex quos similique vitae vero ratione tempora
                harum repellendus ea.
              </label>
              <label>
                <input type="radio" name="radio" value={2} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis provident quae maiores facere nam enim sit, suscipit
                nihil ipsa impedit, ex quos similique vitae vero ratione tempora
                harum repellendus ea.
              </label>
              <label>
                <input type="radio" name="radio" value={1} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis provident quae maiores facere nam enim sit, suscipit
                nihil ipsa impedit, ex quos similique vitae vero ratione tempora
                harum repellendus ea.
              </label>
              <label>
                <input type="radio" name="radio" value={1} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis provident quae maiores facere nam enim sit, suscipit
                nihil ipsa impedit, ex quos similique vitae vero ratione tempora
                harum repellendus ea.
              </label>
              <label>
                <input type="radio" name="radio" value={1} />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis provident quae maiores facere nam enim sit, suscipit
                nihil ipsa impedit, ex quos similique vitae vero ratione tempora
                harum repellendus ea.
              </label>
            </div> */}
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
