import React from 'react';

//load components
import ProjectCard from './ProjectCard.jsx';
import ProjectContent from './ProjectContent.js';

import './ProjectsStylesheet.scss';


const ProjectsContainer = () => (
  <div className="projectSection">
      <div className="row bottom-xs triangleRowTop">
        <div className="col-xs-6 triangleHolder">
          <div className="triangle">
          </div>
        </div>
        <div className="right projectsHeaderContainer col-xs-6">
          <div className="projectsHeader">Projects</div>
        </div>
      </div>
      <div className="row center-xs middle-xs contentRow">
          { Object.keys(ProjectContent).map( (key) =>
            ( <ProjectCard {...ProjectContent[key]} /> )
          )}
      </div>
      <div className="row triangleRow bottomTriangle">
      </div>
  </div>
);


export default ProjectsContainer;
