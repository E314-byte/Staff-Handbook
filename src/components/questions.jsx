import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Answers from "../components/answers";
import Header from "../components/header";
import Footer from "../components/footer";
import Sum_point from "../pages/sum_point";
import "../css/staff_test.scss";

function Questions({ URL }) {
  const Params = useParams();
  console.log(Params);

  const [QuestionsAndTest, setQuestionsAndTest] = useState([]);
  const [answer_select, setAnswer_select] = useState({});

  const handleSelectAnswer = (answer_id, value_answer) => {
    setAnswer_select({ ...answer_select, [answer_id]: value_answer });
  };
  console.log(answer_select);

  const [POST, setPOST] = useState(null);

  const sendData = async () => {
    const user_user_string = localStorage.getItem("user");
    const user_user = JSON.parse(user_user_string);
    try {
      const POST = await axios.post("http://localhost:8080/point/sum", {
        test_id: Params.id,
        answer_select,
        user_id: user_user.user_id,
      });
      setPOST(POST);
      console.log("ответ от серва с суммой очков", POST);

      console.log("Данные успешно отправлены");
    } catch (error) {
      console.error("Ошибка при отправке", error);
    }
  };

  const src = "http://localhost:8080/api/question/";
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      console.log("запрос с вопросами для теста", data.data);
      setQuestions(data.data);
    });
  }, []);

  useEffect(() => {
    const qat = Questions.filter((sss) => sss.test_id == Params.id);
    setQuestionsAndTest(qat);
  }, [Questions, Params.id]);

  if (POST) {
    return (
      <Sum_point
        titleTest={POST.data.titleTest}
        total_points={POST.data.total_points}
        PointsALL={POST.data.PointsALL}
        answerQuestions={POST.data.answerQuestions}
      />
    );
  } else {
    return (
      <section>
        <Header />
        {QuestionsAndTest.map((question) => (
          <div key={question.question_id} className="question">
            <div>
              <h1>{question.text}</h1>
              <div>{question.points}</div>
            </div>
            <hr />
            <Answers
              setTest={question.question_id}
              OnSelect={handleSelectAnswer}
            />
          </div>
        ))}
        <button className="button_test" type="button" onClick={sendData}>
          Подтвердить
        </button>
        <Footer />
      </section>
    );
  }

  // return (
  //   <>

  //     <section>
  //       <Header />
  //       {QuestionsAndTest.map((question) => (
  //         <div key={question.question_id} className="question">
  //           <div>
  //             <h1>{question.text}</h1>
  //             <div>{question.points}</div>
  //           </div>
  //           <hr />
  //           <Answers
  //             setTest={question.question_id}
  //             OnSelect={handleSelectAnswer}
  //           />
  //         </div>
  //       ))}
  //       <button className="button_test" type="button" onClick={sendData}>
  //         Подтвердить
  //       </button>
  //       <Footer />
  //     </section>
  //     {POST && (
  //       <Sum_point
  //         titleTest={POST.data.titleTest}
  //         total_points={POST.data.total_points}
  //         PointsALL={POST.data.PointsALL}
  //         answerQuestions={POST.data.answerQuestions}
  //       />
  //     )}
  //   </>
  // );
}

export default Questions;
