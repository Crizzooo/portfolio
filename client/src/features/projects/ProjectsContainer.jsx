import React from 'react';

//load components
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
          <span>Projects</span>
        </div>
      </div>
      <div className="row center-xs contentRow">
        <div className="col-xs-10 contentHolder">
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
            <div className="cardHolder">
              <div className="card">
              </div>
            </div>
        </div>
      </div>
      <div className="row triangleRow bottomTriangle">
      </div>
    </div>
  </div>
);


export default ProjectsContainer;
