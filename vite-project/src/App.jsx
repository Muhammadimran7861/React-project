import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carasol from './Carasol'
import Navbar from './Navbar'
import Hero from './Hero'
import Heroo from './Heroo'
import Section from './section'
import Footer from './Footer'
function App (){
   return <div>
    <Navbar/>
    <Carasol/>
    <Hero/>
    <Heroo/>
    <Section/>
  <Footer/>
   </div>
}


export default App
