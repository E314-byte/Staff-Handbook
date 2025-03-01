import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home_Page from './pages/home_page'
import Reference_Material from "./pages/reference_material";

function App() {
   return (
    <>
      <Routes>
        <Route path='/' element={<Home_Page/>} />
        <Route path='/reference_material' element={<Reference_Material/>} />
      </Routes>
    </>
  )
}

export default App
