import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'


function App() {
  return (
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   </Routes>
  )
}

export default App
