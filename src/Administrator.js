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

export default function Administrator() {
  const [rerender, setRerender] = useState(false);

  const handleApprove = data => e  =>{
    e.preventDefault()
    updateDoc(doc(db, "carboncredit", data.id), {
      Approved: "1",
    });
    setRerender(!rerender)
  }

  const handleReject = data => e =>{
    e.preventDefault()
    updateDoc(doc(db, "carboncredit", data.id), {
      Approved: "2",
    });
    setRerender(!rerender)
    console.log(data)
  }


  const [uid] = useGlobalState("uid");
  const [State, setState] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const donorsData = [];
    const docRef = query(collection(db, "carboncredit"));
    getDocs(docRef).then((response) => {
      response.forEach((doc) => {
        var data =doc.data()
        console.log(data)
        data["id"] = doc.id
        donorsData.push(data);
      });
      setData(donorsData);
    });
  },[rerender]);

  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5 class="heading">Administrator Carbon Credit Approval</h5>
            </div>
          </div>
        </div>
      </section>
      <section class="user-profile flat-tabs">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-md-12">
              <div class="content-tab">
                <div className="content-inner Onging Bid">
                  <br></br>
                  <h6 class="heading">Carbon Credit Approval</h6>
                  <p class="heading">Approval process has to be manual as it required multiple background checks. This process is indicative as of now.</p>
                  <br></br>{" "}

                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SI No.</th>
                        <th scope="col">Certificate Number</th>
                        <th scope="col">Certificate Authority</th>
                        <th scope="col">Image</th>
                        <th scope="col">Date of Issue</th>
                        <th scope="col">Carbon Credit</th>
                        <th scope="col">Approve / Reject</th>

                        {/* <th scope="col">{doc.data().NumerofCarbonCredit}</th> */}
                      </tr>
                    </thead>
                    <tbody>

                      {data.map((user, i) => (
                        
                        <tr>
                          <td>{i + 1}</td>
                          <td> {user.CertificateAuthority}</td>
                          <td>{user.CertificateNumber}</td>
                          <td><a href={user.CertificateFile} target="_blank">View Image</a></td>
                          <td>{user.DateofIssue}</td>
                          <td>{user.NumerofCarbonCredit}</td>
                          <td>
                            {user.Approved == "0" ? (
                              <div>
                                <div className="row">
                                <div className="col-md-4"><button className="pending1" style={{"color":"green"}} onClick={handleApprove(user)}>Approve</button></div> 
                                <div className="col-md-4"><button className="pending1" style={{"color":"red"}} onClick={handleReject(user)}>Reject</button></div> 

                                </div>
                              </div>
                            ) : (
                              user.Approved == "1" ? (
                                <div>
                                  <div className="row">
                                  <div className="col-md-4"><div className="pending1" style={{"color":"green"}}>Approved</div></div> 
  
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <div className="row">
                                  <div className="col-md-4"><div className="pending1" style={{"color":"red"}}>Rejected</div></div> 
  
                                  </div>
                                </div>
                              )
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
