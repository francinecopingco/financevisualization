import React from 'react'
import './App.css'
import Login from './login-screen/Login';
import RegisterModal from './register-modal/RegisterModal';
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <RegisterModal /> } />
      </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App;
