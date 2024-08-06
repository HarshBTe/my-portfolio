import Certifications from "../Certifications";
import Contact from "../Contact";
import NavBar from "../NavBar";
import Projects from "../Projects"
import './index.css'
import { Link } from "react-router-dom";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Home = () => (
    <>
       <NavBar />
       <div className="brief-description-container">
        <div>
            <h1>
                Hey, <br />
                I'm Harsh Dubey
            </h1>
            <h5>
                Full Stack Developer, Currently pursuing Bachelor's in <br />
                Technology from Rajkiya Engineering, College, Ambedkar Nagar
            </h5>
        </div>
        <img class="profile-img" src="https://res.cloudinary.com/di3u22t0w/image/upload/ar_1:1,c_auto,g_auto,w_500/r_max/1700458492096_zxmvia.jpg" />
       </div>
       <div className="journey-container">
          <BsRocketTakeoffFill className="icon-git"/>
        <h3> Click To View Course Completion Journey  </h3>
        <Link to="/timelineview"><button className="button-view"> View </button></Link>
       </div>
       <Projects />
       <Certifications />
       <Contact />
    </>
)

export default Home