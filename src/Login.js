import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import {setGlobalState} from "./state/index"
import { useNavigate } from 'react-router-dom'

function Firebase(auth, provider,navigate) {
  if (auth.currentUser) {
    // window.location.href = "/userinformation";
    console.log(auth.currentUser);
    setGlobalState("uid",auth.currentUser.uid)
    navigate("/Dashboard", { replace: true });
  } else {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(user.displayName, user.email, user.photoURL);
        setGlobalState("uid",auth.currentUser.uid)
        setDoc(doc(db, "users", auth.currentUser.uid), {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
          .then((response) => {
            console.log("aaa", response);
          })
          .catch((error) => console.log(error));
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}
function Register() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <>
      <section class="dashboard">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 tab-100">
              <div class="dashboard-img">
                <div class="container">
                  <div class="wrapper">
                    <div class="dashboard-inner">
                      <div class="img-1">
                        <img
                          src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/left%20imgs/1-img.png"
                          alt="img"
                        />
                      </div>

                      <div class="animation-delay-75ms pop  img-4">
                        <img
                          src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/left%20imgs/3-img.png"
                          alt="img"
                        />
                      </div>
                      <div class="animation-delay-100ms pop img-5">
                        <img
                          src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/left%20imgs/5-img.png"
                          alt="img"
                        />
                      </div>
                      <div class="animation-delay-125ms pop img-6">
                        <img
                          src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/left%20imgs/4-img.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 tab-100 ">
              <div class="container">
                <div id="show-login" class="from-top wrapper">
                  <div class="signup signup-heading code-div">
                    <h2>Login </h2>
                    <p>See your Growth and get consulting support!</p>
                  </div>

                  <div class="login signup-heading">
                    <h2>login</h2>
                    <p>Login to see your Growth and get consulting support!</p>
                  </div>
                  <div class="google-signup">
                    <button onClick={() => Firebase(auth, provider,navigate)}>
                      <img
                        src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/google.png"
                        alt="google-signup"
                      />{" "}
                      Login with Google
                    </button>
                  </div>

                 

                  <div class="login login-notif">
                    New Member? <span class="show-hide">Sign up</span>
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

export default Register;
