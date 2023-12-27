import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dltPro } from "../store/cartSlice";
const CartCard = ({ cd ,id}) => {
    const[qunt,setQunt]=useState(1);
    console.log(qunt)
    const dispatch=useDispatch()
    const dlt=(uuid)=>{
        dispatch(dltPro(uuid))
    }
  return (
    <>
      <div className="cart-card">
      <h5>{id+1}</h5>
      <img src={cd.iconUrl} alt="" width={"30px"} />
                <p>{cd.name}</p>
                <p>Price: ${parseFloat(cd.price).toFixed(2)}</p>
                
                <p>Qnty</p>
                <input type="text" value={qunt} name="quant" id="quant" placeholder='Q' onChange={(e)=>setQunt(e.target.value)}/>
                <p>Amount: ${parseFloat(cd.price).toFixed(2)*qunt}</p>
                <i className="fa-solid fa-trash"onClick={()=>dlt(cd.uuid)}/>
      </div>
    </>
  );
};

export default CartCard;
