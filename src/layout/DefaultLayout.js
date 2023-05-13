import React, {useEffect, useState} from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import {useNavigate} from 'react-router-dom'
import {useAuth} from "../components/context/auth";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
const Login =React.lazy(()=> import('../views/page/login'))
const DefaultLayout = () => {
  const navigate=useNavigate()
  const [ok,setOk]=useState(false)
  const [auth,setAuth]=useAuth()
  useEffect(()=>{
    if(auth.token){

      setOk(true)

    }else(setOk(false))
  },[auth])
  if(!ok) {
    return navigate('/login')
  }else{
  return (
    <div>

      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>

    </div>
  )
}}

export default DefaultLayout
