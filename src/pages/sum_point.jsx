import React, { useState } from "react";
import "../css/sum_point.scss";
import Questions from "../components/questions";
import Header from "../components/header";
import Footer from "../components/footer";

function Sum_point({ titleTest, total_points, PointsALL, answerQuestions }) {
  return (
    <>
      <Header />
      <section className="sum_point_section">
        <div>
          <div>{titleTest}</div>
          <div>
            {total_points}/{PointsALL}
          </div>
          <div>
            {answerQuestions.map((Questions) => (
              <div key={Questions.question_id}>
                <div>
                  {/* <span>✗</span> */}
                  {Questions.titleQuestion}
                  {Questions.correctAnswer ? "✓" : "✗"}
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
