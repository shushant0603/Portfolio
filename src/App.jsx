import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar.jsx'; 
import Home from './components/Home.jsx'; // Ensure these components are correctly imported
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import './components/project.css'
import "./Codingprofile.css"
import CodingProfile from './components/CodingProfile.jsx';
import HireMe from './components/HireMe.jsx';

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
