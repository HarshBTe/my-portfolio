import Certifications from "../Certifications";
import Contact from "../Contact";
import NavBar from "../NavBar";
import Projects from "../Projects"
import './index.css'
import { Link } from "react-router-dom";
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Skills from "../Skills";
import ContactForm from "../ContactForm";
import YoutubeVideos from "../YoutubeVideos";


const Home = () => (
    <div>
       <NavBar />

       <div className="brief-description-container">
    <div className="text-content">
        <h1>
            Hey, <br />
            I'm Harsh Dubey
        </h1>
        <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
            <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                    words={[
                        'Full Stack Developer',
                        'Frontend Developer',
                        'Backend Developer',
                        'Freelancer',
                        'Teaching Assistant',
                        'Youtuber',
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </h1>
        <h5>
            Currently pursuing Bachelor's in 
            Technology from Rajkiya Engineering, College, Ambedkar Nagar
        </h5>
    </div>
    <img
        className="profile-img"
        src="https://res.cloudinary.com/di3u22t0w/image/upload/v1731431271/1700458492096_zxmvia_Circle_1_-photoaidcom-cropped_cyzx4l.png"
        alt="Profile"
    />
</div>




<div className="journey-container">
    <img
        src="https://res.cloudinary.com/di3u22t0w/image/upload/v1732036322/depositphotos_80408176-stock-photo-rocket-launch-icon-from-commerce_hnsnvm.webp"
        className="icon-git"
        alt="Rocket Icon"
    />
    <h3>!!! Click To View My Skill Journey !!!</h3>
    <Link to="/my-portfolio/timelineview">
        <button className="button-view">View</button>
    </Link>
</div>






       <Projects />
       <Skills />
       <Certifications />
       
       <YoutubeVideos />
       <ContactForm />
      <Contact />
    </div>
)

export default Home