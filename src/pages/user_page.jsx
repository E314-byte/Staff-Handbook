import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/profile.scss";

function User_page() {
  const user_user_string = localStorage.getItem("user");
  const user_user = JSON.parse(user_user_string);

  const src = "http://localhost:8080/api/results/";
  const [Results, setResults] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log("то что есть в get запросе по результатам", data.data);
      setResults(data.data);
    });
  }, []);

  const srcUser = "http://localhost:8080/api/user/";
  const [ResultsUser, setResultsUser] = useState([]);
  useEffect(() => {
    axios.get(srcUser).then((dataUser) => {
      console.log("получил по id пользователя от результата", dataUser);
      setResultsUser(dataUser.data);
      console.log(ResultsUser);
    });
  }, [Results]);

  const [ResultsUserOne, setResultsUserOne] = useState([]);
  useEffect(() => {
    const UserOne = ResultsUser.filter((userOne) => {
      userOne.use_id == user_user.id_user.user_id;
    });
    setResultsUserOne(UserOne);
    console.log("один пользователь через фильтр", ResultsUserOne);
  }, [ResultsUser, , user_user.id_user.user_id]);

  console.log("пользователь на профеле", user_user.id_user.user_id);

  const [byTestId, setByTestId] = useState([]);
  useEffect(() => {
    const userTestResults = Results.filter(
      (userTest) => userTest.user_id == user_user.id_user.user_id
    );

    // console.log("отфильтрованный массив", userTest);
    setByTestId(userTestResults);
    console.log("что-то по результатам", userTestResults);
  }, [Results, user_user.id_user.user_id]);

  return (
    <>
      <section>
        <Header />
        <div className="container_profile">
          {byTestId.map((results) => (
            <div className="content_profile" key={results.results_id}>
              <div>{results.user_id}Имя пользователя</div>
              <div>{results.test_id}Тест, который он проходил</div>
              <div>
                {results.score}/{results.max_score}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
}

export default User_page;
