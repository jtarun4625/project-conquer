import Home from "./Home";
import About from "./About_us";
import Header from "./Component/Header";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Footer from "./Component/Footer";
import React from "react";
import CarbonCredit from "./CarbonCredit";
import Auction from "./Auction";
import OngoingBid from "./OngoingBid";
import Wallet from "./Wallet";
import BasicInformation from "./Basic Information";
import CarbonList from "./Website/CarbonList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/OngoingBid" element={<OngoingBid />}></Route>
          <Route exact path="/Userinformation" element={<BasicInformation />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Auction" element={<Auction />}></Route>
          <Route exact path="/About_us" element={<About />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Wallet" element={<Wallet />}></Route>
          <Route exact path="/carboncredit" element={<CarbonCredit />}></Route>
          <Route exact path="/CarbonList" element={<CarbonList />}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
