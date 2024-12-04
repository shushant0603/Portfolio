import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  
      <div>
        <header className="header">
          <div className="logo" id="logo">
            <Link to="/">Portfolio</Link>
            <img src="photos/star.png" alt="" className="star" />
          </div>

          <nav className="navbar">
            <Link to="/" className="active home">Home</Link>
            <Link to="/about" className="about">About</Link>
            <Link to="/projects" className="projects">Projects</Link>
            <Link to="/codingProfile" className="coding_profile">Coding Profiles</Link>
            <Link to="/hireMe" className="hire-me"><i className='bx bxs-phone-call'></i>Hire Me</Link>
          </nav>
        </header>
      </div>

    
  );
}

export default Navbar;