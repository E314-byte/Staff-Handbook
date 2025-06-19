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
      <Tests URL={"tests"} />
      <Footer />
    </>
  );
}

export default Staff_Test;
