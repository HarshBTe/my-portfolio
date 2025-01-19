import './index.css'
import { Link } from "react-router-dom";



const Projects = () => {
   return ( 
 
      
    <div className='outer-project-container'>
       <h1 align="center"> Projects </h1>

      <ul className="project-list-container">
 
      <Link  to="/static">
      <li className="project-item-container">
       
        <img
          className="project-item-image"
          src="https://assets.ccbp.in/frontend/react-js/projects-s4-img.png"
          alt="not found"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">Static Websites</h1>
        </div>
        
      </li>
      </Link>


      <Link  to="/responsive">
      <li className="project-item-container">
       
        <img
          className="project-item-image"
          src="https://assets.ccbp.in/frontend/react-js/projects-r2-img.png"
          alt="not found"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">Responsive Websites</h1>
        </div>
        
      </li>
      </Link>


      <Link  to="/dynamic">
      <li className="project-item-container">
       
        <img
          className="project-item-image"
          src="https://assets.ccbp.in/frontend/react-js/projects-d1-img.png"
          alt="not found"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">Dynamic Websites</h1>
        </div>
        
      </li>
      </Link>

      <Link  to="/react">
      <li className="project-item-container">
       
        <img
          className="project-item-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="not found"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">Full Stack Projects</h1>
        </div>
        
      </li>
      </Link>


      <Link  to="/ai">
      <li className="project-item-container">
       
        <img
          className="project-item-image"
          src="https://res.cloudinary.com/di3u22t0w/image/upload/v1732102955/ai-generated-8540915_640_nz6xvi.webp"
          alt="not found"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">AI/ML Projects</h1>
        </div>
        
      </li>
      </Link>


           
      </ul>

    </div>

   )
}

export default Projects