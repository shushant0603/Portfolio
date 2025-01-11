import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const projectData = [
  {
    id: 1,
    title: 'Chat_App',
    description: 'Chat with your loved one',
    image: 'https://plus.unsplash.com/premium_photo-1684761949431-53b58936cf2c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: ' https://chatapp-blyu.onrender.com/',
   
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of project two.',
    image: 'https://images.unsplash.com/photo-1733745877767-684fdebadfd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
    link: 'https://chatapp-blyu.onrender.com/',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of project three.',
    image: 'https://images.unsplash.com/photo-1733757399736-15fd93cc8fa4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://chatapp-blyu.onrender.com/',
  },
  {
    id: 4,
    title: 'Project Three',
    description: 'Description of project three.',
    image: 'https://images.unsplash.com/photo-1733757399736-15fd93cc8fa4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://chatapp-blyu.onrender.com/',
  },
  {
    id: 5,
    title: 'Project Three',
    description: 'Description of project three.',
    image: 'https://images.unsplash.com/photo-1733757399736-15fd93cc8fa4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://chatapp-blyu.onrender.com/',
  },
  {
    id: 6,
    title: 'Project Three',
    description: 'Description of project three.',
    image: 'https://images.unsplash.com/photo-1733757399736-15fd93cc8fa4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://chatapp-blyu.onrender.com/',
  },
  // Add more projects as needed
];

function Project({ title, description, image, link }) {
  return (
    <div className="project-container bg-white p-6 rounded-lg shadow-lg text-center relative group">
      <h2 className="text-2xl text-zinc-900 font-semibold mb-2">{title}</h2>
      <div className="image-wrapper relative overflow-hidden rounded-lg">
        {/* Wrapping the image with the <a> tag */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            id="project-img"
            className="max-w-full h-auto"
          />
        </a>
      </div>
      <p className="text-2xl text-gray-700 mt-4">{description}</p>
    </div>
  );
}

function Projects() {
  const boxref = useRef(null); // Reference for the project container

  useEffect(() => {
    const projectContainers = boxref.current.querySelectorAll(".project-container");

    gsap.fromTo(
      projectContainers,
      {
        x: () => gsap.utils.random(-500, 500),
        y: () => gsap.utils.random(-500, 500),
        rotation: () => gsap.utils.random(-45, 45),
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="project-bg h-full w-full mt-10">
      <h1 className="text text-white-800 text-8xl my-8 py-9 flex justify-center items-center">
        my work
      </h1>
      <div
        className="box my-5 flex flex-wrap gap-x-10 justify-center items-center h-full w-full p-1"
        ref={boxref}
      >
        {projectData.map((project) => (
          <div key={project.id} className="m-9 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link} // Pass the link here
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Projects;