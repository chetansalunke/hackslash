import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import Header from './Header'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Register from './Register'

function Home() {
  return (
    <div id='/'>
    
    <Navbar/>
    <Header/>
    <Services/>
    <About/>
    <Register/>
    <Contact/>
    </div>
  )
}

export default Home
