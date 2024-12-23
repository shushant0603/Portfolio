import React from 'react'
import './About.css'

const About = () => {

  return (
    <div className='About'>
       <div className='About_image'>
        <div className="img">
          <img src="https://plus.unsplash.com/premium_vector-1722936895524-35f678b166f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbiUyMGJveSUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div></div>   
       <div className='About_text'>
        <h1>About Me</h1>
        <h2>MERN Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi iure placeat labore modi, magni ad. Nobis porro consequuntur repellendus earum, quam doloremque aspernatur quaerat animi quia hic deserunt repudiandae magni ducimus. Itaque exercitationem aliquam dolorum sint dicta, nihil ducimus iusto tempora alias quas eum reiciendis, quos quo quidem harum!
        </p>
        <button>Hire me</button>
        </div>  
    </div>
  )
}

export default About
