
import Home from "./Home";
import About from "./About_us";
import Header from "./Component/Header";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Footer from "./Component/Footer";
import {React, useEffect, useState} from "react";
import CarbonCredit from "./CarbonCredit";
import Auction from "./Auction";
import OngoingBid from "./OngoingBid";
import Wallet from "./Wallet";
import BasicInformation from "./Basic Information";
import CarbonList from "./Website/CarbonList";
import Administrator from "./Administrator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProfile from './DetailedInformation/MainProfile';
import Login from "./Login";
import { setState,setGlobalState } from "./state/index";
import Test from './Test'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Puff } from 'react-loader-spinner'


window.user = "Nathan";


function App() {

  const auth = getAuth();
  const [isLoading, setLoading] = useState(true);
  useEffect( () => {
    // Anything in here is fired on component mount.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.currentUser.getIdToken(auth.currentUser).then((token)=>{
          setState("uid",auth.currentUser.uid)
          setState("idToken",token)
          setState("emailId",auth.currentUser.email)
          setLoading(false)
          console.log(isLoading)
        })
      } else {
        console.log("This is inside")
        setLoading(false)
        if(!window.location.href.includes("/Register")){
          window.location.href = "/Register"
        }
    
      }
    });
 }, []);




    
 if(isLoading){
  console.log(isLoading)
  return (
    <div className="row">
         <div className="col-md-12" class="text-center">
         <center>
         <div  className="loadingContainer">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#3772ff"
        ariaLabel="puff-loading"
        wrapperStyle={{"display":"block"}}
        wrapperClass=""
        visible={true}
      />
    </div></center>
          </div></div>
  )
 }else{
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/Administrator" element={<Administrator />}></Route>
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
          <Route exact path="/mainProfile" element={<MainProfile />}></Route>
          <Route exact path="/test" element={<Test />}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
 }
}

export default App;
