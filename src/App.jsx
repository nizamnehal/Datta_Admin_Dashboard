import { useState } from 'react'

import './App.css'

import { Routes, Route } from "react-router-dom";

import MainLayout from './components/layout/MainLayout';

import Dashboard from "./pages/dashboard/Dashboard";
import Color from "./pages/color/Color";
import Typography from "./pages/typography/Typography";
import Icons from "./pages/icons/Icons";
import Sample from "./pages/sample/Sample";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        {/* Layout pages */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/color" element={<Color />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/sample" element={<Sample />} />

        </Route>

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App
