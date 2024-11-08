import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header class="header">
        <div class="logo" id="logo">
            <a href="#">Portfolio</a>
            <img src="photos/star.png" alt="" class="star" />
        </div>
       
        {/* <!-- <i class='bx bx-menu' id="menu-icon"></i> --> */}

        <nav class="navbar">
            <a href="#home" class="active home">Home</a>
            <a href="#about" class="about">About</a>
            <a href="#projects" class="projects">Projects</a>
            <a href="#coding_profile" class="coding_profile">Coding Profiles</a>
            <a href="#hire-me" class="hire-me"><i class='bx bxs-phone-call'></i>Hire Me</a>
        </nav>
        
    </header>
    </div>
  )
}

export default Navbar
