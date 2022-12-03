import React, { useState } from "react";
import { db } from "./firebase";
import {  doc, setDoc } from "firebase/firestore";
import swal from "sweetalert";
import LeftSideBar from "./Component/LeftSideBar";
import { useGlobalState } from "./state/index";
import { v4 as uuid } from 'uuid';
const unique_id = uuid();
 const newkey = unique_id.replace(/\-/g,"");

function Add() {
  

    const [uid] = useGlobalState("uid");
  const handleSubmit = (event) => {
    const CertificateName = event.target.CertificateName.value;
    const CertficateNumber = event.target.CertficateNumber.value;
    const DateofIssue = event.target.DateofIssue.value;
    const CertificateImage = event.target.CertificateImage.value;
    const NumerofCarbonCredit = event.target.NumerofCarbonCredit.value;

    event.preventDefault();
    setDoc(doc(db, "carboncredit", newkey), {
      CertificateAuthority: CertificateName,
      CertificateNumber: CertficateNumber,
      DateofIssue: DateofIssue,
      CertificateFile: CertificateImage,
      NumerofCarbonCredit: NumerofCarbonCredit,
      uid: uid,
      Approved:"0"

    })
      .then((response) => {
        swal({
          title: "Carbon Credit Registered!",
          text: "Thank for Submit!",
          icon: "success",
          button: "Aww yiss!",
        });
      })

      .catch((error) => console.log(error));
    // navigate("/Dashboard", { replace: true });
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
          <LeftSideBar/>
            <div class="col-xl-9 col-md-12">
              <div class="content-tab">
                <div class="content-inner referrals">
                  <div class="main">
                    <div class="refe">
                      <div class="container-fluid">
                        <div class="row justify-content-center">
                          <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                            <div class="card px-0 pt-4 pb-0 mt-3 ">
                              {/* <h2 id="heading">Sign Up Your User Account</h2> */}
                              <p>Fill all form field to go to next step</p>
                              <br></br>
                              <form
                                id="msform"
                                action="#"
                                onSubmit={handleSubmit}
                              >
                                <ul id="progressbar">
                                  <li class="active" id="account">
                                    <strong>Add Certificate</strong>
                                  </li>
                                  <li id="personal">
                                    <strong>Personal</strong>
                                  </li>
                                  <li id="payment">
                                    <strong>Image</strong>
                                  </li>
                                  <li id="confirm">
                                    <strong>Finish</strong>
                                  </li>
                                </ul>
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <br />
                                <fieldset>
                                  <div class="form-card">
                                    <div className="col-12">
                                      <div class="row">
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Name of Authority: *
                                          </label>
                                          <input
                                            type="text"
                                            name="CertificateName"
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Certificate Number: *
                                          </label>
                                          <input
                                            type="tel"
                                            name="CertficateNumber"
                                          />
                                        </div>
                                      </div>

                                      <div class="row">
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Date of Issue : *
                                          </label>
                                          <input
                                            type="date"
                                            name="DateofIssue"
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Number of Carbon Credit : *
                                          </label>
                                          <input
                                            type="tel"
                                            name="NumerofCarbonCredit"
                                          />
                                        </div>
                                      </div>

                                      <div class="row">
                                        
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Certificate Image : *
                                          </label>
                                          <input
                                            type="file"
                                            name="CertificateImage"
                                          />
                                        </div>
                                        <div class="col">
                                          
                                        </div>
                                      </div>
                                    </div>

                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <input
                                      type="submit"
                                      class="btn-action"
                                      value="Submit Detail"
                                    />
                                    <br></br>
                                  </div>
                                  <input
                                    type="button"
                                    name="next"
                                    class="next action-button"
                                    value="Next"
                                  />
                                </fieldset>
                                <fieldset>
                                  <div class="form-card">
                                    <div class="row">
                                      <div class="col-7"></div>
                                      <div class="col-5">
                                        <h2 class="steps">Step 2 - 4</h2>
                                      </div>
                                    </div>
                                    <label class="fieldlabels">
                                      First Name: *
                                    </label>
                                    <input type="text" name="fname" />
                                    <label class="fieldlabels">
                                      Last Name: *
                                    </label>
                                    <input type="text" name="lname" />
                                    <label class="fieldlabels">
                                      Contact No.: *
                                    </label>
                                    <input type="text" name="phno" />
                                    <label class="fieldlabels">
                                      Alternate Contact No.: *
                                    </label>
                                    <input type="text" name="phno_2" />
                                  </div>
                                  <input
                                    type="button"
                                    name="next"
                                    class="next action-button"
                                    value="Next"
                                  />
                                  <input
                                    type="button"
                                    name="previous"
                                    class="previous action-button-previous"
                                    value="Previous"
                                  />
                                </fieldset>
                                <fieldset>
                                  <div class="form-card">
                                    <div class="row">
                                      <div class="col-7">
                                        <h2 class="fs-title">Image Upload:</h2>
                                      </div>
                                      <div class="col-5">
                                        <h2 class="steps">Step 3 - 4</h2>
                                      </div>
                                    </div>
                                    <label class="fieldlabels">
                                      Upload Your Photo:
                                    </label>
                                    <input
                                      type="file"
                                      name="pic"
                                      accept="image/*"
                                    />
                                    <label class="fieldlabels">
                                      Upload Signature Photo:
                                    </label>
                                    <input
                                      type="file"
                                      name="pic"
                                      accept="image/*"
                                    />
                                  </div>
                                  <input
                                    type="button"
                                    name="next"
                                    class="next action-button"
                                    value="Submit"
                                  />
                                  <input
                                    type="button"
                                    name="previous"
                                    class="previous action-button-previous"
                                    value="Previous"
                                  />
                                </fieldset>
                                <fieldset>
                                  <div class="form-card">
                                    <div class="row">
                                      <div class="col-7">
                                        <h2 class="fs-title">Finish:</h2>
                                      </div>
                                      <div class="col-5">
                                        <h2 class="steps">Step 4 - 4</h2>
                                      </div>
                                    </div>
                                    <br />
                                    <br />
                                    <h2 class="purple-text text-center">
                                      <strong>SUCCESS !</strong>
                                    </h2>
                                    <br />
                                    <div class="row justify-content-center">
                                      <div class="col-3">
                                        
                                        <img
                                          src="https://i.imgur.com/GwStPmg.png"
                                          class="fit-image"
                                        />
                                      </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="row justify-content-center">
                                      <div class="col-7 text-center">
                                        <h5 class="purple-text text-center">
                                          You Have Successfully Signed Up
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Add;
