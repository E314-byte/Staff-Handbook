import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "../App";
import "./../css/staff_test.scss";

function Answers({ setTest }) {
  const [AnswersAndQuestions, setAnswersAndQuestions] = useState([]);

  const src = "http://localhost:8080/api/answer/";
  const [Answers, setAnswers] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log(data.data);
      setAnswers(data.data);
    });
  }, []);
  useEffect(() => {
    const qat = Answers.filter((sss) => sss.question_id == setTest);
    console.log(qat);
    console.log(setAnswersAndQuestions);
    console.log(AnswersAndQuestions);
    setAnswersAndQuestions(qat);
  }, [Answers]);

  return (
    <>
      <section>
        {AnswersAndQuestions.map((answer) => (
          <div className="answers">
            <div key={answer.answer_id}>
              <p>Выберите ответ</p>
              <label className="answer">
                <input type="radio" name="radio" value={1} />
                {answer.text}
              </label>
            </div>
          </div>
        ))}
        {/* <button className="button_test" type="submit">
          Подтвердить
        </button> */}
      </section>
    </>
  );
}

export default Answers;
