import ProjectItem from "../ProjectItem"
import './index.css'

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    url: 'musicdubey.ccbp.tech',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    url: 'tourdubey.ccbp.tech',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    url: 'advancestatic.ccbp.tech',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'STATIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732251766/360_F_654933377_Mv4khtUoZz6Qan1pWBZYSnjrZsCj3sFl_l7jiwp.jpg',
    title: 'Diwali Page',
    url: 'diwalidubey.ccbp.tech',
    description:
      'A website that exploring diwali celebration.',
  },
  {
    projectId: 4,
    category: 'STATIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732251987/hand-serves-restaurant-dish-via-smartphone-yellow-background-concept-food-delivery-online-ordering-services-home-207716749_sih6kl.webp',
    title: 'Food Page',
    url: 'fooddubey.ccbp.tech',
    description:
      'A website that let you order delicious foods.',
  },

  {
    projectId: 5,
    category: 'STATIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732252485/360_F_615068142_3siXSo1TWv7ebrf7OR0XdHurjzkcpJE3_oets4r.jpg',
    title: 'Cricket Page',
    url: 'cricketdubey.ccbp.tech',
    description:
      'A website that provides information about cricket team.',
  },

  {
    projectId: 6,
    category: 'STATIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/goa-c1-img.png',
    title: 'Goa Page',
    url: 'goapagedubey.ccbp.tech',
    description:
      'A website that describes about Goa.',
  },

  {
    projectId: 7,
    category: 'STATIC',
    imageURL: 'https://res.cloudinary.com/di3u22t0w/image/upload/v1732252737/covid-19-background-with-doctor-explaining-virus_1361-2374_cxu7os.avif',
    title: 'COVID-19 Page',
    url: 'coviddubey.ccbp.tech',
    description:
      'A website that makes you aware about COVID-19',
  },

  {
    projectId: 8,
    category: 'STATIC',
    imageURL: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/conference-img.png',
    title: 'Conference Page',
    url: 'conferencedubey.ccbp.tech',
    description:
      'A website that describes about conference scenarios.',
  },
  
]
const StaticWeb = () => (
    <div className="main-container">
      <div className="inside-container">
      <h1> Welcome to Static Websites </h1>
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/varanasi1-img.png"
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
  
  export default StaticWeb
  