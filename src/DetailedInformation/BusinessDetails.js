import React from 'react';



function BusinessDetails(props){
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
                                            Business Name: *
                                          </label>
                                          <input
                                            type="text"
                                            name="business_name"
                                            onChange={props.handleChange('business_name')}
                                            defaultValue={props.values.business_name}
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Registration Number: *
                                          </label>
                                          <input
                                            type="text"
                                            name="business_name"
                                            onChange={props.handleChange('registration_number')}
                                            defaultValue={props.values.registration_number}
                                          />
                                        </div>
                                      </div>

                               
                                      <br></br>
                                      <div class="row">
                                        
                                        <div class="col">
                                          <label class="fieldlabels">
                                            No of Employees : *
                                          </label>
                                          <input
                                            type="text"
                                            name="no_of_employees"
                                            onChange={props.handleChange('no_of_employees')}
                                            defaultValue={props.values.no_of_employees}
                                          />
                                        </div>
                                        <div class="col">
                                        <label class="fieldlabels">
                                            Phone Number: *
                                          </label>
                                          <input
                                            type="text"
                                            name="business_name"
                                            onChange={props.handleChange('phone_number')}
                                            defaultValue={props.values.phone_number}
                                          />
                                        </div>
                                      </div>

                                      <br></br>
                                      <div class="row">
                                        
                                        
                                        <div class="col">
                                        <label class="fieldlabels">
                                            Entity Type: *
                                          </label>
                                          <select class="form-control"  onChange={props.handleChange('entity_type')}
                                            defaultValue={props.values.entity_type}>
                                          <option value="Sole Proprietorship">Sole Proprietorship</option>
                                          <option value="Partnership">Partnership</option>
                                          <option value="Government Agency">Government Agency</option>
                                          <option value="Charity">Charity</option>
                                          <option value="Trust">Trust</option>
                                          <option value="Non-Profit Organization">Non-Profit Organization</option>
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
                                  /></center>
                                </fieldset>
     </div>)
    
      
}

export default BusinessDetails