import { BsFillHSquareFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

import './index.css'

const Contact = () => {
    return (
        <div className="main-container" id="contact">
            <div className="contact-heading">
            <BsFillHSquareFill />
             
            <h3> Connect Me  </h3>
            </div>
            
            <div className="icon-container">
             <a href="https://github.com/HarshBTe">
             <BsGithub className="icon-git" /> 
             </a>
             <a href="https://www.instagram.com/harshdubey06003/">
            <SiInstagram className="icon-git" />
            </a>
            <a href="https://www.linkedin.com/in/harshdubeynxt/">
            <BsLinkedin className="icon-git" />
            </a>
            <a href="https://x.com/harshdubeynxt">
            <FaXTwitter className="icon-git" />
            </a>
            </div>

        </div>
    )
}

export default Contact