import React from 'react'
import "../components/Style/Coincard.css"
import Ccard from './Ccard'
const Coincard = ({coins,mul}) => {
  // console.log(coins)
  return (

    <div className='main-coin'>
    {
      coins.map((data ,i)=>{
          if(mul==1&&i<25){
            return <Ccard key={i} id={i} cData={data}/>
          }
          if(mul==2&&i>=25){
            return <Ccard key={i} id={i} cData={data}/>
          }


      })
    }
    
   
    </div>
  )
}

export default Coincard