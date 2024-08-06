import './index.css'
import { Link } from "react-router-dom";

const Projects = () => {
   return ( <div className='outer-project-container'>
      <h1 align="center"> Projects </h1>
      <div className='projects-container'>
        <Link  to="/static">
        <div className='specific-project'>
            <h3 className='heading-project'> Static Websites </h3>
            <img className="project-front-img" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/varanasi1-img.png" />
         </div>
         </Link>
         <Link to="/responsive">
         <div className='specific-project'>
            <h3 className='heading-project'> Responsive Websites </h3>
            <img className="project-front-img" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png" />
         </div>
         </Link>
         <Link to="/dynamic">
         <div className='specific-project'>
            <h3 className='heading-project'> Dynamic Websites </h3>
            <img className="project-front-img" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png" />
         </div>
         </Link>
         <Link to="/react">
         <div className='specific-project'>
            <h3 className='heading-project'> React JS Websites </h3>
            <img className="project-front-img" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
         </div>
         </Link>
      </div>
    </div>
   )
}

export default Projects