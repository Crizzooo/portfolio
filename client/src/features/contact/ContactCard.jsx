import React from 'react';

import MediumSVG from './MediumSVG.jsx';
import GmailSVG from './GmailSVG.jsx';
import GithubSVG from './GithubSVG.jsx';
import LinkedInSVG from './LinkedInSVG.jsx';


export default class ContactCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.generateIcon = this.generateIcon.bind(this);
  }

  render(){
    return (
      <div className="col-xs-5 col-sm-4 col-lg-3 contactCard">
        <div className="row center-xs middle-xs">
          <div className="col-xs-12 contactImageHolder">
            <div className="svgHolder">
              { this.generateIcon(this.props.type)}
            </div>
          </div>
          <div className="col-xs-12 contactImageCaption">
            <span>{this.props.desc}</span>
          </div>
        </div>
      </div>
    );
  }

  generateIcon(type){
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
}


//TODO: Rewrite so that on mouse enter, icon begins to spin and text fades down
