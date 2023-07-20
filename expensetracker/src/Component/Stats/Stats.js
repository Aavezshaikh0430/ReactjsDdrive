import React from "react";
import Cards from "./Cards";
import "../Style/cards.css"





function Stats (){
    return(
        <>
        <div className="cards">
            <Cards title="Expense"/>
            <Cards title="Buget"/>
            
            <Cards title="Safe to spend"/>

        </div>
        </>
    )
}
// class Stats extends React.Component{
//     constructor(props){
//         super();
//     }
//     render(){
//         return(
//             <div>
//                <Cards title="Expense"/>

//                <Cards title="Buget"/>

//                <Cards title="Safe to Spend"/>
//             </div>
//         )
//     }
// }
export default Stats;