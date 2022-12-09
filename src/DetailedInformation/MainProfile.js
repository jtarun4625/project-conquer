import {React,useState,useEffect} from 'react';
import DetailedInformation from './DetailedInformation'
import { Puff } from 'react-loader-spinner'
import {useGlobalState} from '../state/index'
function MainProfile(){
    const [isLoading, setLoading] = useState(false);
    const [dbState, setState] = useState(false);
    const [idvData, setiIdvData] = useState(false);
    const [countriesList, setCountries] = useState({data:[]});
    const [idToken] = useGlobalState("idToken");
    useEffect(() => {
        setLoading(true)
        fetch('http://mvp--login.web.app/app/getUserProfile',{
            headers: {
                'Authorization':"Bearer " + idToken
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.state){
                console.log(data)
                setState(data.state)
            }
            if(data.idvData){
                setiIdvData(data.idvData)
            }
            setLoading(false)
        });
        fetchCountries()
    },[])

    function fetchCountries(){
        setLoading(true)
        fetch('http://mvp--login.web.app/app/getCountries',{
            headers: {
                'Authorization':"Bearer " + idToken
            }
        })
        .then(response => response.json())
        .then(data => {
            setCountries(data)
            setLoading(false)
        });
    }

    
    const [step,setStep] = useState(1)
  
    console.log(step)

    function handleChange(newStep){
        setStep(newStep)
    }
  
    if(isLoading){
        return (
            <center><div  className="loadingContainer">
            <Puff
              height="80"
              width="80"
              radisu={1}
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{"display":"block"}}
              wrapperClass=""
              visible={true}
            />
          </div></center>
          )

    }else{
        return(
            <section class="user-profile flat-tabs">
           <div class="container">
             <div class="row">
               <div class="col-xl-12 col-md-12">
                 <div class="content-tab">
                   <div class="content-inner referrals">
                     <div class="main">
                       <div class="refe">
                         <div class="container-fluid">
                           <div class="row justify-content-center">
                             <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                               <div class="card px-0 pt-4 pb-0 mt-3 ">
                                 {/* <h2 id="heading">Sign Up Your User Account</h2> */}
                                 <p>Fill all form field to go to next step</p>
                                 <br></br>
                                 <form
                                   id="msform"
                                   action="#"
                                 >
                                   <ul id="progressbar">
                                     <li className={(step>=1 ? 'active' : 'notactive')} id="account">
                                       <strong>Business Details</strong>
                                     </li>
                                     <li className={(step>=2 ? 'active' : 'notactive')}  id="personal">
                                       <strong>Business Address</strong>
                                     </li>
                                     <li  className={(step>=3 ? 'active' : 'notactive')} id="payment">
                                       <strong>Personal Details</strong>
                                     </li>
                                     <li className={(step>=4 ? 'active' : 'notactive')}  id="confirm">
                                       <strong>Personal Address</strong>
                                     </li>
                                     <li className={(step>=5 ? 'active' : 'notactive')}  id="confirm">
                                       <strong>Indentification</strong>
                                     </li>
                                   </ul>
                                   
    
                                   <DetailedInformation
                                   handleStepChange={handleChange}
                                   countriesList={countriesList}
                                   state={dbState}
                                   idvData={idvData}/>
      
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
          )
    }
}

export default MainProfile;