import React from 'react'
import { useSelector } from 'react-redux'
import "./Style/Cart.css"
import CartCard from './CartCard'
const Cart = () => {

      const cd1=useSelector((state)=>state.cartData.data)
      const amt=useSelector((state)=>state.cartData.final_amount)
    // console.log(cd1)
    
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
            <h4>$ {parseFloat(amt).toFixed(2)}</h4>
            </div>
            <div className='fx'>
              <h2>Extra Charges :</h2>
              <h4>$ 2</h4>
            </div>
            <div className='fx'>
              <h2>final Price :</h2>
              <h4>$ 525</h4>
            </div>
            <hr />
            <button type="submit">Proceed For Payment</button>
          </div>
        </div>
    </>
  )
}

export default Cart