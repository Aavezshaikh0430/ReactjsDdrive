import React from "react";

class Increment extends React.Component{
    constructor(props){
        super();
        this.state ={
            count : 0
        }
    }
    handleClick={


    }

   render(){
    return(
        <>
        <h1>Counter</h1>
       <h1 onClick={this.state.count}>click</h1>
        </>
    )
   }
}
export default Increment;
