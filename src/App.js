import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/navbar'; 
import Header from './components/header'; 
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      
      
      <Navbar />
      <Header />
      <div
        className="bg-hero bg-cover bg-top  bg-fixed  h-screen"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }} >
        <Hero/>
      </div>
      
     
      
    </Router>
  );
};

export default App;
