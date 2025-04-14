import React, { useEffect, useState } from "react";
import Questions from "./questions";
import axios from "axios";
import "./../css/staff_test.scss";
import { Link } from "react-router-dom";

function Tests() {
  const src = "http://localhost:8080/api/tests/";
  const [Tests, setTests] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setTests(data.data);
    });
  }, []);

  // const src = "http://localhost:8080/api/question/";
  // const [Questions, setQuestions] = useState([]);
  // useEffect(() => {
  //   axios.get(src).then((data) => {
  //     setQuestions(data.data);
  //   });
  // }, []);

  //ты сдесь
  // useEffect(() => {
  //   const QAT = Questions.filter((Questions) => Questions.test_id == 4);
  //   setQuestionsAndTest(QAT);
  // }, []);

  return (
    <>
      <section>
        <div className="answers">
          {Tests.map((tests) => (
            <label className="answer">
              <Link to="/questions" >
                <div key={tests.test_id}>
                  {tests.test_id}
                  {tests.title}
                  <p>{tests.description}</p>
                </div>
              </Link>
            </label>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tests;
