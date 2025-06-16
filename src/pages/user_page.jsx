import React from "react";
import "../css/profile.scss";
function User_page() {
  return (
    <>
      <section>
        <div className="container_profile">
          <div className="content_profile">
            <div>Имя пользователя</div>
            <div>Тест, который он проходил</div>
            <div>Результаты теста, баллы</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User_page;
