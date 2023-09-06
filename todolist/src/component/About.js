import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <> 
    <div>About </div>
    <Link to='/home'>home</Link> <br/>
    <Link to='/contact'>Contact us</Link>
    </>
  )
}

export default About