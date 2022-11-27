
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {db} from "./firebase"
import { doc, setDoc } from "firebase/firestore"; 



function logout(auth ,provider){
  alert("logout")
  auth.signOut();
}
function Firebase(auth ,provider){



  if(auth.currentUser){
	  alert("test")
    window.location.href ="/About_us";
   console.log(auth.currentUser);
  }
  else{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
	console.log(user)
    console.log(user.displayName,user.email,user.photoURL)

	setDoc(doc(db, "users", auth.currentUser.uid), {
		name: user.displayName,
		email: user.email,
		image: user.photoURL
	}).then((response) => {
		console.log("aaa",response)
	}).catch(error => console.log(error));
    // ...
  }).catch((error) => {
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
   
  return (
	
  <>
	<section class="dashboard">
	
<button onClick={() => logout(auth,provider)}>Sign out</button>
					
		
	</section>

    </>
  );
}

export default Login ;
