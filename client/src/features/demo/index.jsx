import React from 'react';
import AnimatedButton from 'react-animated-button';
import LeftEntrance from '../../animatedContainers/leftEntrance.jsx';

import './demoStylesheet.scss';

const Demo = (props) => {
  return (
    <div className="demoBody">
      <div className="row buttonDemoRow center-xs middle-xs">
        <a className="demoLink">
          <AnimatedButton
            strokeColor="#18F38C"
            buttonText="hover me"
            animatedText="do you like?"
            textStyle={{
              "color":"#18F38C",
              "font-size": "12px"
            }}
            />
        </a>
      </div>
   </div>
 );
};

export default Demo;
