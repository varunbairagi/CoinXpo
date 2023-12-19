import React from 'react'
import Coincard from './Coincard'

const Cryptocurrencies = ({coins}) => {
  // console.log(coins)
  return (
    <>
    <div>
    
      <Coincard coins={coins}/>
    </div>
    </>
  )
}

export default Cryptocurrencies