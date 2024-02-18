import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import millify from 'millify'
import parse from "html-react-parser";
import "./Style/Cdetails.css"
import { fetchSignleCData } from '../store/singleCSlice';
import { useSelector,useDispatch } from 'react-redux';
import { setLoader } from '../store/singleCSlice';
import { addPro } from '../store/cartSlice';

const Cdeails = ({cData}) => {

    const[id,setId]=useState("")
    const {cname,cid}=useParams()
    const dispatch=useDispatch()
    // const cd=useSelector((state)=>state.cartData.data[0])
    
    // console.log(cname)
    // const data=cData.filter((res,i)=>cid==i?res:0) "Qwsogvtv82FCd"
    // console.log(cid,cData)
    //Get single coin data
    const data=useSelector((state)=>state.singleCData.cSData.coin)
    // console.log(data)
    const isLoading=useSelector((state)=>state.singleCData.isLoading)
    
    // getId()
    useEffect(()=>{
      const getId=()=>{
      
        // cData.filter((res,i)=>cid==i?setId(res.uuid):0)
        cData.find((res,i)=>cid-1==i?setId(res.uuid):0)
        // console.log(id)
  
        dispatch(setLoader(true))
        if(isNaN(id)){
  
          dispatch(fetchSignleCData(id,cname))
        }
      }
      getId()
      
    },[id,cid])
    
    const addC=()=>{
      dispatch(addPro(data));
      // console.log(cd)
    }
  return (
    <>

    {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="detailscont">
            <div style={{ textAlign: "center" ,paddingTop:"20px"}}>
              <h2>{`${data.name} (${data.symbol}) Price`}</h2>
              <h5>
                {data.name} price in US Dollar (USD). View value statistics,
                market cap and supply.
              </h5>
              {/* {!isLogin&&} */}
                <button style={{ padding: "5px",fontSize:".8rem",border:"2px solid black" }} onClick={addC}>Buy Now</button>
            </div>
            <div className="det">
              <div className="valueSt">
                <h3 className="pd mg cen">{data.name} Value Statistics</h3>
                <p className="pd mg">
                  An overview showing the statistics of {data.name}, such as
                  the base and quote currency, the rank, and trading volume.
                </p>
                <div className="tof mg pd">
                  <div className="fx">
                    {/* <h4>Price to USD</h4> <h3>$ {parseFloat(data.price).toFixed(2)}</h3> */}
                  </div>
                  <div className="fx">
                    <h4>Rank</h4> <h3>{data.rank}</h3>
                  </div>
                  <div className="fx">
                    <h4>Price</h4> <h3>{parseFloat(data.price).toFixed(2)}</h3>
                  </div>
                  <div className="fx">
                    <h4>24h Volume</h4> <h3>$456</h3>
                  </div>
                  <div className="fx">
                    <h4>Market Cap</h4> <h3>{millify(data.marketCap)}</h3>
                  </div>
                  <div className="fx">
                    <h4>All Time High</h4>{" "}
                    <h3>{millify(data.allTimeHigh.price)}</h3>
                  </div>
                </div>
              </div>
              <div className="valueSt">
                <h3 className="pd mg cen">Other Stats Info</h3>
                <p className="pd mg">
                  An overview showing the statistics of {data.name}, such as
                  the base and quote currency, the rank, and trading volume.
                </p>
                <div className="tof mg pd">
                  <div className="fx">
                    <h4>Number Of Markets</h4>{" "}
                    <h3>{data.numberOfMarkets}</h3>
                  </div>
                  <div className="fx">
                    <h4>Number Of Exchanges</h4>{" "}
                    <h3>{data.numberOfExchanges}</h3>
                  </div>
                  <div className="fx">
                    <h4>Aprroved Supply</h4> <h3>yes</h3>
                  </div>
                  <div className="fx">
                    <h4>Total Supply</h4>{" "}
                    <h3>{millify(data.supply.total)}</h3>
                  </div>
                  <div className="fx">
                    <h4>Circulating Supply</h4>{" "}
                    <h3>{millify(data.supply.circulating)}</h3>
                  </div>
                </div>
              </div>
              <div className="valueSt">
                <h2 className="pd mg cen">What is {data.name}?</h2>
                <p className="pd mg">{parse(data.description)}</p>
              </div>
              <div className="valueSt">
                <h3 className="pd mg cen">{data.name} Links</h3>

                <div className="tof mg pd">
                  {data.links.map((el, i) => {
                    return (
                      <div key={i} className="fx pt">
                        <h4 style={{ textTransform: "uppercase" }}>
                          {el.type}
                        </h4>{" "}
                        <h3>
                          <a
                            href={el.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textTransform: "uppercase",
                              color: "blue",
                            }}
                          >
                            {" "}
                            {el.name}
                          </a>
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    
      
    
    </>
  )
}

export default Cdeails