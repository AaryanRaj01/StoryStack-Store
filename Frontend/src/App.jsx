import React from 'react'
import Home from './Home/Home'

import {Toaster} from 'react-hot-toast'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import { useAuth } from './context/Authprovider'
import Abouts from './components/Abouts/Abouts'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login'
function App() {
  const [authuser,setAuthUser] = useAuth()
  console.log(authuser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Signup' element ={<Signup/> }/>
      <Route path='/login' element ={<Login/> }/>
      <Route path='/course' element = {authuser? <Courses/> : <Navigate to="/Signup"/>}/>
      <Route path='/About' element = {<Abouts/>}/>
      <Route path='/contact' element = {<Contacts/>}/>
    </Routes>
    <Toaster/>
    </div>
    
    </>
  )
}

export default App
