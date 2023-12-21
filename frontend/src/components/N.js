import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const N = () => {
  const[ham,setHam]=useState("nn");
  const shw=()=>{
      ham==="nn"?setHam("blk"):setHam("nn")
  }

  return (
    <>
      <div className="nav-cont">
      <div className="cont-1">

        <div className="img-div">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
          <p>CoinXpo</p>
        </div>
        <div className="lks">
          <ul>
            <li>Home</li>
            <li>CryptoCurrecies</li>
            <li>MarketCap</li>
            <li>About</li>
          </ul>
        </div>
        <div className="icn-cont">
            <div className="icn">
            <i class="fa-solid fa-magnifying-glass"/>
              <input type="text" name="cname" id="cname" placeholder="Search here"/> 
            </div>
            {/* <i class="fa-solid fa-magnifying-glass px-2 py-3 hover:text-blue-700"/> */}
          <i className="fa-solid fa-cart-shopping px-4 py-3 hover:text-blue-700" />
          <i className="fa-solid fa-user px-4 py-3 hover:text-blue-700" />
          <i class="fa-solid fa-bars px-4 py-3 hover:text-blue-700" onClick={shw}/>
        </div>
      </div>
      <div className={`cont-2 ${ham}`}>
      <div className='lks-2'>
          <ul onClick={shw}>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/allcoins'>
            <li>CryptoCurrecies</li>
          </NavLink>
          <NavLink to='/marketcap'>
            <li>MarketCap</li>
          </NavLink>
          <NavLink to='/about'>            
            <li>About</li>
          </NavLink>
          </ul>
        </div>
      </div>
      </div>

    </>
  );
};

export default N;
