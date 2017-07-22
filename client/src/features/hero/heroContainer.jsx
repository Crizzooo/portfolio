import React from 'react';

// This is my own module from github.com/crizzo/react-animated-buttonSVG :)
import AnimatedButton from 'react-animated-button';

//load components
import './HeroStylesheet.scss';

const HeroContainer = () => {
  return(
  <div className="heroContainer">
    <div className="textContainer">
        <div className="row center-xs">
          <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 left"><div>Chris</div></div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 right"><div>Rizzo</div></div>
        </div>
        <div className="row center-xs">
          <a className="resumeLink" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
        </div>
    </div>
  </div>
);
}

export default HeroContainer;
