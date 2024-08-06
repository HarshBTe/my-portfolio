import ProjectItem from "../ProjectItem"
import './index.css'

const projectsList = [
  {
  projectId: 0,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
  title: 'VR Website',
  description:
    'VR Website enables users to explore AR and VR Products and Industry happenings.',
},
{
  projectId: 1,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
  title: 'Food Munch',
  description: 'Food Much Website is a user-centric food tech website.',
},
{
  projectId: 2,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
  title: 'Portfolio',
  description:
    'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
},

]
const ResponsiveWeb = () => (
    <div className="main-container">
      <div className="inside-container">
      <h1> Welcome to Responsive Websites </h1>
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
        alt="not found"
      />
      </div>

      <ul className="project-list-container">
          {projectsList.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>

    </div>
  )

  export default ResponsiveWeb
  