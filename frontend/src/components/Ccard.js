import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import logo from "../log-crypto.png"
import millify from "millify"
import { NavLink } from 'react-router-dom'

const Ccard = ({cData,id}) => {
  // const navigate=useNavigate();
  // console.log(cData.name)
  // const {name,uuid}=cData;

  const [clr,setClr]=useState('red')
  const setColr=()=>{
    if(cData.change>0) {setClr('green'); }
  }
  useEffect(()=>setColr(),[])
  // if(cData?.change>0) setClr('green')

  // const jump=()=>{
  //   navigate(`/${cData.name}`)
  //   console.log("yes")
  //   navigate(`/allcoins/${cData.name}`)
  // }
  return (
    <>
        <div className='cont flex flex-col hover:border-black'>
      <div className='im flex px-3 justify-between'>
        <span className='uppercase font-bold'>{id+1} {cData.name}</span>
        <div className='pic'>
        <img src={cData.iconUrl} alt="" />
        </div>
      </div>
      <div className='my-1 flex justify-start px-3'>
      
        <span>Price:</span>
        <span className='font-bold'>{parseFloat(cData.price).toFixed(2)}</span>
      </div>
      <div className='my-1 flex justify-start px-3'>
        <span>Marketcap:</span>
        <span className='font-bold'>{millify(cData.marketCap)}</span>
      </div>
      <div className='my-1 flex justify-start px-3'>
        <span>Daily Change:</span>
        <span className="font-bold" style={{color:`${clr}`}} >{ clr==="green"?`+${cData.change}`:cData.change
          
          }</span>
      </div>
      <NavLink to={`/allcoins/${id+1}/${cData.name}`}>
      <div className='btn flex justify-center align-middle'>

        <button  >More Details</button>
      </div>
      </NavLink>
    </div>
    </>
  )
}

export default Ccard