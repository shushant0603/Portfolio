import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  const headerRef = useRef(null); // Reference for the header

  useEffect(() => {
    // Select all links inside the header using the ref
    const links = headerRef.current.querySelectorAll("a");

    // GSAP Animation
    gsap.fromTo(
      links,
      { y: -200, opacity: 0 }, // Start position
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" } // End position
    );
  }, []);

  return (


    <div>
      <header className="header" ref={headerRef}>
        <div className="logo" id="logo">
          <div className='nav-image'><img  src="https://i.pinimg.com/736x/0e/a3/6f/0ea36f0540ae1282d39927af11e2b057.jpg" alt="img" /></div>
          <h2>Sp</h2>
        </div>

        <nav className="navbar">
       
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link home" : "home")}
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link about" : "about")}
          >
            About
          </NavLink> */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active-link projects" : "projects"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/codingProfile"
            className={({ isActive }) =>
              isActive ? "active-link coding_profile" : "coding_profile"
            }
          >
            Coding Profiles
          </NavLink>
          <NavLink
            to="/hireMe"
            className={({ isActive }) =>
              isActive ? "active-link hire-me" : "hire-me"
            }
          >
            <i className="bx bxs-phone-call"></i>Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};


export default Navbar;