import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import Login from "./components/Login"
import Register from "./components/Register"
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App