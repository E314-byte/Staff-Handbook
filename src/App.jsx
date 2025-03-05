import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home_Page from './pages/home_page'
import Reference_Material from "./pages/reference_material";
import Staff_Test from './pages/staff_test';

function App() {
   return (
    <>
      <Routes>
        <Route path='/' element={<Home_Page/>} />
        <Route path='/reference_material' element={<Reference_Material/>} />
        <Route path='/test' element={<Staff_Test/>}/>
      </Routes>
    </>
  )
}

export default App
