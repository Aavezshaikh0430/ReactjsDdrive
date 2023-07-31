

import React from "react";
import "../style/Todolist.css"





class Todolist extends React.Component{
    
    constructor(){
        super();
        this.state={
            inputValue:'',
        }
    }


    handleForm =()=>{
        this.setState({
            inputValue:this.state.inputValue,
        })

    }

    render(){
        return(
            <>
             <div className="container">
             <h1 className="container-heading">Todo list</h1>
            <input className="container-input" type="" placeholder="Enter Todo item" />
            <button className="cotainer-button" onClick={this.handleForm}>Submit</button>
            </div>
            </>
        )
    }
}
export default Todolist;


































// function Todolist(){
//     return(
//         <>
//         <div className="container">
//             <h1 className="container-heading">Todo list</h1>
//             <input className="container-input" type="" placeholder="Enter Todo item"/>
//             <button className="cotainer-button">Submit</button>
//         </div>
//         </>
//     )
// }
