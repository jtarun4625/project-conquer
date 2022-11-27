
import React from "react";
import { useState } from "react";
import Table from "./Component/Table";

  function Dashboard(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");



    let handleSubmit =  () => {

let data1 ={
"name":name,
"email":email,
"mobile":mobileNumber
};
console.log(data1)
    };
  return (
    <>
    {/* <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <div class="banner__content">
              <h2 class="title">Today’s Cryptocurrency prices</h2>
              <p class="fs-24 desc">
                The global crypto market cap is <span>$1.86T</span>
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-md-12">
            <div class="banner__image">
              <img src="assets/images/layout/banner-04.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section> */}
    
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
          <div class="col-xl-3 col-md-12">
            {/* <div class="user-info center">
              <div class="avt">
                <input
                  type="file"
                  class="custom-file-input"
                  id="imgInp"
                  required
                />
                <img id="blah" src="assets/images/avt/avt.png" alt="no file" />
              </div>
              <h6 class="name">Peterson kennady</h6>
              <p>petersonkenn@demo.com</p>
            </div> */}
            <ul class="menu-tab">
              <li class="active">
                <h6 class="fs-16">
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
                  User Profile
                </h6>
              </li>
              <li>
                <h6 class="fs-16">
                  <svg
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
                  Add Carban Credits
                </h6>
              </li>
              <li>
                <h6 class="fs-16">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7031 12C22.7031 11.0752 22.5852 10.1602 22.3522 9.27366L23.7069 8.27705L21.0776 3.72291L19.5348 4.39884C18.2158 3.08925 16.6007 2.15602 14.815 1.67166L14.6293 0H9.37059L9.18487 1.67166C7.39912 2.15602 5.78404 3.08925 4.46508 4.39884L2.92233 3.72291L0.292969 8.27705L1.64766 9.27366C1.41469 10.1602 1.29684 11.0752 1.29684 12C1.29684 12.9248 1.41473 13.8397 1.64766 14.7263L0.292969 15.7229L2.92233 20.277L4.46508 19.6011C5.78409 20.9108 7.39917 21.844 9.18487 22.3283L9.37059 24H14.6293L14.815 22.3283C16.6008 21.844 18.2159 20.9107 19.5348 19.6011L21.0776 20.277L23.7069 15.7229L22.3522 14.7263C22.5852 13.8397 22.7031 12.9248 22.7031 12ZM14.0184 21.0765L13.5271 21.1853L13.3706 22.5938H10.6293L10.4728 21.1853L9.98146 21.0765C8.1187 20.6643 6.44794 19.6989 5.14987 18.2849L4.81003 17.9147L3.51084 18.4839L2.14017 16.1098L3.28041 15.271L3.12966 14.7916C2.84662 13.8913 2.70309 12.952 2.70309 12C2.70309 11.0479 2.84662 10.1087 3.12966 9.20841L3.28041 8.72897L2.14017 7.89019L3.51084 5.51611L4.81003 6.08531L5.14987 5.71509C6.44794 4.30106 8.1187 3.33572 9.98146 2.92345L10.4728 2.8147L10.6293 1.40625H13.3706L13.5271 2.8147L14.0184 2.92345C15.8812 3.33577 17.552 4.30111 18.85 5.71509L19.1899 6.08531L20.4891 5.51611L21.8597 7.89019L20.7195 8.72897L20.8702 9.20841C21.1533 10.1087 21.2968 11.048 21.2968 12C21.2968 12.952 21.1533 13.8913 20.8702 14.7916L20.7195 15.271L21.8597 16.1098L20.4891 18.4839L19.1899 17.9147L18.85 18.2849C17.552 19.6989 15.8812 20.6643 14.0184 21.0765Z"
                      fill="#3772FF"
                      stroke="#3772FF"
                      stroke-width="0.5"
                    />
                    <path
                      d="M9.20821 10.3902L8.20354 9.40625L5.63184 12.0321L8.25777 14.6038L9.24168 13.5991L7.62046 12.0114L9.20821 10.3902Z"
                      fill="#3772FF"
                      stroke="#3772FF"
                      stroke-width="0.5"
                    />
                    <path
                      d="M14.7913 10.3902L16.379 12.0114L14.7578 13.5991L15.7417 14.6038L18.3677 12.0321L15.796 9.40625L14.7913 10.3902Z"
                      fill="#3772FF"
                      stroke="#3772FF"
                      stroke-width="0.5"
                    />
                    <path
                      d="M10.3169 16.6016L12.3168 7.09721L13.6936 7.3869L11.6937 16.8913L10.3169 16.6016Z"
                      fill="#3772FF"
                      stroke="#3772FF"
                      stroke-width="0.5"
                    />
                  </svg>

                  Wallet
                </h6>
              </li>

              <li>
                <h6 class="fs-16">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.20008 0H0.600074C0.268726 0 0 0.268726 0 0.600074V4.20008C0 4.53142 0.268726 4.80015 0.600074 4.80015C0.931421 4.80015 1.19993 4.53142 1.19993 4.20008V1.20015H4.20008C4.53142 1.20015 4.79993 0.931422 4.79993 0.600074C4.79993 0.268726 4.53142 0 4.20008 0Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M4.20008 17.9984H1.19993V14.9985C1.19993 14.6672 0.931421 14.3984 0.600074 14.3984C0.268726 14.3984 0 14.6672 0 14.9985V18.5985C0 18.9299 0.268726 19.1986 0.600074 19.1986H4.20008C4.53142 19.1986 4.79993 18.9299 4.79993 18.5985C4.79993 18.2672 4.53142 17.9984 4.20008 17.9984Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M23.3998 0H19.7998C19.4684 0 19.1997 0.268726 19.1997 0.600074C19.1997 0.931422 19.4684 1.20015 19.7998 1.20015H22.7997V4.20008C22.7997 4.53142 23.0684 4.80015 23.3998 4.80015C23.7311 4.80015 23.9998 4.53142 23.9998 4.20008V0.600074C23.9998 0.268726 23.7311 0 23.3998 0Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M23.3998 14.3984C23.0684 14.3984 22.7997 14.6672 22.7997 14.9985V17.9984H19.7998C19.4684 17.9984 19.1997 18.2672 19.1997 18.5985C19.1997 18.9299 19.4684 19.1986 19.7998 19.1986H23.3998C23.7311 19.1986 23.9998 18.9299 23.9998 18.5985V14.9985C23.9998 14.6672 23.7311 14.3984 23.3998 14.3984Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M3.64988 3.60156H4.95012C5.3091 3.60156 5.6 3.87029 5.6 4.20164V15.0016C5.6 15.333 5.3091 15.6017 4.95012 15.6017H3.64988C3.2909 15.6017 3 15.333 3 15.0016V4.20164C3 3.87029 3.2909 3.60156 3.64988 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M7.90007 3.60156C7.51347 3.60156 7.2002 3.87029 7.2002 4.20164V15.0016C7.2002 15.333 7.51347 15.6017 7.90007 15.6017C8.28666 15.6017 8.6002 15.333 8.6002 15.0016V4.20164C8.6002 3.87029 8.28666 3.60156 7.90007 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M11.1501 3.60156H12.4499C12.8089 3.60156 13.1 3.87029 13.1 4.20164V15.0016C13.1 15.333 12.8089 15.6017 12.4499 15.6017H11.1501C10.7911 15.6017 10.5 15.333 10.5 15.0016V4.20164C10.5 3.87029 10.7911 3.60156 11.1501 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M15.4998 3.60156C15.1133 3.60156 14.7998 3.87029 14.7998 4.20164V15.0016C14.7998 15.333 15.1133 15.6017 15.4998 15.6017C15.8863 15.6017 16.1998 15.333 16.1998 15.0016V4.20164C16.1998 3.87029 15.8863 3.60156 15.4998 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M18.6501 3.60156H19.9499C20.3089 3.60156 20.6 3.87029 20.6 4.20164V15.0016C20.6 15.333 20.3089 15.6017 19.9499 15.6017H18.6501C18.2911 15.6017 18 15.333 18 15.0016V4.20164C18 3.87029 18.2911 3.60156 18.6501 3.60156Z"
                      fill="#3772FF"
                    />
                  </svg>

                  Auction Manage
                </h6>
              </li>

              <li>
                <h6 class="fs-16">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.20008 0H0.600074C0.268726 0 0 0.268726 0 0.600074V4.20008C0 4.53142 0.268726 4.80015 0.600074 4.80015C0.931421 4.80015 1.19993 4.53142 1.19993 4.20008V1.20015H4.20008C4.53142 1.20015 4.79993 0.931422 4.79993 0.600074C4.79993 0.268726 4.53142 0 4.20008 0Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M4.20008 17.9984H1.19993V14.9985C1.19993 14.6672 0.931421 14.3984 0.600074 14.3984C0.268726 14.3984 0 14.6672 0 14.9985V18.5985C0 18.9299 0.268726 19.1986 0.600074 19.1986H4.20008C4.53142 19.1986 4.79993 18.9299 4.79993 18.5985C4.79993 18.2672 4.53142 17.9984 4.20008 17.9984Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M23.3998 0H19.7998C19.4684 0 19.1997 0.268726 19.1997 0.600074C19.1997 0.931422 19.4684 1.20015 19.7998 1.20015H22.7997V4.20008C22.7997 4.53142 23.0684 4.80015 23.3998 4.80015C23.7311 4.80015 23.9998 4.53142 23.9998 4.20008V0.600074C23.9998 0.268726 23.7311 0 23.3998 0Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M23.3998 14.3984C23.0684 14.3984 22.7997 14.6672 22.7997 14.9985V17.9984H19.7998C19.4684 17.9984 19.1997 18.2672 19.1997 18.5985C19.1997 18.9299 19.4684 19.1986 19.7998 19.1986H23.3998C23.7311 19.1986 23.9998 18.9299 23.9998 18.5985V14.9985C23.9998 14.6672 23.7311 14.3984 23.3998 14.3984Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M3.64988 3.60156H4.95012C5.3091 3.60156 5.6 3.87029 5.6 4.20164V15.0016C5.6 15.333 5.3091 15.6017 4.95012 15.6017H3.64988C3.2909 15.6017 3 15.333 3 15.0016V4.20164C3 3.87029 3.2909 3.60156 3.64988 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M7.90007 3.60156C7.51347 3.60156 7.2002 3.87029 7.2002 4.20164V15.0016C7.2002 15.333 7.51347 15.6017 7.90007 15.6017C8.28666 15.6017 8.6002 15.333 8.6002 15.0016V4.20164C8.6002 3.87029 8.28666 3.60156 7.90007 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M11.1501 3.60156H12.4499C12.8089 3.60156 13.1 3.87029 13.1 4.20164V15.0016C13.1 15.333 12.8089 15.6017 12.4499 15.6017H11.1501C10.7911 15.6017 10.5 15.333 10.5 15.0016V4.20164C10.5 3.87029 10.7911 3.60156 11.1501 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M15.4998 3.60156C15.1133 3.60156 14.7998 3.87029 14.7998 4.20164V15.0016C14.7998 15.333 15.1133 15.6017 15.4998 15.6017C15.8863 15.6017 16.1998 15.333 16.1998 15.0016V4.20164C16.1998 3.87029 15.8863 3.60156 15.4998 3.60156Z"
                      fill="#3772FF"
                    />
                    <path
                      d="M18.6501 3.60156H19.9499C20.3089 3.60156 20.6 3.87029 20.6 4.20164V15.0016C20.6 15.333 20.3089 15.6017 19.9499 15.6017H18.6501C18.2911 15.6017 18 15.333 18 15.0016V4.20164C18 3.87029 18.2911 3.60156 18.6501 3.60156Z"
                      fill="#3772FF"
                    />
                  </svg>

                   OnGoing Bid
                </h6>
              </li>


             
            </ul>
          </div>
          <div class="col-xl-9 col-md-12">
            <div class="content-tab">
              <div class="content-inner profile">
                <form  onSubmit={handleSubmit}>
                  <h4>User Profile</h4>
                  <h6>Infomation</h6>

                  <div class="form-group d-flex s1">
                    <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder ="Enter Name"/>
                    <input type="email" class="form-control"  value={email}  onChange={(e) => setEmail(e.target.value)} placeholder ="Enter Email"/>
                  </div>
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter Mobile No."/>
                    <div class="sl">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>+1</option>
                        <option>+84</option>
                        <option>+82</option>
                        <option>+32</option>
                      </select>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Phone number"
                      />
                    </div>
                  </div>

                  <div class="form-group d-flex">
                    <select class="form-control" id="exampleFormControlSelect2">
                      <option>South Korean</option>
                      <option>Vietnamese</option>
                      <option>South Korean</option>
                      <option>South Korean</option>
                    </select>
                    <div class="sl">
                      <select
                        class="form-control gt"
                        id="exampleFormControlSelect3"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <input
                        class="form-control fc-datepicker"
                        placeholder="dD/MM/YY"
                        type="text"
                      />
                    </div>
                  </div>

              
                  

                  <button type="submit" class="btn-action">
                    Update Profile
                  </button>
                </form>
              </div>
              <div class="content-inner referrals">
                {/* <h6>Total rewards</h6>
                <h4>$1,056.00 <span>USD</span></h4> */}
                {/* <p>
                  You're earning 20% of the trading fees your referrals pay.
                  Learn more
                </p> */}
                <div class="main">
                  {/* <h6>Invite friends to earn 20%</h6> */}

                  <div class="refe">
                  <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 ">
                {/* <h2 id="heading">Sign Up Your User Account</h2> */}
                <p>Fill all form field to go to next step</p>
                <form id="msform">
                    
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>Account</strong></li>
                        <li id="personal"><strong>Personal</strong></li>
                        <li id="payment"><strong>Image</strong></li>
                        <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> <br/> 
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Account Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 1 - 4</h2>
                                </div>
                            </div> <label class="fieldlabels">Email: *</label> <input type="email" name="email"  /> <label class="fieldlabels">Username: *</label> <input type="text" name="uname" /> <label class="fieldlabels">Password: *</label> <input type="password" name="pwd"  /> <label class="fieldlabels">Confirm Password: *</label> <input type="password" name="cpwd" />
                        </div> <input type="button" name="next" class="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Personal Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 2 - 4</h2>
                                </div>
                            </div> <label class="fieldlabels">First Name: *</label> <input type="text" name="fname"  /> <label class="fieldlabels">Last Name: *</label> <input type="text" name="lname"  /> <label class="fieldlabels">Contact No.: *</label> <input type="text" name="phno" /> <label class="fieldlabels">Alternate Contact No.: *</label> <input type="text" name="phno_2"  />
                        </div> <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
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
                            </div> <label class="fieldlabels">Upload Your Photo:</label> <input type="file" name="pic" accept="image/*"/> <label class="fieldlabels">Upload Signature Photo:</label> <input type="file" name="pic" accept="image/*"/>
                        </div> <input type="button" name="next" class="next action-button" value="Submit" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
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
                            </div> <br/><br/>
                            <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br/>
                            <div class="row justify-content-center">
                                <div class="col-3"> <img src="https://i.imgur.com/GwStPmg.png" class="fit-image"/> </div>
                            </div> <br/><br/>
                            <div class="row justify-content-center">
                                <div class="col-7 text-center">
                                    <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
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

                {/* <a href="wallet.html" class="btn-action">My Wallet</a> */}
              </div>
{/* start wallet table  */}
              <div class="content-inner api">
          
              
                <div class="main">
                  {/* <h6>Enable API keys</h6>
                  <p>Enter your password and 2FA code to Enable the API keys</p> */}

                  <div class="refe">
            
                 <div>
                 <div class="card card-custom" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title ">USD Doller</h6>
                    <h6 class="price">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div>
                 <div class="card card-custom" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/747/747661.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title ">Viewding</h6>
                    <h6 class="price ">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div>
                 <div class="card card-custom" >
                 <img class="card-img-top card-img-top1" src="https://cdn-icons-png.flaticon.com/512/2439/2439062.png" alt="Card image cap"/>
                <div class="card-body">
                    <h6 class="card-title">Carban Credit</h6>
                    <h6 class="price">USD 53,260.20</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>



         




                  </div>
            
                  {/* <a href="#" class="btn-action">Enable API keys</a> */}
                </div>
                <div class="coin-list-wallet">
                  <h6 class="heading">Select Crypto</h6>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th class="left" scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">24%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>

                      <tr>
                        <td class="number">
                          <span>2</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-eth"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span> */}
                          <p>
                            <span class="boild">Ethereum</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-critical">
                          <span class="boild">-5.03%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>3</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-tether"><span class="path1"></span><span class="path2"></span></span> */}
                          <p>
                            <span class="boild">Tether</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>4</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-bnb"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span> */}
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>5</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-bnb"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span> */}
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-critical">
                          <span class="boild">-0.04%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>6</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-tether"><span class="path1"></span><span class="path2"></span></span> */}
                          <p>
                            <span class="boild">Tether</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>7</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-sol"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span> */}
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-critical">
                          <span class="boild">-6.09%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>8</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-ada"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span> */}
                          <p>
                            <span class="boild">Cardano</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>9</span>
                        </td>
                        <td class="asset">
                          {/* <span class="icon-bnb"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span> */}
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+8.09%</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>10</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">XRP</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">$2,605.95</span>
                        </td>

                        <td class="color-success">
                          <span class="boild">+6.04%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* end wallet table  */}

 {/*end Aution Manage table  */}
              <div class="content-inner profile change-pass">
                
              <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th class="left" scope="col">Name</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">CC</th>
                        <th scope="col">Staring Bid</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>

                        <td>
                          <span class="boild">04-Jan-2020</span>
                        </td>
                        <td>
                          <span class="boild">24-Jan-2020</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">100</span>
                        </td>
                        <td class="color-success">
                          <span class="boild">10000</span>
                        </td>
                        <td class="color-success">
                         <button className="btn btn-primary text-white">View</button>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
   {/*end Aution Manage table  */}

<a class="btn btn-primary text-white" data-toggle="modal" href='#susbc-form'>Add More</a>
             
              </div>
              <div className="content-inner Onging Bid">
                 <Table table_data={{"heading":"Table Heading","keys":["SNo.","Start Data","End Date", "CC","Starting Bid","Actions"], "data":[
            { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
          ]}}/>

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
											<input type="text" class="form-control input-custom" id="firstName" required/>
										</div>
                    <div class="col-md-12 col-xs-12">
											<label for="firstName" class="label-custom">Start Date </label>
											<input type="date" class="form-control input-custom" id="firstName" required/>
										</div>
                    <div class="col-md-12 col-xs-12">
											<label for="firstName" class="label-custom">End Date </label>
											<input type="date" class="form-control input-custom" id="firstName" required/>
										</div>
										<div class="col-md-12 col-xs-12" >
											<label for="firstName" className="label-custom">Carban Credits </label>
											<input type="number" class="form-control input-custom" id="firstName"  required/>
										</div>
										<div class="col-md-12 col-xs-12">
											<label for="firstName" className="label-custom">Staring Bid </label>
											<input type="text" class="form-control input-custom" id="firstName"  required/>
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

  {/* end modal  */}

    </>
  );
}


export default Dashboard;
