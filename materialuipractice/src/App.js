import { Delete } from "@mui/icons-material";
import {Button,Container,} from "@mui/material";
import { useState } from "react";


function App() {


  const [color,setColor]=useState('primary');

  function CustomMe(){
    // alert('hello')
    setColor('secondary')
  }
  return (

    
    <>
    
    <Container maxWidth='lg' >
      <h1>Material ui</h1>
   <Button
   
   color={color}
   variant='contained'
   size='medium'
   endIcon={<Delete/> }
   onClick={()=>{CustomMe()}}
  >click me

   </Button>
   
   </Container>

   import {Grid} from '@mui/material';
function App() {
  return (
    <>
    <Grid item lg={12} md={12} xs={12} container spacing={2}>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block-1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block-2</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block-3</h1></Grid>
      <Grid item lg={3} sm={6 } xs={12}><h1 style={{backgroundColor:'green'}}>Block-4</h1></Grid>

    </Grid>
    </>
  );
}

export default App;

    
  
   
    </>
  );
}

export default App;
