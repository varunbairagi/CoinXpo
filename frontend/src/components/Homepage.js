import React, { useEffect } from 'react'
import Marketcap from './Marketcap'
import Cryptocurrencies from './Cryptocurrencies'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = ({data}) => {
  
  const {user,isLogin}=useSelector((state)=>state.authData)
  // console.log(user);
  useEffect(()=>{
     if(user!=undefined){toast.success("hello "+user.userData.username)}
    // if(isLogin){
    //   toast.success(`hello `)
    // }
  },[user,isLogin])
  
  return (
    <>
    <div className='hm'>
   
    
      <Marketcap stats={data.stats}/>
      <Filter/>
      <Cryptocurrencies coins={data.coins}/>
      <ToastContainer />
      </div>
    </>
  )
}

export default Homepage