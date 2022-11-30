
import React, { useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useGlobalState } from "./state/index";
import { Link, useNavigate } from "react-router-dom";
import LeftSideBar from "./Component/LeftSideBar";
function Dashboard() {


  const [uid] = useGlobalState("uid");
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState();

  const [Mobile, setMobile] = useState();
  const [TypeofLand, settypeofland] = useState();
  const [EmployeeCount, setEmployeeCount] = useState();
  const [Address, setAddress] = useState();



  const [Location, setLocation] = useState();
  const docRef = doc(db, "users", uid);
  getDoc(docRef)
    .then((response) => {
      setemail(response.data().Email);
      setname(response.data().Name);
      setimage(response.data().Image);
      setMobile(response.data().Mobile);
      setEmployeeCount(response.data().EmployeeCount);
      setAddress(response.data().Address);



      settypeofland(response.data().TypeofLand);

      setLocation(response.data().Location);





    })
    .catch((error) => console.log(error));





  // setDoc(doc(db, "carboncredit", uid), {
  //   CertificateAuthority: "India",
  //   CertificateNumber: "10000",
  //   DateofIssue: "20-10-1998",
  //   CertificateFile: "Image.url",
  //   NumerofCarbonCredit: "50",

  // })
  //   .then((response) => {
  //     console.log("aaa", response);
  //   })


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
                <div class="content-inner profile">
                  <form action="#">
                    <h4>Basic Details</h4>
                    <br/>
                    <div class="form-group d-flex s1">
                      <input type="text" class="form-control" value={`Name : ${name}`} />
                      <input type="text" class="form-control" value={`E-mail : ${email}`} />

                    </div>
                    <div class="form-group d-flex">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        value={`Phone : ${Mobile}`}
                      />
                      <div class="sl">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          value={`Location : ${Location}`}
                        />
                      </div>
                    </div>

                    <div class="form-group d-flex">
                      <div class="sl">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          value={`Type of Land : ${TypeofLand}`}
                        />
                      </div>
                      <div class="sl">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          value={`EmployeeCount : ${EmployeeCount}`}
                        />
                        {/* <input
                          class="form-control fc-datepicker"
                          placeholder="dD/MM/YY"
                          type="text"
                          value={Address}

                        /> */}
                      </div>
                    </div>

                      <div class="form-group d-flex">
                      <div class="sl">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          value={`Address : ${Address}`}
                        />
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
              </div>
               

          </div>
        </div>
      </section>


      {/* start model  */}
      <div class="modal fade" id="susbc-form">
        <div class="modal-dialog shadow-lg p-3 mb-5 bg-white rounded">
          <div class="modal-content sub-bg">
            <div class="modal-header subs-header">
              {/* <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}

            </div>
            <h6 className="text-center"> Add Auction Form</h6>
            <div class="modal-body">


              <div class="row">
                <div class="col-md-12">
                  <form id="subs-form">
                    <div class="form-group row">
                      <div class="col-md-12 col-xs-12">
                        <label for="firstName" class="label-custom">First Name </label>
                        <input type="text" class="form-control input-custom" id="firstName" required />
                      </div>
                      <div class="col-md-12 col-xs-12" >
                        <label for="firstName" className="label-custom">Price </label>
                        <input type="text" class="form-control input-custom" id="firstName" required />
                      </div>
                      <div class="col-md-12 col-xs-12">
                        <label for="firstName" className="label-custom">Bid Price </label>
                        <input type="text" class="form-control input-custom" id="firstName" required />
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary text-white">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="susbc-form-thank">
        <div class="modal-dialog">
          <div class="modal-content sub-bg shadow-lg">
            <div class="modal-header subs-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

            </div>
            <div class="modal-body">
              <div class="text-center">
                <img src="http://pluspng.com/img-png/national-geographic-logo-vector-png-national-geographic-kids-logo-vector-300.png" alt="" />
              </div>
              <div class="heading-text text-center">
                <h4>Thank you For Subscribe</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
