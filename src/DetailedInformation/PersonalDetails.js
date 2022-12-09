import {React, useMemo, useState} from 'react';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



function PersonalDetails(props){
    const [value, setValue] = useState()
    function cont(e) {
        e.preventDefault();
        props.nextStep();
      };
      function back(e) {
        e.preventDefault();
        props.prevStep();
      };
      return(<div>
        <fieldset>
                                  <div class="form-card">
                                    <div className="col-12">
                                      <div class="row">
                                        <div class="col">
                                          <label class="fieldlabels">
                                            First Name: *
                                          </label>
                                          <input
                                            type="text"
                                            name="first_name"
                                            onChange={props.handleChange('first_name')}
                                            defaultValue={props.values.first_name}
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Last Name: *
                                          </label>
                                          <input
                                            type="text"
                                            name="last_name"
                                            onChange={props.handleChange('last_name')}
                                            defaultValue={props.values.last_name}
                                          />
                                        </div>
                                      </div>

                                    
                                    <div class="row">
                                        
                                    
                                          <div class="col">
                                            <label class="fieldlabels">
                                              DOB : *
                                            </label>
                                            {(() => {
                                                if (props.values.dob != ""){
                                                    return (
                                                        <input value={props.values.dob}/>
                                                    )
                                                }else{
                                                    return(<input
                                                        type="date"
                                                        name="dob"
                                                        onChange={props.handleChange('dob')}
                                                      defaultValue={props.values.dob}
                                                      />)
                                                }
                                                })()}
                                            
                                          </div>
                                          <div class="col">
                                          <label class="fieldlabels">
                                              Country : *
                                            </label>
                                            <select class="form-control"
                                            onChange={props.handleChange('country')}
                                            defaultValue={props.values.country} value={props.values.string_country}>
                                            {props.countries.data.map(function(i){
                                                    return <option key={i.id} value={i.name}>{i.name}</option>
                                                })}
                                          </select>
                                          </div>
                                          
                                        </div>
                                        <div class="row">
                                        
                                      <div class="col">
                                          <label class="fieldlabels">
                                            Nationality :*
                                          </label>
                                          <select class="form-control"
                                          onChange={props.handleChange('nationality')}
                                          defaultValue={props.values.nationality} value={props.values.string_nationality}>
                                          {props.countries.data.map(function(i){
                                                    return <option key={i.id} value={i.name}>{i.name}</option>
                                                })}
                                          </select>
                                        </div>
                                       
                                        <div class="col">
                                        <label class="fieldlabels">
                                            Gender : *
                                          </label>
                                          <select class="form-control" onChange={props.handleChange('gender')}
                                          defaultValue={props.values.gender}>
                                          <option value="Male">Male</option>
                                          <option value="Female">Female</option>
                                          </select>
                                        </div>
                                      
                                      </div>
                                    </div>

                                  </div>
                                  <center><input
                                    type="button"
                                    name="next"
                                    class="next action-button"
                                    value="Next"
                                    onClick={cont}
                                  /><input
                                  type="button"
                                  name="previous"
                                  class="previous action-button-previous"
                                  value="Previous"
                                  onClick={back}
                                /></center>
                                </fieldset>
     </div>)
    
      
}

export default PersonalDetails