import React, { useState } from "react";
import { db,storage } from "./firebase";
import {  doc, setDoc } from "firebase/firestore";
import swal from "sweetalert";
import LeftSideBar from "./Component/LeftSideBar";
import { useGlobalState } from "./state/index";
import { v4 as uuid } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL, get } from "firebase/storage";

const unique_id = uuid();
 const newkey = unique_id.replace(/\-/g,"");

function Add() {
  // State to store uploaded file
const [file, setFile] = useState("");

// progress
const [percent, setPercent] = useState(0);


// Handle file upload event and update state
function handleChange(event) {
  setFile(event.target.files[0]);
  }
  
  const handleUpload = () => {
  
  };

    const [uid] = useGlobalState("uid");
  const handleSubmit = (event) => {


    event.preventDefault();
    if (!file) {
      alert("Please upload an image first!");
      }
      console.log(file)
      const storageRef = ref(storage, `/files/${file.name}`);
      
      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot.bytesTransferred)
      const percent = Math.round(
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      
      // update progress
      setPercent(percent);
      },
      (err) => console.log(err),
      () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        const CertificateName = event.target.CertificateName.value;
        const CertficateNumber = event.target.CertficateNumber.value;
        const DateofIssue = event.target.DateofIssue.value;
        const NumerofCarbonCredit = event.target.NumerofCarbonCredit.value;

        
        console.log(url);
            setDoc(doc(db, "carboncredit", newkey), {
              CertificateAuthority: CertificateName,
              CertificateNumber: CertficateNumber,
              DateofIssue: DateofIssue,
              CertificateFile: url,
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
      });
      }
      );

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
                              <h6 id="heading">Add Your Carbon Credits</h6>
                              <br/><br/>
                              <form
                                id="msform"
                                action="#"
                                onSubmit={handleSubmit}
                              >

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
                                            onChange={handleChange}
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
                                      class="btn btn-action"
                                      value="Submit Detail"
                                      onChange={handleUpload}
                                    />
                                    <br></br>
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
