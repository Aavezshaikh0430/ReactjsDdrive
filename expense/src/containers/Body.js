import React, { Component } from "react";
import "../styles/main.css";

export default class Body extends Component {
  constructor(props) {
    super();

    this.state = {
      show: "list",

      expense: 0,
      budget: 4444,
    
   
      
    };
  }

  

  handelShow=()=>{
    const {show} = this.state;

    if(show==='list'){
      this.setState({show:'form'});
    }

    if(show==="form"){
      this.setState({show:'list'})
    }
  }







  
 


  render() {
    const{expense,budget}=this.state;

    return (
      <div>
        <div className="statsheading">
          <h2>Stats</h2>
        </div>

        <div className="statsCard">
          <div className="expensCard">
            <h3>Expense</h3>
            <h1>{expense} &#8377;</h1>
          </div>

          <div className="expensCard">
            <h3>Budget</h3>
            <h1>{budget} &#8377;</h1>
          </div>
        </div>



        {this.state.show === "list" ?(
          <>
       
        <div className="ExpenseHeading">
          <h2>Expense list</h2>
          <button className="ExpenseHeadingbtn" onClick={this.handelShow}>Add Expense</button>
        </div>

         <div className="expenseDiv">
         <h3></h3>
         <p> &#8377;</p>
        </div>
        </>)
        
        :null}



        {this.state.show === "form" ? 
        (
          <>
        <div className="ExpenseHeading">
          <h2>Add Expense</h2>
          <button className="ExpenseHeadingbtn" onClick={this.handelShow}>Expense list</button>
        </div>

        
          <div className="expenseDiv">
            
              <input placeholder="Expense for" />
              <br /> <br />
              <input placeholder="Enter Amount"  />
              <br /> <br />
              <button className="ExpenseHeadingbtn ,ExpenseHeadingbtn2" >
                Add Expenses
              </button>
            
          </div>
          </>
        ) 
        
        : null}

      </div>
    );
  }
}
