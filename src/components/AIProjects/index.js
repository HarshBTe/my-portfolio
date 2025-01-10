import ProjectItem from "../ProjectItem"
import './index.css'

const projectsList = [
  {
  projectId: 0,
  category: 'AI',
  imageURL: 'https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg',
  title: 'Generative AI Project',
  url: 'harshdubeygenai.ccbp.tech',
  description:
    'This project facilitates an AI chatbot to interact with it via text message.',
},


]
const AIProjects = () => (
    <div className="main-container">
      <div className="inside-container">
      <h1> Welcome to AI/ML Projects </h1>
      <img
        src="https://res.cloudinary.com/di3u22t0w/image/upload/v1732102955/ai-generated-8540915_640_nz6xvi.webp"
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

  export default AIProjects
  