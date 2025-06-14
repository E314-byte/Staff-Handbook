import React, { useEffect, useState } from "react";
import Questions from "./questions";
import axios from "axios";
import "./../css/staff_test.scss";
import { Link } from "react-router-dom";

function Tests({ URL }) {
  const src = "http://localhost:8080/api/test/";
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
            <label key={tests.test_id} className="answer">
              <Link to={`/questions/${tests.test_id}`}>
                <div>
                  <h1>{tests.title}</h1>
                  <div>{tests.description}</div>
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
