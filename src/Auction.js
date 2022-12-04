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

export default function Auction() {

   const [data, setData] = useState([]);
  useEffect(() => {
    const donorsData = [];
  const docRef = query(collection(db, "auctions"), where("UserId", "==", "5t4LdnrfATO9ArBWchBjd47vSUE3"));
  getDocs(docRef).then((response) => {
    response.forEach((doc) => {
      donorsData.push(doc.data());
    });
     setData(donorsData);
  });
      // {
      //   results.forEach((snapshot) => {
      //     donorsData.push(snapshot.val());
      //   });
        // setData(donorsData);
      });
  // }, []);



  
  const [uid] = useGlobalState("uid");
  const [State, setState] = useState([]);

  

  const handleSubmit = (event) => {
    alert("hkhk");
    const carboncredit = event.target.carboncredit.value;
    const endDate = event.target.endDate.value;
    const startBid = event.target.startBid.value;
    const startDate = event.target.startDate.value;

    event.preventDefault();
    setDoc(doc(db, "auctions", newkey), {
      CarbonCredit: carboncredit,
      StartBid: startBid,
      StartDate: startDate,
      EndDate: endDate,
      UserId: uid,
    })
      .then((response) => {
        swal({
          title: "Auction  Added!",
          text: "Thank for Submit!",
          icon: "success",
          button: "Ok!",
        });
      })

      .catch((error) => console.log(error));
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
