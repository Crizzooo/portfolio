import React from 'react';
import { Link } from 'react-router';
// This is my own module from github.com/crizzo/react-animated-buttonSVG :)
import AnimatedButton from 'react-animated-button';

//load components
import './HeroStylesheet.scss';

const HeroContainer = () => {
  return(
  <div className="heroContainer">
    <div className="textContainer">
        <div className="row center-xs">
          <div className="col-xs-6 right"><div>Chris</div></div>
          <div className="col-xs-6"></div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-offset-6 col-xs-6 left"><div>Rizzo</div></div>
        </div>
        <div className="row center-xs">
          <a target="_blank" className="resumeLink" href="/resume"><AnimatedButton strokeColor="beige" containerStyle={{"color":"beiege"}}/></a>
        </div>
    </div>
  </div>
);
}

export default HeroContainer;
