import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dltPro,setAmt ,setQuant,chngAmt,setCartData} from "../store/cartSlice";
const CartCard = ({ cd ,id}) => {
    const[qunt,setQunt]=useState(cd.quantity);
    // const[amt,setamt]=useState(cd.price);
    // console.log(qunt)
    
    const dispatch=useDispatch()
    
    useEffect(()=>{
      dispatch(setAmt(parseFloat(cd.price).toFixed(2)))
      // localStorage.setItem("cartI",JSON.stringify(cd))
      },[])
    const handleamt=(e)=>{
      let val=e.target.value;
      
      setQunt(val)
      const obj={"uuid":cd.uuid,"qunt":val}
      dispatch(setQuant(obj))
      // console.log(qunt)
      const amt=val*cd.price;
      const obj1={"id":id,"value":parseFloat(amt).toFixed(2)}
        dispatch(chngAmt(obj1))
      dispatch(setCartData())
      
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
                <p>Amount: ${parseFloat(cd.price*cd.quantity).toFixed(2)}</p>
                <i className="fa-solid fa-trash"onClick={()=>{dispatch(dltPro({"uuid":cd.uuid,"id":id}));dispatch(setCartData())}}/>
      </div>
    </>
  );
};

export default CartCard;
