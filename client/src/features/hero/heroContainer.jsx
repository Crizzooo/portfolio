import React from 'react';
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
          <div className="col-xs-offset-4 col-xs-4 right"><AnimatedButton onClick={()=>console.log('hi')}/></div>
        </div>
    </div>
  </div>
);
}


export default HeroContainer;
