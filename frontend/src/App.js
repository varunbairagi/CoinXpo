import React from "react";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Marketcap from "./components/Marketcap";
import "./App.css";
// import logo from './log-crypto.png'
import Nav from "./components/Nav";
import { data } from "./tdata";
import Footer from "./components/Footer";
import { setData } from "./store/coindSlice";
import Cdeails from "./components/Cdeails";
import { fetchFinalData } from "./store/coindSlice";
import { useSelector, useDispatch } from "react-redux";
import N from "./components/N";

function App() {
  // const dispatch = useDispatch();

  // const isLoading = useSelector((state) => state.coinData.isLoading);
  // const data = useSelector((state) => state.coinData.data);

  // useEffect(() => {

  //   dispatch(fetchFinalData());
  // }, [dispatch]);

  const isLoading = false;

  console.log(data);

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
              <Route
                path="/allcoins/:cid/:cname"
                element={<Cdeails isLoading={isLoading} cData={data.coins} />}
              />
              <Route exact path="/na" element={<N/>}/>
            </Routes>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
