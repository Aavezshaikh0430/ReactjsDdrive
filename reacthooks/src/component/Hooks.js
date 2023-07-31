import React, {}from 'react';

export default function Hooks() {

    // const[count,setCount]=useState(0);

    let count=0;
    const setCount =(v)=>{
        count=v;
    }


    
   const handleClick=()=>{
    setCount(count+1);
   }


  return (
    <div>
        <h2>Counter:{count}</h2>

        <button onClick={()=>handleClick()}>click</button>
    </div>
  )
}
