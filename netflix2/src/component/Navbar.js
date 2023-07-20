import React from 'react';


function Navbar(){
    return(
    <>
        <div class='navbar'>

            <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt="logo"  class='img' height={'100px'} />


        <ul class='navbar-ulist'>
            <li>Home</li>
            <li>About</li>
            <li>Sign in</li>
        </ul>

        <div class='search'>
            <label style={{fontSize:'20px'}}> Search <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" alt="logo" height={'20px'} width={'20px'} style={{marginTop:'40px',fontSize:''}}/> </label> 
            <input type="text" placeholder="Search here"></input>
        </div>

        </div>
    </>
    )
}

// class Navbar extends React.Component{
//     constructor(props){
//         super(props)
//        render() {
//        }
//         return(
//             <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt="logo"  class='img' height={'100px'} />
//         )
       
//     }
// }

// class Navbar extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt="logo"  class='img' height={'80px'} />
//         )
//     }
// }
export default Navbar;