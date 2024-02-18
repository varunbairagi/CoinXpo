import React,{useEffect, useState} from 'react'
import { NavLink ,Link} from 'react-router-dom';
const Searchresult = ({res,setF}) => {
  // console.log(res)
  const {name,rank,price,iconUrl,change}=res;
  const [clr,setClr]=useState('red')
  
  useEffect(()=>{if(change>0) setClr('green')},[])
  
  return (
    <>
    <NavLink to={"/"}>
    <Link  to={`/allcoins/${rank}/${name}`} onClick={()=>setF([])}>
    <div className="srh" >
          <img src={iconUrl} alt="logo"  width={"15px"}/>
          <p>{name}</p>
          <p>$ {parseFloat(price).toFixed(2)}</p>
          <p id='chg' style={{color:`${clr}`}} >{change}</p>
        </div>
</Link>
</NavLink>
    </>
  )
}

export default Searchresult