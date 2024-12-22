import React, { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import "./home.css"; // Ensure your CSS is linked properly
import About from './About';
import Projects from './Projects';
import HireMe from './HireMe';
import CodingProfile from './CodingProfile';

const Home = () => {
  const heroContentRef = useRef(null); // Reference for the hero content
  const imgRef = useRef(null); // Reference for the home-img div
  
  useEffect(() => {
    // Select all elements inside the hero-content div
    const heroContentItems = heroContentRef.current.querySelectorAll(".hero-content h3, .hero-content h4 ,.hero-content h1, .hero-content p, .hero-content span, .social-media, .btn");

  
    gsap.fromTo(
    heroContentItems, 
    {
      opacity: 0, 
      x: () => (Math.random() - 0.5) * 500, 
      y: () => (Math.random() - 0.5) * 500, 
      rotation: () => (Math.random() - 0.5) * 60, 
      scale: 0.9, 
    }, 
    {
      opacity: 1, 
      x: 100, 
      y: 100, 
      scale: 1, 
      rotation: 0, 
      duration: 1, 
      stagger: 0.3, 
      ease: "back.out(1.7)", 
      onComplete: () => {
    
        gsap.to(heroContentItems, {
          x: 0, 
          y: 0, 
          duration: 1, 
          stagger: 0.3, 
          ease: "back.out(1.7)", 
        });
      }
    }
  );

  const imgElement = imgRef.current;
  if (imgElement) {
    gsap.fromTo(
      imgElement,
      {
        opacity: 0, 
        x: -100,
        // duration: 1,
      }, {

        opacity: 1,
        x: 0,
      }
      
    );
  } else {
    console.error("Image element not found!");
  }
}, []);  // Empty dependency array to run the effect once when component mounts

  const [text, setText] = useState("web developer");

  // Text loader to change the text every few seconds
  useEffect(() => {
    const textLoader = () => {
      setTimeout(() => {
        setText("Web Developer");
      }, 0);
    };

    // Initial text change
    textLoader();

    // Re-run the text loader every 12 seconds
    const interval = setInterval(textLoader, 12000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div className="hero-content" ref={heroContentRef}>
          <h3>Hello, It's Me</h3>
          <h1>Shushant Pandey</h1>
          <h4>And I'm a <span id="text">{text}</span></h4>
          <div className="social-media">
            <a href="https://github.com/shushant0603" target="_blank"><i className="bx bxl-github"></i></a>
            <a href="https://x.com/shushantku68275" target="_blank"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.linkedin.com/in/shushant-kumar-771775290" target="_blank"><i className="bx bxl-linkedin"></i></a>
            <a href="https://www.instagram.com/shushant0625" target="_blank"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>
        <div className="home-img" ref={imgRef}>
          <img src="photos/Shushant.jpg" alt="Shushant" className="image" />
        </div>
      </section>
      <CodingProfile/>
      <Projects/>
      <HireMe/>
      <About/>
    </div>
  );
};

export default Home;
