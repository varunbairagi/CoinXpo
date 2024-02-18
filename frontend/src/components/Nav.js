import React, { useState } from "react";
// import logo from "../log-crypto.png"
import { NavLink } from "react-router-dom";
import { data } from "../tdata";
import { useSelector } from "react-redux";
import "./Style/N.css";
import Searchresult from "./Searchresult";
const Nav = ({}) => {
  const [val, setVal] = useState("");
  const [ham, setHam] = useState("nn");
  const [mag, setMag] = useState("nn");
  const [filtered, setFiltered] = useState(undefined);
  // const smag=()=>{
  //   mag=='nn'?setMag("blk"):setMag("nn")

  // }
  const cd1=useSelector((state)=>state.cartData.data)

  const shw = () => {
    ham === "nn" ? setHam("blk") : setHam("nn");
    mag === "nn" ? setMag("blk") : setMag("nn");
  };
  const key = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      if (ham === "blk") {
        shw();
      }
    }
  };
  const Filter = () => {
    // console.log(val)
    
  
  // console.log("hi")
    setFiltered(
      data.coins.filter(function (res) {
        return res.name.toLowerCase().includes(val);
      })
    );
    // console.log(filtered);
  };
  const input = (e) => {
    let value=e.target.value;
    // console.log(value.length)
    
    setVal(String(value));
    if(value.length>=1) Filter();
    else setFiltered([])
    // console.log(val.length);
  };

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
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/allcoins">
                <li>CryptoCurrecies</li>
              </NavLink>
              <NavLink to="/marketcap">
                <li>MarketCap</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
            </ul>
          </div>
          <div className="icn-cont">
            <div className="search-box">
              <div className="icn">
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="text"
                  name="cname"
                  id="cname"
                  placeholder="Search here"
                  onChange={input}
                  onKeyDown={key}
                />
              </div>
              <div className="src-coin-1">
                {filtered &&
                  filtered.map((res, i) => <Searchresult res={res} key={i} setF={setFiltered} onClick={()=>setVal("")}/>)}
              </div>
            </div>
            <i
              id="mag"
              className="fa-solid fa-magnifying-glass px-2 py-3 hover:text-blue-700"
              onClick={() => shw()}
            />
            
            <NavLink to="/cart">
            
              <i className="fa-solid fa-cart-shopping px-3 py-3 hover:text-blue-700" >
              <div id="num">{cd1.length}
            </div>
              </i>
            </NavLink>
            <NavLink to="/signup">
            <i className="fa-solid fa-user px-3 py-3 hover:text-blue-700" /></NavLink>
            <i
              id="hamb"
              className={`fa-solid fa-bars px-3 py-3 hover:text-blue-700`}
              onClick={() => shw()}
            />
          </div>
        </div>
        <div className={`search-box ${mag}`}>
          <div className={`icn-2 ${mag}`}>
            <i className="fa-solid fa-magnifying-glass" />
            <input
              type="text"
              name="cname"
              id="cname"
              placeholder="Search here"
              onChange={input}
              onKeyDown={key}
            />
          </div>
          <div className={`src-coin ${mag}`}>
            {filtered &&
              filtered.map((res, i) => <Searchresult res={res} key={i} />)}
          </div>
        </div>
        <div className={`cont-2 ${ham}`}>
          <div className="lks-2">
            <ul onClick={() => shw()}>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/allcoins" >
                <li>CryptoCurrecies</li>
              </NavLink>
              <NavLink to="/marketcap">
                <li>MarketCap</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
