import React from 'react'

const Home = () => {
  return (
    <div>
         <section class="home" id="home">
        <div class="hero-content">
            <h3>Hello, It's Me</h3>
            <h1>Shushant kumar</h1>
            <h3>And I'm a <span id="text"></span></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quo eos cum, reiciendis maxime laboriosam deserunt nobis necessitatibus voluptates autem, eum sit hic accusamus corrupti alias repudiandae esse! Aliquam, ullam!</p>
            <div class="social-media">
                <a href="https://github.com/shushant0603" target="_blank"><i class='bx bxl-github'>
                    </i></a>
                <a href="https://x.com/shushantku68275" target="_blank"><i class='bx bxl-twitter'></i></a>
                <a href="https://www.linkedin.com/in/shushant-kumar-771775290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/shushant0625?igsh=MWNuc3BueDNoOXAwNQ==" target="_blank"><i class='bx bxl-instagram'></i></a>
            </div>
     
            <a href="#" class="btn">Download CV</a>
        </div>
        <img src="photos/star.png" alt="hello" class="hero_star star" />
        <div class="home-img">
            <img src="photos/Shushant.jpg" alt="" class="image" />
        </div>
    </section>
    </div>
  )
}

export default Home
