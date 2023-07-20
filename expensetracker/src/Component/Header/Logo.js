import React from "react";

import "../Style/logo.css"

 
class Logo extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <>
            <div className="Container">
               <h1 className="containerHeading">The Expense Tracker</h1> 

               </div>
            </>
        )
    }
}
export default Logo;