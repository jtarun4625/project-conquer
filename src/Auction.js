import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import LeftSideBar from "./Component/LeftSideBar";
import { v4 as uuid } from "uuid";
import { useGlobalState } from "./state/index";
import axios from 'axios';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import swal from "sweetalert";

const unique_id = uuid();


export default function Auction() {

  const [data, setData] = useState([]);
  const [bidsData, setBidData] = useState([]);

  useEffect(()=>{

  },[bidsData])
  useEffect(() => {
    const donorsData = [];
    const docRef = query(collection(db, "auctions"), where("UserId", "==", uid));
    getDocs(docRef).then((response) => {
      response.forEach((doc) => {
        var data = doc.data()
        data["id"] = doc.id
        donorsData.push(data);
      });
       setData(donorsData);
    });



  },[]);
  // }, []);



  
  const [uid] = useGlobalState("uid");
  const [State, setState] = useState([]);
  const [idToken] = useGlobalState("idToken");
  const [isLoading, setLoading] = useState(false);

  
  function handlePopUp(val) {
    var bidData = []
    const bidRef = query(collection(db, "bid"), where("auction", "==", val.id),where("paymentReceived", "==", 1));
    getDocs(bidRef).then((response) => {
      response.forEach((doc) => {
        var data = doc.data()
        data["id"] = doc.id
        bidData.push(data);
      });
      console.log(bidData)
       setBidData(bidData);
       console.log(bidsData)
    });
  }

  function acceptBid(val){
    var config = {
      method: 'post',
      url: 'http://localhost:5002/acceptBid',
      headers: { 
        'Authorization': 'Bearer ' + idToken, 
        'Content-Type': 'application/json'
      },
      withCredentials: false,
      data : val
    };

    console.log(config)

    axios(config)
    .then((response) => {
      if(response.data.error == false){
        swal({
          title: "Bid Accepted!",
          text: "Thank for Submit!",
          icon: "success",
          button: "Ok!",
        });
      }else{
        swal({
          title: "Error",
          text: "There is some error",
          icon: "error",
          button: "Ok!",
        });
      }
    }).catch((error) => console.log(error));
  }
  const handleSubmit = (event) => {
    alert("hkhk");
    var newkey = uuid();
    const carboncredit = event.target.carboncredit.value;
    const endDate = event.target.endDate.value;
    const startBid = event.target.startBid.value;
    const startDate = event.target.startDate.value;

    event.preventDefault();

    var config = {
      method: 'post',
      url: 'http://localhost:5002/addNewAuction',
      headers: { 
        'Authorization': 'Bearer ' + idToken, 
        'Content-Type': 'application/json'
      },
      withCredentials: false,
      data : {
        CarbonCredit: carboncredit,
        StartBid: startBid,
        StartDate: startDate,
        EndDate: endDate,
        UserId: uid,
      }
    };

    console.log(config)

    axios(config)
    .then((response) => {
      if(response.data.error == false){
        swal({
          title: "Auction  Added!",
          text: "Thank for Submit!",
          icon: "success",
          button: "Ok!",
        });
      }else{
        swal({
          title: "Not Enough Carbon Credits",
          text: "Please add carbon credits first ?",
          icon: "error",
          button: "Ok!",
        });
      }
    }).catch((error) => console.log(error));
  };

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
                <div className="content-inner Onging Bid">
                  <br></br>
                  <h6 class="heading">Self Auction</h6>
                  <button
                    type="button"
                    class="btn btn-primary btn-primaryauction"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Add Auction
                  </button>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SI No.</th>

                        <th scope="col">Auction Id</th>
                        <th scope="col">CarbonCredit</th>
                        <th scope="col">StartBid</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">EndDate</th>
                        <th scope="col">View Bids</th>

                        {/* <th scope="col">{doc.data().NumerofCarbonCredit}</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((user, i) => (
                        <tr>
                          <td>{i+1}</td>
                          <td>{user.id}</td>
                          <td>{user.CarbonCredit} </td>
                          <td> {user.StartBid}</td>
                          <td> {user.StartDate}</td>
                          <td> {user.EndDate}</td>
                          <td>
                          <button
                            type="button"
                            class="btn btn-primary btn-action"
                            data-toggle="modal"
                            style={{"padding":"8px","color":"white"}}
                            data-target="#BidsModal"
                            onClick={() => handlePopUp(user)}
                            >
                             View Bids
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="BidsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="BidsModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="BidsModal">
                Auction Add
              </h6>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      Bid Amount
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                {bidsData.map((val, key) => {
                  return(<tr>
                    <td>
                    {val.body.Currency} {val.LocalCurrency}
                  </td>
                  <td><button className="btn btn-primary" style={{"color":"white"}} onClick={() => acceptBid(val)}>Accept Bid</button></td>
                  </tr>)
                })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLongTitle">
                Auction Add
              </h6>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="#" id="msform" onSubmit={handleSubmit}>
                <div className="container">
                  <div class="row">
                    <div class="col-6">
                      <input
                        type="number"
                        name="carboncredit"
                        placeholder="Carbon Credit"
                      />
                    </div>

                    <div class="col-6">
                      <input
                        type="number"
                        name="startBid"
                        placeholder="Start Bid"
                      />
                    </div>

                    <div class="col-6">
                      <input
                        type="date"
                        name="startDate"
                        placeholder="Start Date"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="date"
                        name="endDate"
                        placeholder="End Date"
                      />
                    </div>

                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
