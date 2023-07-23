import React from "react";
import "../Style/button.css"

function List(){
    return(
        <>
          <div className="buttonbck">
            <button className="btn-1" >Add Expense</button>
            

            <button className="btn-1" >Expense List</button>

        </div>



         <div className="inputList">
        <input type="text" placeholder="Add item"/> 
        <br/><br/>
        <input type="number" placeholder="Add amount"/>
        <br/><br/>
        <button className="btn-1 btn-2">Submit</button>
        <br/>
        </div>

        </>
    )
}
export default List;