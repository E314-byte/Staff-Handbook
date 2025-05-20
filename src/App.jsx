import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home_Page from "./pages/home_page";
import Reference_Material from "./pages/reference_material";
import Staff_Test from "./pages/staff_test";
import Questions from "./components/questions";
import Interactive_tasks from "./pages/Interactive_tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/reference_material" element={<Reference_Material />} />
        <Route path="/test" element={<Staff_Test />} />
        <Route path="/questions" element={<Questions setTest={4} />} />
        <Route path="/interactive_tasks" element={<Interactive_tasks />} />
      </Routes>
    </>
  );
}

export default App;
