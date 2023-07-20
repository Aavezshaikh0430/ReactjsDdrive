import React from "react";
import "../Style/cards.css"



function Cards (props){
    return(
        <div>
            <div className="expenseCard">

                <h2 className="Card1">{props.title}</h2>

            </div>
        </div>
    )
}
// class Cards extends React.Component{
//     constructor(props){
//         super();
//     }
//     render(props){
//         return(

//             <>

//              <div className="expenseCard">

//                 <h2>{props.title}</h2>


//             </div>
            
//             </>
           
//         )
//     }
// }
export default Cards;