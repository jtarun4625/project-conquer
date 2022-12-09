
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { setState } from "./state/index"
import { Link, useNavigate } from 'react-router-dom'

function Firebase(auth, provider, navigate) {
  if (auth.currentUser) {
    // window.location.href = "/userinformation";
    console.log(auth.currentUser);
    setState("uid", auth.currentUser.uid)
    navigate("/userinformation", { replace: true });
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
        setState("uid", auth.currentUser.uid)
        setDoc(doc(db, "users", auth.currentUser.uid), {
          Name: user.displayName,
          Email: user.email,
          Image: user.photoURL,
        })
          .then((response) => {
            console.log("aaa", response);
          })
          .catch((error) => console.log(error));
        // ...
        navigate("/userinformation", { replace: true });
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
function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <>
    <br></br>
      <section class="dashboard">
        <div class="container">
          <div class="row">

          <br></br>
          <br></br>

            <div class="col-md-6 col-sm-12 tab-100">
              <div class="dashboard-img">
                <div class="container">
                  <div class="wrapper">
                    <div class="dashboard-inner">
                      <div class="img-1">
                        <img
                          src="https://img.freepik.com/free-vector/people-using-mobile-bank-remittance-money_74855-6617.jpg?w=740&t=st=1669638372~exp=1669638972~hmac=7d13d2caeff19fcba9b9689a387cd2f8194820c155f3e35139ebc90759d19f16" className="img-fluid"
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
                    <button onClick={() => Firebase(auth, provider, navigate)}>
                      <img
                        src="https://templates.seekviral.com/rifmanew/forms/LoginSignup%20Form/assets/images/google.png"
                        alt="google-signup"
                      />{" "}
                      Sign up with Google
                    </button>
                  </div>

                  <div class=" signup login-notif">
                    Already have an Account?{" "}
                    <span class="show-hide"><Link to="/Administrator">Sign in</Link></span>
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
      <br></br>
      <br></br>
    </>
  );
}

export default Login ;
