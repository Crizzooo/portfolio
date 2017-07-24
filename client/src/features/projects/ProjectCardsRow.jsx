import React from 'react';
import TrackVisbility from 'react-on-screen';
const { SparkScroll, SparkProxy } = require('../../animatedContainers/app-spark');

//load components
import ProjectCard from './ProjectCard.jsx';
import ProjectContent from './ProjectContent.js';

import './ProjectsStylesheet.scss';

//TODO: move out meat of project container to own file and wrap it with trackvisibility
// switch className between 'hidden' and the desired animate.css className
const ProjectCardsRow = (props) => {
      const classNames = props.isVisible ? 'animated slideInLeft' : 'hidden';
      console.log('is visible? ', props.isVisible);
      return (
      <div className="row center-xs middle-xs">
        <SparkProxy.div>
        <SparkScroll.div
            className="row col-xs-12 center-xs contentRow"
            timeline={{
                topBottom: { marginLeft: '-40vw', opacity: 0 , ease: 'easeOutBack' },
                topCenter: { marginLeft: '0px', opacity: 1, ease: 'easeOutBack' },
                bottomCenter: { marginLeft: '0px', opacity: 1, ease: 'easeOutBack' }
            }}>
          { Object.keys(ProjectContent).map( (key, i) => {
            if (i === Object.keys(ProjectContent).length - 1) {
              return ( <ProjectCard style={{"overflow":"visible", "maxHeight": "316px"}} { ...ProjectContent[key]} />);
            } else {
              return ( <ProjectCard {...ProjectContent[key]} /> );
            }
          }) }
          </SparkScroll.div>
        </SparkProxy.div>
      </div>);
};


export default ProjectCardsRow;
