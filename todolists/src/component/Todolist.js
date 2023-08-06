import React, { useState } from "react";
import "../style/Todolist.css";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData,setlistData] =useState([]);

  function addActivity(){
  
    setlistData((listData)=>{
        const updatedList=[...listData,activity]
        console.log(updatedList)
        setActivity('')
        return updatedList;
    })
}

function removeActivity(i){
    const updatedListData= listData.filter((elem,id)=>{
        return i!==id;
    })
    setlistData(updatedListData);

}
function removeAll(){
    setlistData([])
}


  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h1 className="containerHeading">Todolist</h1>

          <div className="inputdiv">
            <input
              className="container-input"
              type="text"
              placeholder="Add activity"
              value={activity}
              onChange={(e)=>{setActivity(e.target.value)}}
            />
            <button className="container-button" onClick={addActivity}>Add</button>


            <p className="list-heading">Here is your List : {')'}</p>

            {listData!==[] && listData.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                    <div className="listDatabtn">
                        <div className="listData">{data}</div>
                        <button className="container-button2" onClick={()=>removeActivity(i)}>remove X</button>
                    </div>

                    </p>
                    </>
                )
            })}
          </div>

          {listData.length>=2 &&<div style={{textAlign:'center'}}><button className="container-button3" onClick={removeAll}>remove all</button> </div>}

            
        </div>

        

      </div>
    </>
  );
}

export default Todolist;
