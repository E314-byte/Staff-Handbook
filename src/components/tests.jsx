import React, { useEffect, useState } from "react";
import Questions from "./questions";
import axios from "axios";
import "./../css/staff_test.scss";
import { Link } from "react-router-dom";
// import { getTestQuestions } from "../../backend/API/controller/question.controller.cjs";
// const questionsController = require("../controller/question.controller.cjs");

function Tests() {
  const src1 = "http://localhost:8080/api/tests/";
  const [Tests, setTests] = useState([]);
  useEffect(() => {
    axios.get(src1).then((data) => {
      setTests(data.data);
    });
  }, []);

  const src = "http://localhost:8080/api/question/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setQuestions(data.data);
    });
  }, []);

  const clickTest = (Questions, Tests) => {
    // alert("привет епта!");
    // <Questions />;
  };

  return (
    <>
      <section>
        <div className="answers">
          {Tests.filter((tests) => (
            <label className="answer">
              <Link to="/questions" onClick={clickTest}>
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
