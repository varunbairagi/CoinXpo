import React, { useState } from 'react'
import Coincard from './Coincard'
import { useSelector } from 'react-redux';

const Cryptocurrencies = ({coins}) => {
  // console.log(coins)
  const b1=1000000000;
  const[mul,setMul]=useState(1);
  const[fcoin,setFcoin]=useState(undefined)
  const fData=useSelector((state)=>state.filterData)
  // console.log(fData.id)
  const chngD=()=>{
      if(fData.id===1){
        setFcoin(coins.filter((res,i)=>{
          if(res.price<=fData.prices) return res
        }))
      }
      else if(fData.id===2){
        setFcoin(coins.filter((res,i)=>{
          if(res.marketCap<=(fData.cap)*b1) return res
        }))
      }
      else if(fData.id===4){
        setFcoin(coins.filter((res,i)=>{
          if(fData.pchng==='p' && res.change>0) return res
          if(fData.pchng==='n' && res.change<0) return res
        }))
      }
      else if(fData.id===3){
        setFcoin(coins.filter((res,i)=>{
          if((res.marketCap<=(fData.cap)*b1)&&(res.price<=fData.prices)) return res
        }))
      }
      else if(fData.id===5){
        setFcoin(coins.filter((res,i)=>{
          if((fData.pchng==='p' && res.change>0)&&(res.price<=fData.prices)) return res
          if((fData.pchng==='n' && res.change<0)&&(res.price<=fData.prices)) return res
        }))
      }
      else if(fData.id===6){
        setFcoin(coins.filter((res,i)=>{
          if((fData.pchng==='p' && res.change>0)&&(res.marketCap<=(fData.cap)*b1)) return res
          if((fData.pchng==='n' && res.change<0)&&(res.marketCap<=(fData.cap)*b1)) return res
        }))
      }
      else if(fData.id===7){
        setFcoin(coins.filter((res,i)=>{
          if((fData.pchng==='p' && res.change>0)&&((res.marketCap<=(fData.cap)*b1)&&(res.price<=fData.prices))) return res
          if((fData.pchng==='n' && res.change<0)&&((res.marketCap<=(fData.cap)*b1)&&(res.price<=fData.prices))) return res
        }))
      }
      // console.log(fcoin)
  }
  return (
    <>
    <div>
    {fcoin===undefined?(<Coincard coins={coins} mul={mul}/>):(<Coincard coins={fcoin} mul={mul}/>)}
      
      <div className='pgs'> Page No.
        <p onClick={()=>{setMul(1)}}>1</p>
        <p onClick={()=>setMul(2)}>2</p>
    </div>
    </div>
    </>
  )
}

export default Cryptocurrencies