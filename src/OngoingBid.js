import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import LeftSideBar from "./Component/LeftSideBar";
import { v4 as uuid } from "uuid";
import { useGlobalState } from "./state/index";
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
const newkey = unique_id.replace(/\-/g, "");

export default function OngingBid() {

   const [data, setData] = useState([]);
   const donorsData = [];

  useEffect(() => {

    const docRef = query(collection(db, "auctions"));
    getDocs(docRef).then((response) => {
      response.forEach((doc) => {
        donorsData.push(doc.data());
      });
       setData(donorsData);
    });
      },[]);
  // }, []);



  
  const [uid] = useGlobalState("uid");
  const [State, setState] = useState([]);

  


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
                  <h6 class="heading">Onging Bid</h6>
                  
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SI No.</th>
                        <th scope="col">CarbonCredit</th>
                        <th scope="col">StartBid</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">EndDate</th>

                        {/* <th scope="col">{doc.data().NumerofCarbonCredit}</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((user, i) => (
                        <tr>
                          <td>{i+1}</td>
                          <td>{user.CarbonCredit} </td>
                          <td> {user.StartBid}</td>
                          <td> {user.StartDate}</td>
                          <td> {user.EndDate}</td>
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
     
    </>
  );
}
