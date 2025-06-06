import React from "react";
import Iframe from "react-iframe";
import Header from "../components/header";
import Footer from "../components/footer";
import Tests from "../components/tests";
import Questions from "../components/questions";
import "./../css/staff_test.scss";

function Staff_Test() {
  return (
    <>
      <Header />
      <Tests />
      {/* <Iframe
        url="https://h5p.org/h5p/embed/62814"
        width="1090"
        height="268"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
        title="True/False Question"
      />
      <script
        src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"
        charset="UTF-8"
      ></script> */}
      {/* <Questions /> */}
      <Footer />
    </>
  );
}

export default Staff_Test;
