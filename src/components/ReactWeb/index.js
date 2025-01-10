import ProjectItem from "../ProjectItem"
import './index.css'

const projectsList = [
  {
  projectId: 0,
  category: 'REACT',
  imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732516525/IPLLiveScoreDashboard_page-0001_b6xk7a.jpg',
  title: 'IPL Dashboard',
  url: 'ipldashdubey.ccbp.tech',
  description:
    'React Website that uses routing feature that display cricket team details.',
},


{
  projectId: 1,
  category: 'REACT',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png',
  title: 'NxtTrendz Shooping Application',
  url: 'nxtshopdubey.ccbp.tech',
  description: 'Shoping application that enables adding products to cart and filter products.',
},
{
  projectId: 2,
  category: 'REACT',
  imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732276100/2257bea537b28e6_zyuuax.jpg',
  title: 'Jobby Application',
  url: 'jobbyappdubey.ccbp.tech',
  description:
    'Individual can find jobs based on selected field and filter according to their wish.',
},


]

const ReactWeb = () => (
    <div className="main-container">
      <div className="inside-container">
      <h1> Welcome to React Websites </h1>
  <img
    src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
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

  
  
  export default ReactWeb
  
