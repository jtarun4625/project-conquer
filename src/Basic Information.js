import React, { useState } from "react";
import { db } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useGlobalState } from "./state/index";
import { useNavigate } from "react-router-dom";

function logout() {
  const auth = getAuth();
  auth.signOut();
  window.location.href = "/Login";
}

function Basicinformation() {
  const [uid] = useGlobalState("uid");
  console.log(uid);
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [image, setimage] = useState();
  const docRef = doc(db, "users", uid);
  getDoc(docRef)
    .then((response) => {
      setemail(response.data().email);
      setname(response.data().name);
      setimage(response.data().image);
    })
    .catch((error) => console.log(error));

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const mbileInput = event.target.mobile.value; // accessing directly
    const typeofland = event.target.typeofland.value;
    const industrytype = event.target.industrytype.value;
    const employecount = event.target.employecount.value;
    const location = event.target.location.value;
    const address = event.target.address.value;
    console.log("aaa", mbileInput);

    updateDoc(doc(db, "users", uid), {
      mobile: mbileInput,
      typeofland: typeofland,
      industrytype: industrytype,
      employecount: employecount,
      location: location,
      address: address,
    })
      .then((response) => {
        console.log("aaa", response);
      })

      .catch((error) => console.log(error));
    navigate("/Dashboard", { replace: true });
  };

  return (
    <>
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="heading">Basic Infomation</h3>
            </div>
            <div className="col-md-6">
              <ul className="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <p className="fs-18">/</p>
                </li>
                <li>
                  <p className="fs-18">User</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="user-profile flat-tabs">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-12">
              <div className="user-info center">
                <div className="avt">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="imgInp"
                    required
                  />
                  <img id="blah" src={image} alt="no file" />
                </div>
                <h6 className="name">{name}</h6>
                <p>{email}</p>
              </div>
              <ul className="menu-tab">
                <li className="active">
                  <h6 className="fs-16">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2766 12.854C10.2994 12.854 10.3221 12.854 10.3495 12.854C10.3586 12.854 10.3677 12.854 10.3768 12.854C10.3905 12.854 10.4087 12.854 10.4224 12.854C11.7572 12.8312 12.8369 12.362 13.6342 11.4645C15.3881 9.48733 15.0966 6.09787 15.0647 5.77441C14.9508 3.3462 13.8027 2.18449 12.8551 1.64236C12.149 1.2369 11.3244 1.01822 10.4041 1H10.3723C10.3677 1 10.3586 1 10.354 1H10.3267C9.82101 1 8.82786 1.082 7.87571 1.62414C6.91901 2.16627 5.75274 3.32798 5.63885 5.77441C5.60696 6.09787 5.31539 9.48733 7.06935 11.4645C7.86205 12.362 8.94176 12.8312 10.2766 12.854ZM6.85523 5.8883C6.85523 5.87464 6.85978 5.86097 6.85978 5.85186C7.01012 2.5854 9.32899 2.2346 10.3221 2.2346H10.3404C10.3495 2.2346 10.3631 2.2346 10.3768 2.2346C11.6069 2.26194 13.6979 2.76307 13.8392 5.85186C13.8392 5.86552 13.8392 5.87919 13.8437 5.8883C13.8483 5.92019 14.1672 9.01809 12.7185 10.649C12.1444 11.296 11.3791 11.6149 10.3723 11.624C10.3631 11.624 10.3586 11.624 10.3495 11.624C10.3404 11.624 10.3358 11.624 10.3267 11.624C9.32444 11.6149 8.55452 11.296 7.98505 10.649C6.54088 9.02721 6.85067 5.91564 6.85523 5.8883Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.4"
                      />
                      <path
                        d="M19.7116 18.4778C19.7116 18.4733 19.7116 18.4687 19.7116 18.4642C19.7116 18.4277 19.7071 18.3913 19.7071 18.3503C19.6797 17.4482 19.6205 15.3389 17.6433 14.6647C17.6297 14.6601 17.6114 14.6556 17.5978 14.651C15.5431 14.1271 13.8347 12.9426 13.8165 12.9289C13.5386 12.733 13.1559 12.8014 12.96 13.0793C12.7641 13.3572 12.8325 13.7399 13.1104 13.9358C13.1878 13.9904 15.001 15.2524 17.2697 15.8355C18.3312 16.2136 18.4497 17.348 18.4816 18.3867C18.4816 18.4277 18.4816 18.4642 18.4861 18.5006C18.4907 18.9106 18.4633 19.5439 18.3905 19.9083C17.6524 20.3274 14.7595 21.7762 10.3587 21.7762C5.9761 21.7762 3.06499 20.3229 2.3224 19.9038C2.24951 19.5393 2.21762 18.9061 2.22673 18.496C2.22673 18.4596 2.23129 18.4232 2.23129 18.3822C2.26318 17.3434 2.38163 16.2091 3.44311 15.8309C5.71186 15.2478 7.52504 13.9813 7.60249 13.9312C7.88039 13.7353 7.94873 13.3526 7.75283 13.0747C7.55693 12.7968 7.17425 12.7285 6.89635 12.9244C6.87813 12.9381 5.17884 14.1225 3.1151 14.6464C3.09688 14.651 3.08321 14.6556 3.06954 14.6601C1.09235 15.3389 1.03313 17.4482 1.0058 18.3457C1.0058 18.3867 1.0058 18.4232 1.00124 18.4596C1.00124 18.4642 1.00124 18.4687 1.00124 18.4733C0.996684 18.7102 0.992129 19.9265 1.23358 20.537C1.27914 20.6555 1.36114 20.7557 1.47048 20.824C1.60715 20.9151 4.88272 23.0017 10.3633 23.0017C15.8438 23.0017 19.1194 20.9106 19.256 20.824C19.3608 20.7557 19.4474 20.6555 19.4929 20.537C19.7207 19.9311 19.7162 18.7147 19.7116 18.4778Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.4"
                      />
                    </svg>
                    Basic Information
                  </h6>
                </li>
                <li>
                  <h6 className="fs-16">
                    <svg
                      onClick={() => logout()}
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9999 14.0005C16.3708 14.002 15.7509 14.1522 15.191 14.439C14.631 14.7257 14.1468 15.1409 13.7779 15.6505L8.76289 12.3075C9.07893 11.4648 9.07893 10.5362 8.76289 9.6935L13.7779 6.3505C14.3408 7.11364 15.1574 7.65103 16.0809 7.86613C17.0045 8.08123 17.9745 7.95995 18.8166 7.52406C19.6588 7.08817 20.3179 6.36626 20.6756 5.48802C21.0332 4.60979 21.066 3.63279 20.7679 2.73257C20.4699 1.83235 19.8606 1.06791 19.0496 0.576596C18.2385 0.0852811 17.2788 -0.100704 16.3429 0.0520557C15.407 0.204815 14.5563 0.686306 13.9435 1.41002C13.3308 2.13374 12.9962 3.05224 12.9999 4.0005C13.0064 4.14622 13.0211 4.29145 13.0439 4.4355L7.65289 8.0295C7.07837 7.51159 6.36602 7.17137 5.6021 7.05003C4.83818 6.92869 4.05546 7.03144 3.34874 7.34584C2.64202 7.66024 2.04162 8.17281 1.62025 8.82145C1.19888 9.4701 0.974609 10.227 0.974609 11.0005C0.974609 11.774 1.19888 12.5309 1.62025 13.1796C2.04162 13.8282 2.64202 14.3408 3.34874 14.6552C4.05546 14.9696 4.83818 15.0723 5.6021 14.951C6.36602 14.8296 7.07837 14.4894 7.65289 13.9715L13.0439 17.5655C13.0211 17.7096 13.0064 17.8548 12.9999 18.0005C12.9999 18.7916 13.2345 19.565 13.674 20.2228C14.1135 20.8806 14.7383 21.3933 15.4692 21.696C16.2001 21.9988 17.0043 22.078 17.7803 21.9236C18.5562 21.7693 19.2689 21.3883 19.8283 20.8289C20.3877 20.2695 20.7687 19.5568 20.923 18.7809C21.0774 18.0049 20.9982 17.2007 20.6954 16.4698C20.3927 15.7389 19.88 15.1142 19.2222 14.6746C18.5644 14.2351 17.791 14.0005 16.9999 14.0005ZM16.9999 2.0005C17.3955 2.0005 17.7821 2.1178 18.111 2.33756C18.4399 2.55733 18.6963 2.86969 18.8477 3.23514C18.999 3.60059 19.0386 4.00272 18.9615 4.39068C18.8843 4.77865 18.6938 5.13501 18.4141 5.41472C18.1344 5.69442 17.778 5.8849 17.3901 5.96207C17.0021 6.03925 16.6 5.99964 16.2345 5.84826C15.8691 5.69689 15.5567 5.44054 15.337 5.11164C15.1172 4.78275 14.9999 4.39607 14.9999 4.0005C14.9999 3.47007 15.2106 2.96136 15.5857 2.58629C15.9608 2.21122 16.4695 2.0005 16.9999 2.0005ZM4.99989 13.0005C4.60432 13.0005 4.21764 12.8832 3.88875 12.6634C3.55985 12.4437 3.3035 12.1313 3.15213 11.7659C3.00075 11.4004 2.96114 10.9983 3.03832 10.6103C3.11549 10.2224 3.30597 9.866 3.58567 9.58629C3.86538 9.30659 4.22174 9.1161 4.60971 9.03893C4.99767 8.96176 5.3998 9.00137 5.76525 9.15274C6.13071 9.30412 6.44306 9.56047 6.66283 9.88936C6.88259 10.2183 6.99989 10.6049 6.99989 11.0005C6.99989 11.5309 6.78917 12.0396 6.4141 12.4147C6.03903 12.7898 5.53032 13.0005 4.99989 13.0005ZM16.9999 20.0005C16.6043 20.0005 16.2177 19.8832 15.8888 19.6634C15.5599 19.4437 15.3035 19.1313 15.1521 18.7659C15.0008 18.4004 14.9612 17.9983 15.0383 17.6103C15.1155 17.2224 15.306 16.866 15.5857 16.5863C15.8654 16.3066 16.2218 16.1161 16.6097 16.0389C16.9977 15.9618 17.3998 16.0014 17.7653 16.1527C18.1307 16.3041 18.4431 16.5605 18.6628 16.8894C18.8826 17.2183 18.9999 17.6049 18.9999 18.0005C18.9999 18.5309 18.7892 19.0396 18.4141 19.4147C18.039 19.7898 17.5303 20.0005 16.9999 20.0005Z"
                        fill="#3772FF"
                      />
                    </svg>
                    Sign out
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-9 col-md-12">
              <div className="content-tab">
                <div className="content-inner profile">
                  <form action="#" onSubmit={handleSubmit}>
                    <h4>Basic Infomation</h4>

                    <div className="form-group d-flex s1">
                      <input
                        required
                        type="text"
                        className="form-control"
                        value={name}
                        name="name"
                        disabled
                        placeholder="Fist Name"
                      />
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Email Id"
                        value={email}
                        required
                        disabled
                      />
                    </div>
                    <div className="form-group d-flex">
                      <select
                        className="form-control"
                        name="typeofland"
                        id="search-select"
                      >
                        <option value="" selected disabled hidden>
                          Choose here
                        </option>

                        <option value="Bussiness and Factory Land">
                          Bussiness and Factory Land
                        </option>
                        <option value="Agriculture">
                          Agriculture and Forest Land
                        </option>
                        <option>Choose</option>
                      </select>
                      <div className="sl">
                        <input
                          type="tel"
                          name="mobile"
                          className="form-control"
                          placeholder="Your Phone number"
                        />
                      </div>
                    </div>

                    <h6 className="two">Bussiness or Factory Details</h6>

                    <section>
                      <div class="dropdown-content-bond"></div>
                      <div class="dropdown-content-bond">
                        <div className="form-group d-flex s1">
                          <select
                            className="form-control"
                            name="industrytype"
                            id="search-select"
                          >
                            <option value="" selected disabled hidden>
                              Choose here
                            </option>

                            <option value="Bussiness and Factory Land">
                              Agriculture
                            </option>
                            <option value="Agriculture">
                              Basic Metal Production.
                            </option>
                            <option>Chemical industries.</option>
                            <option>Construction.</option>
                            <option>Food; drink; tobacco</option>
                          </select>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Employee Count"
                            name="employecount"
                          />
                        </div>
                        <div className="form-group d-flex s1">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="noofemploye"
                          >
                            <option>1 -10</option>
                            <option>10-50</option>
                            <option>50-100</option>
                            <option>100+</option>
                          </select>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                            name="location"
                          />
                        </div>
                        <div className="form-group d-flex s1">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            style={{ width: "100%" }}
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div class="dropdown-content-bond">
                        {/* <div className="form-group d-flex s1">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                            name="location"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Land Size"
                            name="landsize"
                          />
                        </div>

                        <div className="form-group d-flex s1">
                          <input
                            type="text"
                            className="form-control"
                            style={{ width: "100%" }}
                            placeholder="Address"
                            name="address"
                          />
                        </div> */}
                      </div>
                      <div class="dropdown-content-bond"></div>
                    </section>

                    <input
                      type="submit"
                      class="btn-action"
                      value="Submit Detail"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Basicinformation;
