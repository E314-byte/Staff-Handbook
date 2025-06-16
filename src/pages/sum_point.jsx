import React from "react";
import "../css/sum_point.scss";

function Sum_point() {
  return (
    <>
      <section className="sum_point_section">
        <div>
          <div>Название теста</div>
          <div>58/100</div>
          <div>
            <span>✗</span>вопрос
          </div>
          <div>
            <span>✓</span>вопрос
          </div>
        </div>
      </section>
    </>
  );
}

export default Sum_point;
