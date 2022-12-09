import React, { useState } from "react";
import { setState, useGlobalState } from "../state";
import BusinessDetails from './BusinessDetails'
import Indentification from './Indentification'
import BusinessAddress from './BusinessAddress'
import PersonalDetails from './PersonalDetails'
import PersonalAddress from './PersonalAddress'
import axios from 'axios'
import { Puff } from 'react-loader-spinner'
import swal from "sweetalert";


function Add(props) {
  
  const [emailId] = useGlobalState("emailId");
  const [idToken] = useGlobalState("idToken");
  const [step, setStep] = useState(1);
  const [isLoading, setLoading] = useState(false);

  var init_state = {
    "step":1,
    "entity_type":"",
    "business_name":"",
    "registration_number":"",
    "industry_category":"",
    "industry_sub_category":"",
    "no_of_employees":0,
    "first_name":"",
    "last_name":"",
    "phone_number":"",
    "email":emailId,
    "gender":"",
    "dob":"",
    "country":"",
    "nationality":"",
    "mothers_name":"",
    "c_address_name":"",
    "c_address_line_1":"",
    "c_address_city":"",
    "c_address_state":"",
    "c_address_country":"",
    "c_address_zip":"",
    "b_address_phone_number":"",
    "b_address_name":"",
    "b_address_line_1":"",
    "b_address_city":"",
    "b_address_state":"",
    "b_address_country":"",
    "b_address_zip":"",
    "b_address_phone_number":"",
    "currency":"",
    "string_b_address_country":"",
    "string_country":"",
    "string_nationality":"",
    "string_c_address_country":"",
  }
  const [state, setData] = useState(init_state);

  React.useEffect(() => {
    console.log("Value Changes")
   
    if(props.state != false){
      console.log(props.state)
      setLoading(true)
      var new_init_state = props.state
      props.countriesList.data.forEach(element => {

        if(element.iso_alpha2 == new_init_state.b_address_country){
          console.log(element)
          new_init_state.string_b_address_country = element.name
        }
        if(element.iso_alpha2 == new_init_state.country){
          new_init_state.string_country = element.name
        }
        if(element.iso_alpha2 == new_init_state.nationality){
          new_init_state.string_nationality = element.name
        }
        if(element.iso_alpha2 == new_init_state.c_address_country){
          new_init_state.string_c_address_country = element.name
        }
      });
      console.log(new_init_state)
      setData(new_init_state)
      if(new_init_state.step == 4){
        var new_step = new_init_state.step  + 1
        setStep(new_step)
        props.handleStepChange(new_step)
      }
      setLoading(false)
    }
    // var newState = state
    // if(newState["step"] == 4){
    //   newState["step"] = step + 1
    //   setState(newState)
    // }
  },[])



  console.log(state)





  
  function nextStep() {
    var new_step = step + 1
    console.log(new_step)
    if(new_step == 5){
      setLoading(true)
      var data = JSON.stringify(state);

    var config = {
      method: 'post',
      url: 'http://localhost:5002/createWallet',
      headers: { 
        'Authorization': 'Bearer ' + idToken, 
        'Content-Type': 'application/json'
      },
      withCredentials: false,
      data : data
    };

    console.log(config)

    axios(config)
    .then(function (response) {
      console.log(response.data);
      if(response.data.error == false){
        swal(response.data.message, {
          icon: "success",
        });
        var new_step = step + 1
        setStep(new_step)
        props.handleStepChange(new_step)
      }
      setLoading(false)
    })
    .catch(function (error) {
      setLoading(false)
      console.log(error);
    });

    }else{
      setStep(new_step)
      props.handleStepChange(new_step)
    }
    
  };

  // Go back to prev step
  function prevStep(){
    var new_step = step - 1
    setStep(new_step)
    props.handleStepChange(new_step)

  };

  // const handleChange = (event) => {
  //   console.log(event.target)
  // }


  const handleChange = input => e => {
    console.log(input,e.target.value)
    var newState = structuredClone(state)
    console.log(newState)
    newState["step"] = step
    newState[input] = e.target.value

    if(input == "b_address_country"){
      newState.string_b_address_country = e.target.value
    }
    if(input== "country"){
      newState.string_country = e.target.value
    }
    if(input == "nationality"){
      newState.string_nationality = e.target.value
    }
    if(input == "c_address_country"){
      newState.string_c_address_country = e.target.value
    }
    setData(newState)
  };


  const { business_name,
  registration_number,
  industry_category,
  entity_type,
  nationality,
  industry_sub_category,
  no_of_employees,
  first_name,
  last_name,
  phone_number,
  email,
  gender,
  dob,
  country,
  mothers_name,
  c_address_name,
  c_address_line_1,
  c_address_city,
  c_address_state,
  c_address_country,
  c_address_zip,
  c_address_phone_number,
  b_address_name,
  b_address_line_1,
  b_address_city,
  b_address_state,
  b_address_country,
  b_address_zip,
  b_address_phone_number,
  currency,
  string_b_address_country,
  string_country,
  string_nationality,
  string_c_address_country} = state;
  const values = { business_name,
    registration_number,
    industry_category,
    industry_sub_category,
    no_of_employees,
    first_name,
    last_name,
    nationality,
    phone_number,
    email,
    gender,
    dob,
    country,
    entity_type,
    mothers_name,
    c_address_name,
    c_address_line_1,
    c_address_city,
    c_address_state,
    c_address_country,
    c_address_zip,
    c_address_phone_number,
    b_address_name,
    b_address_line_1,
    b_address_city,
    b_address_state,
    b_address_country,
    b_address_zip,
    b_address_phone_number,
    currency,
    string_b_address_country,
    string_country,
    string_nationality,
    string_c_address_country};


    if(isLoading){
      return(<div className="row">
         <div className="col-md-12" class="text-center">
         <center>
         <div  className="loadingContainer">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#3772ff"
        ariaLabel="puff-loading"
        wrapperStyle={{"display":"block"}}
        wrapperClass=""
        visible={true}
      />
    </div></center>
          </div></div>)
    }else{
      switch(step){
        case 1:
          console.log(1)
          return(<BusinessDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}/>);
        case 2:
          console.log(2)
          return(<BusinessAddress
          nextStep={nextStep}
          countries={props.countriesList}
          prevStep={prevStep}
              handleChange={handleChange}
              values={values}/>);
        case 3:
          return(<PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          countries={props.countriesList}
              handleChange={handleChange}
              values={values}/>);
        case 4:
          return(<PersonalAddress
          nextStep={nextStep}
          countries={props.countriesList}
          prevStep={prevStep}
              handleChange={handleChange}
              values={values}/>);

        case 5:
          return(<Indentification
            nextStep={nextStep}
            countries={props.countriesList}
            prevStep={prevStep}
                handleChange={handleChange}
                values={values}
                idvData={props.idvData}/>);
  
      }
    }



  // const handleSubmit = (event) => {
  //   const CertificateName = event.target.CertificateName.value;
  //   const CertficateNumber = event.target.CertficateNumber.value;
  //   const DateofIssue = event.target.DateofIssue.value;
  //   const CertificateImage = event.target.CertificateImage.value;
  //   const NumerofCarbonCredit = event.target.NumerofCarbonCredit.value;

  //   event.preventDefault();
  //   setDoc(doc(db, "carboncredit", newkey), {
  //     CertificateAuthority: CertificateName,
  //     CertificateNumber: CertficateNumber,
  //     DateofIssue: DateofIssue,
  //     CertificateFile: CertificateImage,
  //     NumerofCarbonCredit: NumerofCarbonCredit,
  //     uid: uid,
  //     Approved:"0"

  //   })
  //     .then((response) => {
  //       swal({
  //         title: "Carbon Credit Registered!",
  //         text: "Thank for Submit!",
  //         icon: "success",
  //         button: "Aww yiss!",
  //       });
  //     })

  //     .catch((error) => console.log(error));
  //   // navigate("/Dashboard", { replace: true });
  // };

  // return (
  //   <>
 
  //   </>
  // );
}

export default Add;
