import React from 'react'
import "../components/Style/Coincard.css"
import Ccard from './Ccard'
const Coincard = ({coins}) => {
  // console.log(coins)
  return (
    <div className='main-coin'>
    {
      coins.map((data ,i)=><Ccard key={i} id={i} cData={data}/>)
    }
    {/* <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/>
    <Ccard/> */}

    </div>
  )
}

export default Coincard