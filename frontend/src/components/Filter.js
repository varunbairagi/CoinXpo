import React, { useState } from "react";
import "../components/Style/Filter.css";
import { useSelector, useDispatch } from "react-redux";
import { setPchng,setcap,setPrice,setDec,setInc } from "../store/filterSlice";

const Filter = () => {
  const [prc, setPrc] = useState(undefined);
  // const prices = ["< $10", "$10-$1000", "$1000-$10000", "$10000-$100000"];
  const dispatch=useDispatch();
  const handleChng = (e) => {
    // console.log(e.target.id)
    let id = e.target.id;
    let val = e.target.value;
    if (id === "price") {setPrc(val);dispatch(setPrice(val))}
    else if (id === "cap") {setPrc(val); dispatch(setcap(val))}
    else {setPrc(val); dispatch(setPchng(val))}
    console.log(val)
  };
  const chk=(id)=>{
      if(id===4) setInc(4)
      setDec(5)
  }

  return (
    <>
      <div className="flt p-4">
        <h2>Filters</h2>
        <div className="m-3 flex flex-wrap justify-start">
          <div className="mx-3 ">
            <span>Price</span>
            <select name="price" id="price" onChange={handleChng}>
              <option value="">Select value</option>
              
              <option value="10">{"< $10"}</option>
              <option value="1000">{"$10-$1000"}</option>
              <option value="10000">{"$1000-$10000"}</option>
              <option value="10001">{"> $10000"}</option>
            </select>
          </div>
          <div className="mx-3">
            <span>Marketcap</span>
            <select name="cap" id="cap" onChange={handleChng}>
              <option value="">Select value</option>
              <option value="10">{"< 10B"}</option>
              <option value="20">{"10B - 20B"}</option>
              <option value="50">{"20B - 50B"}</option>
              <option value="51">{"> 50B"}</option>
            </select>
          </div>
          <div className="mx-3">
            <span>Price Change</span>
            <select name="pchng" id="pchng" onChange={handleChng}>
              <option value="">Select value</option>
              <option value="p">only positive</option>
              <option value="n">only negative</option>
             
            </select>
          </div>
          <div className="mx-3 flex align-baseline">
            <span>Sort by price</span>
            <div className="ic">
              <i className="fa-solid fa-sort-up text-black hover:text-blue-700  px-2" onClick={chk(4)} />
              <i className="fa-solid fa-sort-down text-black hover:text-blue-700 pnl" onClick={chk(5)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
