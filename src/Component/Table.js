import {React,useState,useEffect} from "react";
import axios from 'axios'
import { useGlobalState } from "../state/index";

import { Puff } from 'react-loader-spinner'



  
function Table({table_data,handleClick,localCurrency}) {

    const [isLoading,setLoading] = useState(false)
    const [idToken] = useGlobalState("idToken");
        console.log(table_data)
        var init_state = {
          "StartBid":0,
          "Currency":"USD",
          "LocalCurrency":localCurrency,
          "YourBid":0,
          "Auction":{},
          "LocalRate":0
        }
        function onChangeHandle(e){
          var newState = structuredClone(state)
          newState["YourBid"] = e.target.value
          setState(newState)
        }
        const [state,setState] = useState(init_state)
        useEffect(() => {

        },[state.LocalRate])
        function handleBidSubmit(data){
          setLoading(true)
          console.log(state)
          var config = {
            method: 'post',
            url: 'http://mvp--login.web.app/app/createHostedCheckout',
            headers: { 
              'Authorization': 'Bearer ' + idToken, 
              'Content-Type': 'application/json'
            },
            withCredentials: false,
            data:state
          };
      
          console.log(config)
      
          axios(config)
          .then(function (response) {
            console.log(response.data);
            window.location.href = response.data.url
            setLoading(false)
            // var newState = structuredClone(state)
            // newState.LocalRate = response.data.data.data.buy_amount
            // console.log(newState)
            // setState(newState)
            // console.log(state)
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        function handleSubmit(){
          setLoading(true)
            var config = {
              method: 'post',
              url: 'http://mvp--login.web.app/app/getLocalRate',
              headers: { 
                'Authorization': 'Bearer ' + idToken, 
                'Content-Type': 'application/json'
              },
              withCredentials: false,
              data:{
                "sell":state.Currency,
                "buy":localCurrency,
                "amount":state.StartBid
              }
            };
        
            console.log(config)
        
            axios(config)
            .then(function (response) {
              console.log(response.data.data.data);
              var newState = structuredClone(state)
              newState.LocalRate = response.data.data.data.buy_amount
              console.log(newState)
              setState(newState)
              console.log(state)
              setLoading(false)
            })
            .catch(function (error) {
              setLoading(false)
              console.log(error);
            });
        }


        function handlePopUp(val){
          var new_state = {
            "StartBid":val.StartBid,
            "Currency":val.currency,
            "YourBid":0,
            "LocalRate":0,
            "Auction":val,
            "LocalCurrency":localCurrency
          }
          setState(new_state)
        }
        return (
          <>
        <div class="coin-list-wallet">
        <br></br>
        <h6 class="heading">{table_data.heading}</h6>
        <br></br>

        <table class="table">
          <thead>
            <tr>
              {table_data.keys.map((val,key) => {
                return(<th scope="col">{val}</th>)
              })}
            </tr>
          </thead>
          <tbody>
          {table_data.data.map((val, key) => {
       return (
          <tr>
              <td class="number">
                <span >{key+1}</span>
              </td>
              <td>
                <span class="boild">{val.StartDate}</span>
              </td>
              <td>
                <span class="boild">{val.EndDate}</span>
              </td>
              <td class="color-success">
                <span class="boild">{val.CarbonCredit}</span>
              </td>
              <td class="color-success">
                <span class="boild">{val.currency} {val.StartBid}</span>
              </td>
              <td class="color-success">
              <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handlePopUp(val)}
                  >
                    Place Bids
                  </button>
              </td>
            </tr>
)
})}
       
          </tbody>
        </table>
      </div>
      <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLongTitle">
              Place Your Bid
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {isLoading == true? <div className="row">
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
          </div></div> : <form action="#" id="msform" onSubmit={(e)=>{e.preventDefault()}}>
              <div className="container">
                <div class="row">
                  <table className="table">
                    <thead>
                    <tr>
                    <th>Starting Bid ({state.Currency})</th>
                    <th>Starting Bid ({localCurrency})</th>
                    </tr>
                    </thead>
                    <tr>
                      <td>{state.StartBid}</td>
                      <td>{(state.LocalRate == 0) ? <p><button className="btn btn-primary" onClick={() => {
                        handleSubmit()
                      }}>Fetch Local Rate</button></p>: <p>{state.LocalRate}</p>}</td>
                    </tr>
                    <tr span="2">
                      <td colSpan={2}><label>Enter Your Bid</label><input placeholder="Enter Your Bid" type="number" step=".01" onChange={onChangeHandle} className="form-control" style={{"marginTop":"10px"}} /></td>
                    </tr>
                    
                    
                  </table>
                  {/* <div class="col-6">
                    <div className="row">F
                    <div className="col-md-12"><p>Starting Bid (Auctioner Currency): </p></div>
                    <div className="col-md-12"><b><p>{state.Currency} {state.StartBid}</p></b></div>
                    </div>
                    
                  </div> */}

                  {/* <div class="col-6">
                  <b><p>Starting Bid (Your Currency): </p><p>{state.Currency} {state.StartBid}</p></b>
                  </div>

                  <div class="col-6">

                  </div>
                  <div class="col-6">

                  </div> */}
                
                  
{(state.LocalRate == 0) ? <input type="submit" key={"fetch_local"} value="Fetch Local Rates" onClick={() => handleSubmit} />: <input type="submit" name="bid_submit" key={"submit_bid"} style={{"color":"white"}} onClick={()=>handleBidSubmit()} className="btn btn-action btn-primary"/>}
                </div>
              </div>
            </form>}
          </div>
        </div>
      </div>
    </div>
    </>
        )
    }
export default Table;