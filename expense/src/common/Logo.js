import React from "react";
import '../styles/main.css'

class Logo extends React.Component{
    render(){
        return(
            <>
            <div className="navbar">
            <img src="https://assets.materialup.com/uploads/c2b5ecb4-ccae-4d53-b0fb-117058776fb4/preview.png" alt="logo" className="logo" /> 
            <h2 className="navbarHeading">Expense Tracker</h2>

            </div>
            </>
        )
    }
}
export default Logo;