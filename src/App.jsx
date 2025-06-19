import React from "react";
import { Routes, Route } from "react-router-dom";
import Home_Page from "./pages/home_page";
/* основные страницы/компаненты */
import Registration_and_Login from "./pages/registration_and_login";
import Reference_Material from "./pages/reference_material";
import Staff_Test from "./pages/staff_test";
import Questions from "./components/questions";
import Interactive_tasks from "./pages/Interactive_tasks";
import User_page from "./pages/user_page";
import Sum_point from "./pages/sum_point";
/* админ панель */
import AdminPanel from "../backend/Dashboard/AdminPanel";
import User_admin from "../backend/Dashboard/components/user_admin";
import Test_admin from "../backend/Dashboard/components/test_admin";
import Question_admin from "../backend/Dashboard/components/question_admin";
import Answer_admin from "../backend/Dashboard/components/answer_admin";
import Categories_admin from "../backend/Dashboard/components/categories_admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        {/* основные страницы/компаненты */}
        <Route path="/login" element={<Registration_and_Login />} />
        <Route path="/reference_material" element={<Reference_Material />} />
        <Route path="/test" element={<Staff_Test URL={"test"} />} />
        <Route path="/test/questions/:id" element={<Questions />} />
        <Route path="/interactive_tasks" element={<Interactive_tasks />} />
        <Route path="/profile" element={<User_page />} />
        <Route path="/sum_point" element={<Sum_point />} />
        {/* админ панель */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/user_admin" element={<User_admin />} />
        <Route path="/admin/test_admin" element={<Test_admin />} />
        <Route path="/admin/question_admin" element={<Question_admin />} />
        <Route path="/admin/answer_admin" element={<Answer_admin />} />
        <Route path="/admin/categories_admin" element={<Categories_admin />} />
      </Routes>
    </>
  );
}

export default App;
