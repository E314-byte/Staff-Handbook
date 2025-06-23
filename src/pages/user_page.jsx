import React, { useEffect, useState } from "react";
import axios from "axios";
import isEqual from "lodash/isEqual";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/profile.scss";

function User_page() {
  const user_user_string = localStorage.getItem("user");
  const user_user = JSON.parse(user_user_string);
  console.log("user_user", user_user);

  const src = "http://localhost:8080/api/results/";
  const [Results, setResults] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log("то что есть в get запросе по результатам", data.data);
      setResults(data.data);
    });
  }, []);

  const srcTest = "http://localhost:8080/api/test/";
  const [Test, setTest] = useState([]);
  useEffect(() => {
    axios.get(srcTest).then((dataTest) => {
      console.log(
        "то что есть в get запросе по результатам с тестами",
        dataTest.data
      );
      setTest(dataTest.data);
    });
  }, []);

  const Test_id_by_Results = (test_id_results) => {
    const sss = Test.find((test_id) => {
      return test_id.test_id === test_id_results;
    });
    return sss;
  };
  // const [ResultsUser, setResultsUser] = useState([]);
  // useEffect(() => {
  //   axios.get(srcUser).then((dataUser) => {
  //     console.log("получил по id пользователя в результата", dataUser.data);
  //     setResultsUser(dataUser.data);
  //     // console.log("ResultsUser", ResultsUser);
  //   });
  // }, []);

  // ResultsUser.map((userOne) => {
  //   console.log(userOne);
  //   userOne === user_user.user_id;

  //   console.log("надеюсь один пользователь", ResultsUser);
  // });

  // // const [ResultsUserOne, setResultsUserOne] = useState([]);
  // useEffect(() => {
  //   if (isEqual(user_user, ResultsUser)) {
  //     console.log("они блять равны !!!!!!!!");
  //   }
  //   // const UserOne = ResultsUser.filter((userOne) => {
  //   //   userOne.user_id === user_user.user_id.user_id;
  //   // });
  //   // setResultsUserOne(UserOne);
  // }, [ResultsUser, user_user]);

  // console.log("пользователь на профеле", user_user.user_id.user_id);

  const [byTestId, setByTestId] = useState([]);
  useEffect(() => {
    const userTestResults = Results.filter(
      (userTest) => userTest.user_id == user_user.user_id
    );
    setByTestId(userTestResults);
    console.log("что-то по результатам", userTestResults);
  }, [Results, user_user.user_id.user_id]);

  return (
    <>
      <section>
        <Header />
        <div className="container_profile">
          {byTestId.map((results) => (
            <div className="content_profile" key={results.results_id}>
              <div>{user_user.username}</div>
              <div>
                Название теста: {Test_id_by_Results(results.test_id)?.title}
              </div>
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
