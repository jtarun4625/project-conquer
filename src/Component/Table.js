import React from "react";
const a = 1;

const data = [
            { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
          ]; 



function Table({table_data}) {

        console.log(table_data)
        return (
        <div class="coin-list-wallet">
        <h6 class="heading">{table_data.heading}</h6>
        <table class="table">
          <thead>
            <tr>
            
              {table_data.keys.map((val,key) => {
                return(<th scope="col">{val}</th>)
              })}
            </tr>
          </thead>
          <tbody>
          
          {data.map((val, key) => {
       return (
          <tr>
              <td class="number">
                <span >{key}</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">{val.name}</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">{val.age}</span>
              </td>
              <td>
                <span class="boild">{val.gender}</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>

)
})}
            {/* <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>
            <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>
            <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>
            <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>
            <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr>
            <tr>
              <td class="number">
                <span>1</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">USDT</span>
                  <span class="unit">Tether USD</span>
                </p>
              </td>

              <td>
                <span class="boild">04-Jan-2020</span>
              </td>
              <td>
                <span class="boild">24-Jan-2020</span>
              </td>
              <td class="color-success">
                <span class="boild">100</span>
              </td>
              <td class="color-success">
                <span class="boild">10000</span>
              </td>
              <td class="color-success">
               <button className="btn btn-primary text-white">Bid</button>
              </td>
            </tr> */}
            
          </tbody>
        </table>
      </div>
        )
    }
   

//   return (
 
//     <>

         
      
//                 <a class="btn btn-primary text-white" data-toggle="modal" href='#susbc-form4'>Add More</a>


//     {/* start model  */}
//     <div class="modal fade" id="susbc-form4">
// 			<div class="modal-dialog shadow-lg p-3 mb-5 bg-white rounded">
// 				<div class="modal-content sub-bg">
// 					<div class="modal-header subs-header">
// 						{/* <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
					
// 					</div>
//                 <h6 className="text-center"> Add Auction Form</h6>
// 					<div class="modal-body">
						
					
// 						<div class="row">
// 							<div class="col-md-12">
//                             <form id="subs-form4">
// 									<div class="form-group row">
// 										<div class="col-md-12 col-xs-12">
// 											<label for="firstName" class="label-custom">First Name </label>
// 											<input type="text" class="form-control input-custom" id="firstName" required/>
// 										</div>
//                     <div class="col-md-12 col-xs-12">
// 											<label for="firstName" class="label-custom">Start Date </label>
// 											<input type="date" class="form-control input-custom" id="firstName" required/>
// 										</div>
//                     <div class="col-md-12 col-xs-12">
// 											<label for="firstName" class="label-custom">End Date </label>
// 											<input type="date" class="form-control input-custom" id="firstName" required/>
// 										</div>
// 										<div class="col-md-12 col-xs-12" >
// 											<label for="firstName" className="label-custom">Carban Credits </label>
// 											<input type="number" class="form-control input-custom" id="firstName"  required/>
// 										</div>
// 										<div class="col-md-12 col-xs-12">
// 											<label for="firstName" className="label-custom">Staring Bid </label>
// 											<input type="text" class="form-control input-custom" id="firstName"  required/>
// 										</div>
// 									</div>
// 									<button type="submit" class="btn btn-primary text-white">Submit</button>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

//   {/* end modal  */}


//     </>
//   );


export default Table;
