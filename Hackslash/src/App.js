import './App.css';
import React, { useState } from 'react';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';


function App() {

  

  return (
   <div className="App">
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/services" Component={Services}/>
      <Route path="/register" Component={Register}/>
    </Routes>
    </div>
  );
}

export default App;
