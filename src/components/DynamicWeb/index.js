import ProjectItem from "../ProjectItem"
import './index.css'

const projectsList = [
  {
    projectId: 0,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    url: 'typingdubey.ccbp.tech',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 1,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    url: 'jokedubey.ccbp.tech',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 2,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    url: 'resizedubey.ccbp.tech',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },

  {
    projectId: 3,
    category: 'DYNAMIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png',
    title: 'Tip Calculator',
    url: 'tipdubey.ccbp.tech',
    description:
      'This is a dynamic web application capable of calculating tip on price and discount basis.',
  },

  {
    projectId: 4,
    category: 'DYNAMIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png',
    title: 'Addition Game',
    url: 'addgamedubey.ccbp.tech',
    description:
      'This is a dynamic web application capable of calculating addition and stating right or wrong.',
  },


  {
    projectId: 5,
    category: 'DYNAMIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tabs-varanasi-img.png',
    title: 'Tab Swicher',
    url: 'tabdubey.ccbp.tech',
    description:
      'This is a dynamic web application capable of Swiching different tabs.',
  },
  
  {
    projectId: 6,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732515903/maxresdefault_g5ktn7.jpg',
    title: 'Button Maker',
    url: 'btnmakerdubey.ccbp.tech',
    description:
      'This is a dynamic web application capable of creating button based on input data.',
  },
  

  {
    projectId: 7,
    category: 'DYNAMIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/greeting-card-1-bg.png',
    title: 'Greeting Card',
    url: 'greetdubey.ccbp.tech',
    description:
      'This is a dynamic web application displays a New Year Greeting Card.',
  },
  
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732516100/person-using-smartphone-interact-friendly-600nw-2482428287_ze4hgy.webp',
    title: 'Chatbot Application',
    url: 'chatbotdubey.ccbp.tech',
    description:
      'This is a dynamic web application that facilitates interaction with chatbot dynamically.',
  },
  

  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732273875/1489353_rsay4b.jpg',
    title: 'Todo Application',
    url: 'todosdubey.ccbp.tech',
    description:
      'This is a dynamic web application that facilitates adding and deleting tasks.',
  },
  
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732515154/wikipedia-logo-on-black-624x351_r2jeib.jpg',
    title: 'Wikipedia Application',
    url: 'wikipediadubey.ccbp.tech',
    description:
      'This is a dynamic web application enables to search on wikipedia.',
  },


  {
    projectId: 11,
    category: 'DYNAMIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732515575/banner_bmjkmy.png',
    title: 'Guessing Game',
    url: 'guessdubey.ccbp.tech',
    description:
      'This is a dynamic web application enables to enter a guessed number and then matching.',
  }
]
const DynamicWeb = () => (
    <div className="main-container">
      <div className="inside-container">
      <h1> Welcome to Dynamic Websites </h1>
      <img className="dynamic-img"
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png"
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
  
  export default DynamicWeb
  