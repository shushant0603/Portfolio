import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar.jsx'; 
import Home from './Home.jsx'; // Ensure these components are correctly imported
import About from './About.jsx';
import Projects from './Projects.jsx';
import CodingProfile from './CodingProfile.jsx';
import HireMe from './HireMe.jsx';

function App() {

  return (
    <>
  
     <Router>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/codingProfile" element={<CodingProfile />} />
        <Route path="/hireMe" element={<HireMe />} />
      </Routes>
    </Router>
      
     
    </>
  )
}

export default App
