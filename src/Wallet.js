import React ,{useEffect, useState} from "react";
import { db } from "./firebase";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeftSideBar from "./Component/LeftSideBar";
import Table from "./Component/Table";
import { useGlobalState } from "./state/index";
import { collection, doc,where, query,getDoc,getDocs, setDoc, updateDoc } from "firebase/firestore";

import axios from 'axios'
  
function placeBids(doc){
  alert()
  console.log(doc)
}

function Wallet_component() {
  const [CarbonCredit, setCarbonCredit] = useState(0);
  const [TotalBiding, setTotalBiding] = useState(0);
  const [currency,setCurrency] = useState("USD");
  const [walletAmount,setWalletAmount] = useState(0);
  const [uid] = useGlobalState("uid");
  const [idToken] = useGlobalState("idToken");
  const [auctions, setAuctions] = useState([]) 


  // const [Address, setAddress] = useState();

  useEffect(() => {
      const docRef = doc(db, "users",uid);
      var auctionsList = []
      getDoc(docRef).then((response) => {
        var user_data = response.data()
        setCurrency(user_data.state.currency)
        setCarbonCredit(response.data().CarbonCredit)
        setTotalBiding(response.data().totalBids)
        setWalletAmount(response.data().walletAmount)
        var config = {
          method: 'get',
          url: 'http://mvp--login.web.app/app/getAuctions',
          headers: { 
            'Authorization': 'Bearer ' + idToken, 
            'Content-Type': 'application/json'
          },
          withCredentials: false,
        };
    
        console.log(config)
    
        axios(config)
        .then(function (response) {
          console.log(response.data);
          setAuctions(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      })




      
      


  },[])

  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="heading">Dashboard</h3>
            </div>
            <div class="col-md-6">
              <ul class="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <p class="fs-18">/</p>
                </li>

                <li>
                  <p class="fs-18">Dashboard</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="user-profile flat-tabs">
        <div class="container">
          <div class="row">
            <LeftSideBar />
            <div class="col-xl-9 col-md-12">
              <div class="content-tab">
                <div class="content-inner api">
                  <div class="main">
                    {/* <h6>Enable API keys</h6>
                  <p>Enter your password and 2FA code to Enable the API keys</p> */}

                    <div class="refe">
                      <div>
                        <div class="card card-custom">
                          <img
                            class="card-img-top card-img-top1"
                            src="https://cdn-icons-png.flaticon.com/512/550/550638.png"
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <h6 class="card-title ">Wallet Amount</h6>
                            <h6 class="price">{currency} {walletAmount}</h6>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="card card-custom1">
                          <img
                            class="card-img-top card-img-top1"
                            src="https://cdn-icons-png.flaticon.com/512/747/747661.png"
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <h6 class="card-title ">Total Bids Placed</h6>
                            <h6 class="price ">{TotalBiding}</h6>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="card card-custom">
                          <img
                            class="card-img-top card-img-top1"
                            src="https://cdn-icons-png.flaticon.com/512/2439/2439062.png"
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <h6 class="card-title">Total Carbon Credits</h6>
                            <h6 class="price">{CarbonCredit}</h6>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <a href="#" class="btn-action">Enable API keys</a> */}
                  </div>
                  <div class="coin-list-wallet">
                    <Table
                      handleClick={placeBids}
                      localCurrency={currency}
                      table_data={{
                        heading: "Recent Auctions",
                       
                        keys: [
                          "SNo.",
                          "Start Date",
                          "End Date",
                          "CC",
                          "Starting Bid",
                          "Actions",
                        ],
                        data: auctions,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wallet_component;
