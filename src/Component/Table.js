import React from "react";
const data = [
            { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
              { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
              { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
              { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
              { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
              { name: "Anom", age: 19, gender: "Male" },
            { name: "Megha", age: 19, gender: "Female" },
            { name: "Subham", age: 25, gender: "Male"},
          ];
function Table({table_data}) {
        console.log(table_data)
        return (
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
                <span >{key}</span>
              </td>
              <td class="asset">
                <p>
                  <span class="boild">{val.name}</span>
                  {/* <span class="unit">Tether USD</span> */}
                </p>
              </td>
              <td>
                <span class="boild">{val.start_day}</span>
              </td>
              <td>
                <span class="boild">{val.end_day}</span>
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
       
          </tbody>
        </table>
      </div>
        )
    }
export default Table;