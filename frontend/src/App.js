import React from "react";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Route, Routes,withRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Marketcap from "./components/Marketcap";
import "./App.css";
// import logo from './log-crypto.png'
import Nav from "./components/Nav";
// import { data } from "./tdata";
import Footer from "./components/Footer";

import { setData } from "./store/coindSlice";
import Cdeails from "./components/Cdeails";
import { fetchFinalData } from "./store/coindSlice";
import { useSelector, useDispatch } from "react-redux";
import N from "./components/N";
import Logpage from "./components/Logpage";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Logout from "./components/Logout";
import Orderpage from "./components/Orderpage";
import Profilepage from "./components/Profilepage";
function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.coinData.isLoading);
  // const data = useSelector((state) => state.coinData.data);
  const[data,setFdata]=useState([]);
  const[isLoading,setIsLoading]=useState(true)
  // let isLoading = true;

  useEffect(() => {
    const getd = async () => {
      // isLoading=true;

      try {
        // const result = await fetch("http://localhost:8080/db");
        const result = await fetch("http://localhost:8080/db");

        const res = await result.json();
        console.log(res);
        setFdata(res)
        setIsLoading(false)
      } catch (e) {
        console.error(e);
        setIsLoading(true)

      }
    };
    getd();
    // dispatch(fetchFinalData());
  }, []);

  // console.log(data);

  return (
    <>
      <div className="main">
        <Nav />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="sub-main">
            <Routes>
              <Route exact path="/" element={<Homepage data={data} />} />
              <Route
                exact
                path="/marketcap"
                element={<Marketcap stats={data.stats} />}
              />
              <Route
                exact
                path="/allcoins"
                element={<Cryptocurrencies coins={data.coins} />}
              />
              <Route exact
                path="/allcoins/:cid/:cname"
                element={<Cdeails isLoading={isLoading} cData={data.coins} />}
              />
              {/* <Route exact path="/na" element={<N />} /> */}
              <Route exact path="/order" element={<Orderpage/>}/>
              <Route exact path="/user" element={<Profilepage/>}/>
              <Route exact path="/login" element={<Logpage />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/logout" element={<Logout/>} />
            </Routes>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
