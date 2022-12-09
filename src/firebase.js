import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyB0f8xXiSfISh9ovHQcJzwS7Xt_Fs1hiBQ",
    authDomain: "mvp--login.firebaseapp.com",
    projectId: "mvp--login",
    storageBucket: "mvp--login.appspot.com",
    messagingSenderId: "558551604106",
    appId: "1:558551604106:web:dfd5384f3a22b6837c4673",
    measurementId: "G-9YJNN0HPKJ"
  };
  
const app=initializeApp(firebaseConfig);
export const db=getFirestore(app), storage=getStorage(app);

