import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Iframe from "react-iframe";
import "../css/interactive_tasks.scss";
import "../css/staff_test.scss";

function Interactive_tasks() {
  return (
    <>
      <Header />
      <section>
        <div className="interactive_task">
          <Iframe
            src="https://udoba.org/h5p/embed/216781"
            width="1223"
            height="426"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Выберете правильный провод"
          ></Iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
          {/* <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script> */}

          {/* <Iframe
            src="https://udoba.org/h5p/embed/209999"
            width="1403"
            height="512"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Вопрос правда или ложь по сборке компьютера"
          ></Iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script> */}
        </div>
        <div className="interactive_task">
          <Iframe
            src="https://udoba.org/h5p/embed/210001"
            width="1403"
            height="996"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Вопрос правда или ложь по сборке компьютера"
          ></Iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        <div className="interactive_task">
          <Iframe
            src="https://udoba.org/h5p/embed/210037"
            width="1403"
            height="427"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Вопрос правда или ложь по сборке компьютера"
          ></Iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Interactive_tasks;
