import React from 'react';

//load components
import ProjectCard from './ProjectCard.jsx';

import './ProjectsStylesheet.scss';


const ProjectsContainer = () => (
  <div className="projectSection">
    <div className="projectContainer">
      <div className="row bottom-xs triangleRowTop">
        <div className="col-xs-6 triangleHolder">
          <div className="triangle">
          </div>
        </div>
        <div className="right projectsHeaderContainer col-xs-6">
          <div className="projectsHeader">Projects</div>
        </div>
      </div>
      <div className="row center-xs contentRow">
        <div className="col-xs-10 contentHolder">
          { [1, 2, 3, 4].map( elem => (<ProjectCard/>) ) }
        </div>
      </div>
      <div className="row triangleRow bottomTriangle">
      </div>
    </div>
  </div>
);


export default ProjectsContainer;
