import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { removeToken } from '../store/authSlice'
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Logout() {
  const dispatch=useDispatch()
  useEffect(()=>{
    toast.error("hh")
    dispatch(removeToken())
  },[dispatch])
  return <>
   <Navigate to="/"/>
<ToastContainer  />
  

  </>
}

export default Logout