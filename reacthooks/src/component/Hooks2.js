
import React,{useState} from "react";

export default function Hooks2(){

    const[counter,setCounter]=useState(0);



  

       
    const handleChange=()=>setCounter(counter+1);


    return(
        <>

        <div style={{textAlign:'center'}}>
        <h1>Counter{counter}</h1>

        <button onClick={handleChange}>clik here</button>

        </div>
        
        </>
    )
}