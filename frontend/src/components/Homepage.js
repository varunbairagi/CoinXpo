import React from 'react'
import Marketcap from './Marketcap'
import Cryptocurrencies from './Cryptocurrencies'
import Filter from './Filter'
import { useSelector } from 'react-redux'

const Homepage = ({data}) => {
  // const data=useSelector((state)=>state.coinData.data)
  // console.log(data)
  return (
    <>
    <div className='hm'>
   
    
      <Marketcap stats={data.stats}/>
      <Filter/>
      <Cryptocurrencies coins={data.coins}/>
      </div>
    </>
  )
}

export default Homepage