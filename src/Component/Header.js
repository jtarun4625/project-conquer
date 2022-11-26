import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
  return (
    <>
         <header id="header_main" className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">
              <div className="header__left">
                <div className="logo">
                  <a className="light" href="index-2.html">
                    <img
                      id="site-logo"
                      src="assets/images/logo/logo.png"
                      alt=""
                      width="118"
                      height="32"
                      data-retina="assets/images/logo/logo@2x.png"
                      data-width="118"
                      data-height="32"
                    />
                  </a>
                  <a className="dark" href="index-2.html">
                    <img
                      src="assets/images/logo/logo-dark.png"
                      alt=""
                      width="118"
                      height="32"
                      data-retina="assets/images/logo/logo-dark@2x.png"
                      data-width="118"
                      data-height="32"
                    />
                  </a>
                </div>
                <div className="left__main">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item-has-children current-menu-item">
                        {/* <a href="#">Home </a> */}
                        <Link to="/">Home</Link>
                      </li>
                      
                      <li className="menu-item">
                        {/* <a href="markets.html">About Us</a> */}
                        <Link to="/About_us">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        {/* <a href="#">Register</a> */}
                        <Link to="/Register">Register</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Result</a>
                      </li>
                      <li className="menu-item-has-children">
                        {/* <a href="#">Contact Us</a> */}
                        <Link to="/Dashboard">Dashboard</Link>
                      </li>
                      <li className="menu-item-has-children">
                        {/* <a href="#">Contact Us</a> */}
                        <Link to="/Contact">Contact Us</Link>
                      </li>
                   

                  
                   
                    </ul>
                  </nav>
               
                </div>
              </div>

              <div className="header__right">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Assets
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">Binance Visa Card</a>
                    <a className="dropdown-item" href="#">Crypto Loans</a>
                    <a className="dropdown-item" href="#">Binance Pay</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Orders & Trades
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a className="dropdown-item" href="#">Binance Convert</a>
                    <a className="dropdown-item" href="#">Spot</a>
                    <a className="dropdown-item" href="#">Margin</a>
                    <a className="dropdown-item" href="#">P2P</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN/USD
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item language"
                      data-lang="en"
                    >
                      <img
                        src="assets/images/flags/us.jpg"
                        alt="user-image"
                        className="me-1"
                        height="12"
                      />
                      <span className="align-middle">English</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item language"
                      data-lang="sp"
                    >
                      <img
                        src="assets/images/flags/spain.jpg"
                        alt="user-image"
                        className="me-1"
                        height="12"
                      />
                      <span className="align-middle">Spanish</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item language"
                      data-lang="gr"
                    >
                      <img
                        src="assets/images/flags/germany.jpg"
                        alt="user-image"
                        className="me-1"
                        height="12"
                      />
                      <span className="align-middle">German</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item language"
                      data-lang="it"
                    >
                      <img
                        src="assets/images/flags/italy.jpg"
                        alt="user-image"
                        className="me-1"
                        height="12"
                      />
                      <span className="align-middle">Italian</span>
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item language"
                      data-lang="ru"
                    >
                      <img
                        src="assets/images/flags/russia.jpg"
                        alt="user-image"
                        className="me-1"
                        height="12"
                      />
                      <span className="align-middle">Russian</span>
                    </a>
                  </div>
                </div>
                <div className="mode-switcher">
                  <a className="sun" href="#" onclick="switchTheme()">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99993 11.182C9.7572 11.182 11.1818 9.75745 11.1818 8.00018C11.1818 6.24291 9.7572 4.81836 7.99993 4.81836C6.24266 4.81836 4.81812 6.24291 4.81812 8.00018C4.81812 9.75745 6.24266 11.182 7.99993 11.182Z"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 1V2.27273"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 13.7271V14.9998"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.04956 3.04932L3.9532 3.95295"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0469 12.0469L12.9505 12.9505"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 8H2.27273"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.7273 8H15"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.04956 12.9505L3.9532 12.0469"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0469 3.95295L12.9505 3.04932"
                        stroke="#23262F"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="moon" onclick="switchTheme()">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0089 8.97241C12.7855 9.64616 12.4491 10.2807 12.0107 10.8477C11.277 11.7966 10.2883 12.5169 9.1602 12.9244C8.03209 13.3319 6.81126 13.4097 5.64056 13.1486C4.46987 12.8876 3.39772 12.2986 2.54959 11.4504C1.70145 10.6023 1.1124 9.53013 0.851363 8.35944C0.590325 7.18874 0.668097 5.96791 1.07558 4.8398C1.48306 3.71169 2.2034 2.72296 3.1523 1.9893C3.71928 1.55094 4.35384 1.21447 5.02759 0.991088C4.69163 1.84583 4.54862 2.77147 4.61793 3.7009C4.72758 5.17128 5.36134 6.55346 6.40394 7.59606C7.44654 8.63866 8.82873 9.27242 10.2991 9.38207C11.2285 9.45138 12.1542 9.30837 13.0089 8.97241Z"
                        stroke="white"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="dropdown notification">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon-notification"></span>
                  </button>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <div className="dropdown-item">
                      <div className="media server-log">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-server"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="8"
                            rx="2"
                            ry="2"
                          ></rect>
                          <rect
                            x="2"
                            y="14"
                            width="20"
                            height="8"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="6" y1="6" x2="6" y2="6"></line>
                          <line x1="6" y1="18" x2="6" y2="18"></line>
                        </svg>
                        <div className="media-body">
                          <div className="data-info">
                            <h6 className="">Server Rebooted</h6>
                            <p className="">45 min ago</p>
                          </div>

                          <div className="icon-status">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-x"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-item">
                      <div className="media">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-heart"
                        >
                          <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                          ></path>
                        </svg>
                        <div className="media-body">
                          <div className="data-info">
                            <h6 className="">Licence Expiring Soon</h6>
                            <p className="">8 hrs ago</p>
                          </div>

                          <div className="icon-status">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-x"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown-item">
                      <div className="media file-upload">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-file-text"
                        >
                          <path
                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                          ></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <div className="media-body">
                          <div className="data-info">
                            <h6 className="">Kelly Portfolio.pdf</h6>
                            <p className="">670 kb</p>
                          </div>

                          <div className="icon-status">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-check"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-button"><span></span></div>
                <div className="wallet">
                  <a href="wallet.html"> Wallet </a>
                </div>
                <div className="dropdown user">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton4"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="assets/images/avt/avt-01.jpg" alt="" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton4">
                    <a className="dropdown-item" href="#"
                      ><i className="bx bx-user font-size-16 align-middle me-1"></i>
                      <span>Profile</span></a>
                    <a className="dropdown-item" href="#"
                      ><i
                        className="bx bx-wallet font-size-16 align-middle me-1"
                      ></i>
                      <span>My Wallet</span></a>
                    <a className="dropdown-item d-block" href="#"
                      ><span className="badge bg-success float-end">11</span><i
                        className="bx bx-wrench font-size-16 align-middle me-1"
                      ></i>
                      <span>Settings</span></a>
                    <a className="dropdown-item" href="#"
                      ><i
                        className="bx bx-lock-open font-size-16 align-middle me-1"
                      ></i>
                      <span>Lock screen</span></a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="user-login.html"
                      ><i
                        className="bx bx-power-off font-size-16 align-middle me-1 text-danger"
                      ></i>
                      <span>Logout</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </header>

    </>
  );
}

export default Header;
