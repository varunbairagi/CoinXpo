import React from 'react'
import "../components/Style/Market.css"
import MarketCard from './MarketCard'
import { useSelector } from 'react-redux'
import millify from "millify";
const  MarketCap= (props) => {

  const data=props.stats;
  // console.log(data)
  return (
    <>
      <hr />
    <b>

      <h2 className='p-2'>Market Details</h2>
    </b>
      <div className='market-main'>

      <div className='market-card'>
        <h2 className='p-2'>Total</h2>
        <h4 className='p-2'>{data.total}</h4>
      </div>
      <div className='market-card'>
        <h2 className='p-2'>Total Coins</h2>
        <h4 className='p-2'>{millify(data.totalCoins)}</h4>
      </div>
      <div className='market-card'>
        <h2 className='p-2'>Total MarketCap</h2>
        <h4 className='p-2'>{millify(data.totalMarketCap)}</h4>
      </div>
      <div className='market-card'>
        <h2 className='p-2'>Total Exchanges</h2>
        <h4 className='p-2'>{millify(data.totalExchanges)}</h4>
      </div>
      <div className='market-card'>
        <h2 className='p-2'>Total 24h Volume</h2>
        <h4 className='p-2'>{millify(data.total24hVolume)}</h4>
      </div>
      <div className='market-card'>
        <h2 className='p-2'>Total Markets</h2>
        <h4 className='p-2'>{millify(data.totalMarkets)}</h4>
      </div>
      
      
      </div>
    </>
  )
}

export default MarketCap