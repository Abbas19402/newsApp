import React from "react";
import Navbar from "./Navbar";
import Footer from "../layout/Footer"
import NewsTypes from "./NewsTypes";
import Tech from "../newsTypes/Tech";
import BitCoin from "../newsTypes/BitCoin";
import Business from "../newsTypes/Business";
import TopHeadlines from "../newsTypes/TopHeadlines";
import Apple from "../newsTypes/Apple";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SportsNews from "../newsTypes/SportsNews";
import National from "../newsTypes/NationalNews";

export default function FullLayout() {
  return (
    <React.Fragment>
      <Router>
        <div
          className="bg-white w-screen h-screen overflow-x-hidden"
          id="FullLayout"
        >
          <div className="bg-white h-screen w-screen">
            <div id="navbar" className="h-20  fixed z-30 w-screen top-0" >
              <Navbar />
            </div>
            <div className="bg-slate-200 pb-1">
              <Routes>
                  <Route exact path="/" element={ <NewsTypes /> }/>
                  <Route exact path="/topheadlines" element={ <TopHeadlines /> }/>
                  <Route exact path="/business" element={ <Business /> }/>
                  <Route exact path="/apple" element={ <Apple /> }/>
                  <Route exact path="/bitcoin" element={ <BitCoin /> }/>
                  <Route exact path="/tech" element={ <Tech /> }/>
                  <Route exact path="/sports" element={ <SportsNews /> }/>
                  <Route exact path="/national" element={ <National/> }/>
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}
