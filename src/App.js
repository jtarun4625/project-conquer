import Home from './Home';
import About_Us from './About_us';
import Header from './Component/Header';
import Contact from './Contact';
import Register from './Register';
import Footer from './Component/Footer';
import {initializeApp} from 'firebase/app';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  



function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB0f8xXiSfISh9ovHQcJzwS7Xt_Fs1hiBQ",
    authDomain: "mvp--login.firebaseapp.com",
    projectId: "mvp--login",
    storageBucket: "mvp--login.appspot.com",
    messagingSenderId: "558551604106",
    appId: "1:558551604106:web:dfd5384f3a22b6837c4673",
    measurementId: "G-9YJNN0HPKJ"
  };
  const app = initializeApp(firebaseConfig);
  return (
    <>

       <Router>  
       <Header/>
          
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/About_us' element={< About_Us />}></Route>  
                 <Route exact path='/Register' element={< Register />}></Route>  
                 <Route exact path='/Contact' element={< Contact />}></Route>  
                 
          </Routes>  
          <Footer/>
       </Router>  


    </>
  );
}

export default App;
