import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../css/staff_test.scss";

function Questions() {
  const src = "http://localhost:8080/api/question/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      // console.log(data.data);
      setQuestions(data.data);
    });
  }, []);

  const src1 = "http://localhost:8080/api/tests/";
  const [Tests, setTests] = useState([]);
  useEffect(() => {
    axios.get(src1).then((data) => {
      setTests(data.data);
    });
  }, []);

  const clickTest = (Questions, Tests) => {
    // alert("привет епта!");
    console.log(Questions, Tests, 1);

    // <Questions />;
  };

  return (
    <>
      <section>
        {Questions.map((question) => (
          <div className="question">
            <div key={question.question_id}>
              <h1 onClick={clickTest}>{question.text}</h1>
              {/* <p>{question.points}</p> */}
            </div>
            <hr />
            <div className="answers">
              Выберите ответ
              <label className="answer">
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
            </div>
          </div>
        ))}
        <button className="button_test" type="submit">
          Подтвердить
        </button>
      </section>
    </>
  );
}

export default Questions;
