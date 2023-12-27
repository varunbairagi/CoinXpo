import React,{useEffect, useState} from 'react'

const Searchresult = ({res}) => {
  // console.log(res)
  const {name,price,iconUrl,change}=res;
  const [clr,setClr]=useState('red')
  
  useEffect(()=>{if(change>0) setClr('green')},[])
  
  return (
    <>
    <div className="srh">
          <img src={iconUrl} alt="logo"  width={"15px"}/>
          <p>{name}</p>
          <p>$ {parseFloat(price).toFixed(2)}</p>
          <p id='chg' style={{color:`${clr}`}} >{change}</p>
        </div>

    </>
  )
}

export default Searchresult