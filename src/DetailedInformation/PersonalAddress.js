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
                                            Personal Address Name: *
                                          </label>
                                          <input
                                            type="text"
                                            name="c_address_name"
                                            onChange={props.handleChange('c_address_name')}
                                            defaultValue={props.values.c_address_name}
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Personal Address Line 1: *
                                          </label>
                                          <input
                                            type="text"
                                            name="c_address_line_1"
                                            onChange={props.handleChange('c_address_line_1')}
                                            defaultValue={props.values.c_address_line_1}
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Personal Address City: *
                                          </label>
                                          <input
                                            type="text"
                                            name="c_address_city"
                                            onChange={props.handleChange('c_address_city')}
                                            defaultValue={props.values.c_address_city}
                                          />
                                        </div>
                                      </div>

                                      <div class="row">
                                        <div class="col">
                                          <label class="fieldlabels">
                                            Personal Address State: *
                                          </label>
                                          <input
                                            type="text"
                                            name="c_address_state"
                                            onChange={props.handleChange('c_address_state')}
                                            defaultValue={props.values.c_address_state}
                                          />
                                        </div>
                                        <div class="col">
                                          <label class="fieldlabels">
                                              Country : *
                                            </label>
                                            <select class="form-control"
                                            onChange={props.handleChange('c_address_country')}
                                            defaultValue={props.values.c_address_country} value={props.values.string_c_address_country}>
                                            {props.countries.data.map(function(i){
                                                    return <option key={i.id} value={i.name}>{i.name}</option>
                                                })}
                                          </select>
                                          </div>
                                      </div>
                                      <div class="row">
                                        
                                      <div class="col">
                                          <label class="fieldlabels">
                                            Personal Address ZIP
                                          </label>
                                          <input
                                            type="text"
                                            name="c_address_zip"
                                            onChange={props.handleChange('c_address_zip')}
                                            defaultValue={props.values.c_address_zip}
                                          />
                                        </div>
                                        
                                        <div class='col'>
                                        
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
                                  />
                                   <input
                                    type="button"
                                    name="previous"
                                    class="previous action-button-previous"
                                    value="Previous"
                                    onClick={back}
                                  /></center>
                                  
                                </fieldset>
     </div>)
    
      
}

export default BusinessDetails