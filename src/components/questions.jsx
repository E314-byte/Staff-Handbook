import React, { useEffect, useState } from "react";
import axios from "axios";
import Answers from "../components/answers";
import Headr from "../components/header";
import Footer from "../components/footer";
import App from "../App";
import "./../css/staff_test.scss";

function Questions({ setTest }) {
  const [QuestionsAndTest, setQuestionsAndTest] = useState([]);

  const src = "http://localhost:8080/api/question/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log(data.data);
      setQuestions(data.data);
    });
  }, []);
  useEffect(() => {
    const qat = Questions.filter((sss) => sss.test_id == setTest);
    console.log(qat);
    console.log(setQuestionsAndTest);
    console.log(QuestionsAndTest);
    setQuestionsAndTest(qat);
  }, [Questions]);

  return (
    <>
      <section>
        <Headr />
        {QuestionsAndTest.map((question) => (
          <div className="question">
            <div key={question.question_id}>
              <h1>{question.text}</h1>
              {/* <h1>{question.test_id}</h1> */}
              {/* <p>{question.points}</p> */}
            </div>
            <hr />
            <Answers setTest={6} />
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
        <button className="button_test" type="submit">
          Подтвердить
        </button>
        <Footer />
      </section>
    </>
  );
}

export default Questions;
