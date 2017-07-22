import React from 'react';

import MediumSVG from './MediumSVG.jsx';
import GmailSVG from './GmailSVG.jsx';
import GithubSVG from './GithubSVG.jsx';
import LinkedInSVG from './LinkedInSVG.jsx';

const ContactCard = (props) => {
  console.log('props: ', props);
  return (<div className=" col-xs-12 col-lg-3 contactCard">
    <div className="contactImageHolder">
      <div className="svgHolder">
        { generateIcon(props.type)}
      </div>
    </div>
    <div className="contactImageCaption">
      <span>{props.desc}</span>
    </div>
  </div>
  );
};

export default ContactCard;

function generateIcon(type) {
  let icon;
  switch (type) {
    case 'github':
      icon = (<GithubSVG />);
      break;
    case 'medium':
      icon = (<MediumSVG />);
      break;
    case 'linkedin':
      icon = (<LinkedInSVG />);
      break;
    default:
      icon = (<GmailSVG />);

  }
  return icon;
}
