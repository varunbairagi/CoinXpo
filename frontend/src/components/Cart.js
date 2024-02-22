import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Style/Cart.css"
import CartCard from './CartCard'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { UseDispatch } from 'react-redux';
import { setCartData } from '../store/cartSlice';
const Cart = () => {
      const navigate=useNavigate()
      const dispatch=useDispatch();
      const cd1=useSelector((state)=>state.cartData.data)
      const isLogin=useSelector(state=>state.authData.isLogin);
      const amt=useSelector((state)=>state.cartData.final_amount)
      const amt1=amt.reduce((sum,el)=>sum+parseFloat(el),0)
    // console.log(cd2)
    const paymt=()=>{
      if(isLogin){
        toast.success("Ordered Successfully")
        // navigate("/")
        dispatch(setCartData())
      }
      else{
        toast.warning("Please Login")
      }
    }
  return (
    <>
        <div className='cart-main'>
          
        <div className='cart-div'>
        <h2>Cart Items : </h2>
        <hr />
            { cd1.map((el,i)=><CartCard cd={el} key={i} id={i}/>)
            }

        </div>
        <div className='details'>
        <h1>Order Details:</h1>
        <hr />
            <div className='fx'>
              <h2>Total Price :</h2>
            <h4>$ {parseFloat(amt1).toFixed(2)}</h4>
            </div>
            <div className='fx'>
              <h2>Extra Charges :</h2>
              <h4>$ 2</h4>
            </div>
            <div className='fx'>
              <h2>final Price :</h2>
              <h4>$ {parseFloat(amt1+2).toFixed(2)}</h4>
            </div>
            <hr />
            <button type="submit" onClick={paymt}>Proceed For Payment</button>
          </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default Cart