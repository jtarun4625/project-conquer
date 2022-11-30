

import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LeftSideBar from "./Component/LeftSideBar";
import Table from "./Component/Table";
  function Wallet_component(){

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
              <li><a href="index-2.html">Home</a></li>
              <li><p class="fs-18">/</p></li>

              <li><p class="fs-18">Dashboard</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="user-profile flat-tabs">
      <div class="container">
        <div class="row">
        <LeftSideBar/>
          <div class="col-xl-9 col-md-12">
          <div class="content-tab">
          <div class="content-inner api">
              <div class="main">
                  {/* <h6>Enable API keys</h6>
                  <p>Enter your password and 2FA code to Enable the API keys</p> */}

                  <div class="refe">
            
                 <div>
                 <div class="card card-custom" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title ">USD Doller</h6>
                    <h6 class="price">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div>
                 <div class="card card-custom1" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/747/747661.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title ">Viewding</h6>
                    <h6 class="price ">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div>
                 <div class="card card-custom" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/2439/2439062.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title">Carban Credit</h6>
                    <h6 class="price">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>



         




                  </div>
            
                  {/* <a href="#" class="btn-action">Enable API keys</a> */}
                </div>
                <div class="coin-list-wallet">
                <Table table_data={{"heading":"Table Heading","keys":["SNo.","Name","Start Date","End Date", "CC","Starting Bid","Actions"], "data":[
            { name: "dgfdg", start_day: "21-jan-2022", end_day:"21-jan-2022" },
            { name: "Megha", start_day: "21-jan-2022", end_day: "21-jan-2022" },
            { name: "Subham", start_day: "21-jan-2022", end_day:"21-jan-2022"}
          ]}}/>
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
