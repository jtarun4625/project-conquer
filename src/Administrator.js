import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  update,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { useGlobalState } from "./state/index";
import { Link, useNavigate } from "react-router-dom";
import LeftSideBar from "./Component/LeftSideBar";
import Table from "./Component/Table";
export default function Administrator() {
  function handleClick(e) {
    e.preventDefault();
    updateDoc(doc(db, "carboncredit", "43ac6c2fe61344b4a0b32a534a671a07"), {
      Approved: "1",
    });
  }

  const [uid] = useGlobalState("uid");
  const [State, setState] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const donorsData = [];
    const docRef = query(collection(db, "carboncredit"));
    getDocs(docRef).then((response) => {
      response.forEach((doc) => {
        donorsData.push(doc.data());
      });
      setData(donorsData);
    });
  });

  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="heading">Carbon List</h3>
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
                  <h6 class="heading">Carbon Credit</h6>
                  <br></br>{" "}
                  <button className="btn btn-primary creditbtn">
                    <Link to="/carboncredit">Add Carbon Credit</Link>
                  </button>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SI No.</th>
                        <th scope="col">Certificate Number</th>
                        <th scope="col">Certificate Authority</th>
                        <th scope="col">Date of Issue</th>
                        <th scope="col">Carbon Credit</th>
                        <th scope="col">Action</th>
                        <th scope="col">Action</th>

                        {/* <th scope="col">{doc.data().NumerofCarbonCredit}</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((user, i) => (
                        <tr>
                          <td>{i + 1}</td>
                          <td> {user.CertificateAuthority}</td>
                          <td>{user.CertificateNumber}</td>
                          <td>{user.DateofIssue}</td>
                          <td>{user.NumerofCarbonCredit}</td>
                          <td>
                            {user.Approved == "0" ? (
                              <div className="pending1">Approve</div>
                            ) : (
                              <div className="success1">Reject</div>
                            )}
                          </td>
                          <td>
                            {user.Approved == "0" ? (
                              <div className="pending1">Reject</div>
                            ) : (
                              <div className="success1">Success</div>
                            )}
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
    </>
  );
}
