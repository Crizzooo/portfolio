import React from 'react';

import MediumSVG from './MediumSVG.jsx';
import GmailSVG from './GmailSVG.jsx';
import GithubSVG from './GithubSVG.jsx';

const ContactCard = () => (
  <div className=" col-xs-12 col-lg-3 contactCard">
    <div className="contactImageHolder">
      <div className="svgHolder">
        <MediumSVG />
      </div>
    </div>
    <div className="contactImageCaption">
      <span>image info goes here</span>
    </div>
  </div>
);


export default ContactCard;
