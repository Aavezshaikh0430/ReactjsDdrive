import Navbar from './component/Navbar';
import Cards from './component/Cards';
import Main from './component/Main';
import Titel from './component/Title';
import './App.css';




function App() {
  return (
    <div>
    <Navbar/>

     <Main/>
     <Titel/>



    <div class='cards'>
    <Cards img_src="https://1.bp.blogspot.com/-duXXNFNKjwU/X5QAdR-lCwI/AAAAAAAAvw4/Zj9479PZzR86LyvcJZ87qorO_Rl64_boACNcBGAsYHQ/s900/Mirzapur-2-Poster-1.jpg" />
    
    <Cards img_src="https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_.jpg" />

    <Cards img_src='https://resizing.flixster.com/RDlGcNaA0dIfEJku6xO2jvlnZu8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNDZlNzMzZDUtZmQ4My00N2E5LWEwNzgtZTg3ZmZlNzMyMGJiLmpwZw==' />

    <Cards img_src="https://media5.bollywoodhungama.in/wp-content/uploads/2023/05/Jawan-306x393.jpg"/>
    
    <Cards img_src=	'https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg'/>

    <Cards img_src="	https://images.justwatch.com/poster/306383849/s332/scoop-2023"/>

    <Cards img_src="	https://filmfare.wwmindia.com/content/2022/dec/pathaan11669878737.jpg"/>
    
    </div>


   

   

   

    </div>
  );
}

export default App;
