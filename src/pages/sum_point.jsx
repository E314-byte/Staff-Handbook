import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/sum_point.scss";

function Sum_point({ titleTest, total_points, PointsALL, answerQuestions }) {
  return (
    <>
      <Header />
      <section className="sum_point_section">
        <div>
          <h1>{titleTest}</h1>
          <div className="counter_point">
            {total_points}/{PointsALL}
          </div>
          <div>
            {answerQuestions.map((Questions) => (
              <div key={Questions.question_id}>
                <div className="questions_point">
                  {/* <span>✗</span> */}
                  {Questions.correctAnswer ? "✓" : "✗"}
                  {Questions.titleQuestion}
                </div>
                <div>{/* <span>✓</span>вопрос */}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sum_point;
