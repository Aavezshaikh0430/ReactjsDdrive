import './App.css'
import Navbar from './components/Navbar';
import Cards from "./components/Cards";
import Logo from "./components/Logo";

function App() {
  return (
    <>
     <Logo />

     <Navbar/>

     <div style={{display:'flex',justifyContent:'space-around', backgroundColor:'black'}}>

     <Cards
      img_src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"

      title="Avengers:EndGame"
      />

     <Cards 
     img_src='https://resizing.flixster.com/RDlGcNaA0dIfEJku6xO2jvlnZu8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNDZlNzMzZDUtZmQ4My00N2E5LWEwNzgtZTg3ZmZlNzMyMGJiLmpwZw=='
     title="Money Heist"
     />
     
     <Cards 
     img_src="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
     title="Doctor strength"
     />

     <Cards 

     img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDZn0zCksxqyj1rwCo2jlOmCTWjQFpK4EYA&usqp=CAU"
     title="Narcos"
     />

     <Cards 
     img_src="https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
     title="The wicher"
     />
     </div>
     
    </>
  );
}

export default App;
