// import React, { useState, useEffect } from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";

// function API() {
//   const [indices, setIndices] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setIndices(data))
//       .catch((err) => alert('Error fetching data.'));
//   }, []);

//   return (
//     <>
//       {indices.map((item, key) => (
//         <Card key={key} style={{ margin: "10px" }}>
//           <CardContent>
//             <Typography variant="h5" component="h2">
//               {item.title}
//             </Typography>
//             <Typography color="textSecondary">{item.body}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </>
//   );
// }


function Api()
{
  fetch("https://pokeapi.co/api/v2/pokemon/balbasoras").then((response)=>{
    return response.json
  }).then((data)=>{
    console.log(data)
  })
  return(
    <> 
    </>
  )
}
export default Api;