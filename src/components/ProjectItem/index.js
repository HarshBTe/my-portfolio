import './index.css';

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, imageURL, description, title, url } = projectDetails;


  const handleNavigation = () => {
    window.location.href = `https://${url}`; // Full absolute URL
  };

  return (
    <li className="project-item-container">
      <img
        className="project-item-image"
        src={imageURL}
        alt={`project-item ${projectId}`}
      />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
        <div className="button-container">
    <button onClick={handleNavigation}>Click to view</button>
</div>


      </div>
    </li>
  );
};

export default ProjectItem;
