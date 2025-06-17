import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/profile.scss";

function User_page() {
  const src = "http://localhost:8080/api/results/";
  const [Results, setResults] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setResults(data.data);
    });
  }, []);

  return (
    <>
      <section>
        <Header />
        <div className="container_profile">
          {Results.map((results) => (
            <div className="content_profile">
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
