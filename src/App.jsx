import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './pages/Home'
import Header from './components/Header'
import JobsDetails from './pages/JobsDetails'
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from '../data.json'
import Preview from './pages/Preview'





const App = () => {



  return (
 
    <BrowserRouter>
    <ToastContainer/>
  <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/jobdetails/:id' element={<JobsDetails/>}/>
    <Route path='/preview' element={<Preview/>}/>

<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>

    </Routes>
  
    </BrowserRouter>
  )
}

export default App