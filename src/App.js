import Home from './Home';
import About_Us from './About_us';
import Header from './Component/Header';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Register from './Register';
import Footer from './Component/Footer';

import Wallet from './Wallet';
import BasicInformation from './Basic Information'

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
// import { getFirestore } from "firebase/firestore";
import Login from './Login'
function App() {

  return (
    <>
       <Router>  
       <Header/>
           <Routes>  

           <Route exact path="/Login"  element={< Login />}></Route>
                 <Route exact path='/Userinformation'  element={< BasicInformation />}></Route>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/About_us' element={< About_Us />}></Route>  
                 <Route exact path='/Register' element={< Register />}></Route>  
                 <Route exact path='/Contact' element={< Contact />}></Route>  
                 <Route exact path='/Dashboard' element={< Dashboard />}></Route>  
                 <Route exact path='/Wallet' element={< Wallet />}></Route>  
                 
          </Routes>  
          <Footer/>
       </Router>  


    </>
  );
}

export default App;
