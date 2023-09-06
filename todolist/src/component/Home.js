import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <> 
    <div>home</div> 
    <Link to='/about'>About</Link> <br/>
    <Link to='/contact'>Contact us</Link>
    </>
   
  )
}

export default Home