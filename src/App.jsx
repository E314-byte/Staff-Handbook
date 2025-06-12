import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home_Page from "./pages/home_page";
import Registration_and_Login from "./pages/registration_and_login";
import Reference_Material from "./pages/reference_material";
import Staff_Test from "./pages/staff_test";
import Questions from "./components/questions";
import Interactive_tasks from "./pages/Interactive_tasks";
import AdminPanel from "../backend/Dashboard/AdminPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Page />} />

        <Route path="/login" element={<Registration_and_Login />} />
        <Route path="/reference_material" element={<Reference_Material />} />
        <Route path="/test" element={<Staff_Test URL={"test"} />} />
        <Route path="/questions/:id" element={<Questions URL={"question"} />} />
        <Route path="/interactive_tasks" element={<Interactive_tasks />} />
        {/* админ панель */}
        <Route path="/admin" element={<AdminPanel URL={"user"} />} />
      </Routes>
    </>
  );
}

export default App;
