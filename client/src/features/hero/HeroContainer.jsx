import React from 'react';

// This is my own module from github.com/crizzo/react-animated-buttonSVG :)
import AnimatedButton from 'react-animated-button';
import FallingText from '../../animatedContainers/fallingText.jsx';

//load componentss
import './HeroStylesheet.scss';

export default class HeroContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false,
      shouldAnimate: true,
      showButton: false
    };

    this.animationComplete = this.animationComplete.bind(this);
  }

  componentDidMount(){
    this.setState({mounted: true, showButton: false});
  }

  animationComplete(){
    this.setState({showButton: true, shouldAnimate: false});
  }

  render() {
    return (
      <div className="heroContainer">
        <div className="heroPic">
        </div>
        <div className="row center-xs textContainer quarto">
            <div className="col-xs-12 row center-xs">
              <div className="padRight">
              { this.state.mounted ? <FallingText text="CHRIS" shouldAnimate={this.state.shouldAnimate} /> : null }
              </div>
            </div>
            <div className="col-xs-12 row center-xs lastName">
              <div className="padLeft">
              { this.state.mounted ? <FallingText text="RIZZO" shouldAnimate={this.state.shouldAnimate} onComplete={ this.animationComplete } /> : null }
              </div>
            </div>
            { this.state.showButton ?
              <a className="resumeLink animated fadeInDown" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
              :
              <a className="resumeLink hidden" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
            }
        </div>
      </div>
    );
  }
}
