import React, { Component } from 'react'
import "../styles/main.css";

export default class Body extends Component {
  render() {
    return (
      <div>

       <div className='statsheading'>
       <h2>Stats</h2>
       </div>


        <div className='statsCard'>
          
            
            <div className='expensCard'>
                <h3>Expense</h3>
                <h2>Amount: 2000</h2>
            </div>

            <div className='expensCard'>
                <h3 >Budget</h3>
                <h2>Amount: 5000</h2>
            </div>

        </div>


        <div className='ExpenseHeading'>
        <h2>Expense</h2>
        <button className='ExpenseHeadingbtn'>Add Expense</button>
        </div>


        <div className='expenseDiv'>
            
            <h3>Groceries</h3>
            <p>2000 &#8377;</p>

        </div>

        <div className='ExpenseHeading'>
        <h2>Add Expense</h2>
        <button className='ExpenseHeadingbtn'>Expense</button>
        </div>

        <div className='expenseDiv'>
          <form>
            <input placeholder='Enter item'/><br/> <br/>
            <input placeholder='Enter Amount'/><br/> <br/>
            <button className='ExpenseHeadingbtn ,ExpenseHeadingbtn2'>Submit</button>
          </form>
        </div>


      </div>
    )
  }
}
