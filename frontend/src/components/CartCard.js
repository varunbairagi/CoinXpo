import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dltPro,setAmt } from "../store/cartSlice";
const CartCard = ({ cd ,id}) => {
    const[qunt,setQunt]=useState(1);
    // const[amt,setamt]=useState(cd.price);
    // console.log(qunt)
    const dispatch=useDispatch()
    const dlt=(uuid)=>{
        dispatch(dltPro(uuid))
    }
    useEffect(()=>{
      dispatch(setAmt( parseFloat(cd.price).toFixed(2)))
      
    },[])
    const handleamt=(e)=>{
      let val=e.target.value-qunt;
      console.log(val)
      // if(val,)
      setQunt(e.target.value)
      dispatch(setAmt( val*cd.price))
      
      
    }
  return (
    <>
      <div className="cart-card">
      <h5>{id+1}</h5>
      <img src={cd.iconUrl} alt="" width={"30px"} />
                <p>{cd.name}</p>
                <p>Price: ${parseFloat(cd.price).toFixed(2)}</p>
                
                <p>Qnty</p>
                <input type="text" value={qunt} name="quant" id="quant" placeholder='Q' onChange={handleamt}/>
                <p>Amount: ${parseFloat(cd.price*qunt).toFixed(2)}</p>
                <i className="fa-solid fa-trash"onClick={()=>dlt(cd.uuid)}/>
      </div>
    </>
  );
};

export default CartCard;
