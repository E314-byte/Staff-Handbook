import React, { useRef } from "react";
import isEqual from "lodash/isEqual";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/interactive_tasks.scss";
import "../css/staff_test.scss";

function Interactive_tasks() {
  // h5p-actions
  const down_element = document.getElementsByClassName(
    "h5p-container h5p-standalone h5p-image-pair"
  );
  console.log("элемент по классу", down_element);
  for (let i = 0; i < down_element.length; i++) {
    // Обработка каждого элемента
    console.log(down_element[i]);
  }

  const ref = useRef(null);
  console.log("ref", ref.current?.contentWindow.document);

  return (
    <>
      <Header />

      <section>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/216781"
            width="1223"
            height="426"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Выберете правильный провод"
            ref={ref}
          ></iframe>
        </div>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/219860"
            width="1223"
            height="375"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Перетащите изображения слева, чтобы сопоставить их с соответствующими изображениями справа."
          ></iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/219110"
            width="1223"
            height="528"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Расположите в правильной последовательности"
          ></iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/210037"
            width="1403"
            height="427"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Вопрос правда или ложь по сборке компьютера"
          ></iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/219857"
            width="1223"
            height="1079"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Найти"
          ></iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/64119"
            width="1223"
            height="1143"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Устройство компьютера"
          ></iframe>
          <script
            src="https://udoba.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
            charset="UTF-8"
          ></script>
        </div>
        {/* Видио */}
        <div className="interactive_task">
          <iframe
            src="https://udoba.org/h5p/embed/210001"
            width="1403"
            height="996"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="Вопрос правда или ложь по сборке компьютера"
          ></iframe>
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
