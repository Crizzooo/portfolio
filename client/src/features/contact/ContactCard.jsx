import React from 'react';
import Anime from 'react-anime';

import MediumSVG from './MediumSVG.jsx';
import GmailSVG from './GmailSVG.jsx';
import GithubSVG from './GithubSVG.jsx';
import LinkedInSVG from './LinkedInSVG.jsx';


export default class ContactCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showText: false,
      entering: false
    };
    this.generateIcon = this.generateIcon.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onAnimationComplete = this.onAnimationComplete.bind(this);
  }

  onMouseEnter(){
    this.setState({showText: true, entering: true});
  }

  onMouseLeave(){
    this.setState({entering: false});
  }

  onAnimationComplete(){
    if (!this.state.entering){
      this.setState({
        showText: false
      })
    }
  }

  render(){
    console.log('rendering with state: ', this.state);
    return (
      <div className="col-xs-5 col-sm-2 contactCardContainer center-xs" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <div className="contactCard">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12 contactImageHolder">
              <div className="svgHolder">
                { this.generateIcon(this.props.type)}
              </div>
            </div>
            {
              this.state.showText ?
              (
                <Anime
                  translateY={this.state.entering ? [-50, 0] : [0, -50]}
                  opacity={{
                    value: this.state.entering ? [0, 1] : [0.5, 0],
                    duration: this.state.entering ? 5000 : 5000
                  }}
                  elasticity={this.state.entering ? 500 : 0}
                  complete={this.onAnimationComplete}
                  >
                  <div className="col-xs-12 contactImageCaption">
                    <span>{this.props.desc}</span>
                  </div>
                </Anime>
              )
              :
              null
            }
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
