import React from 'react';

// This is my own module from github.com/crizzo/react-animated-buttonSVG :)
import AnimatedButton from 'react-animated-button';
import FallingText from '../../animatedContainers/fallingText.jsx';

//load components
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
    // setTimeout( () => {
    //   console.log('turning on button..')
    //   this.setState({ showButton: true});
    // }, 2600);
  }

  animationComplete(){
    this.setState({showButton: true, shouldAnimate: false});
  }

  render() {
    return (
      <div className="heroContainer">
        <div className="heroPic">
        </div>
        <div className="textContainer">
            <div className="row center-xs">
              <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 left">
                { this.state.mounted ? <FallingText text="Chris" shouldAnimate={this.state.shouldAnimate} /> : null }
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 right">
                { this.state.mounted ? <FallingText text="Rizzo" shouldAnimate={this.state.shouldAnimate} onComplete={ this.animationComplete } /> : null }
              </div>
            </div>
            <div className="row center-xs">
              { this.state.showButton ?
                <a className="resumeLink animated fadeInDown" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
                :
                <a className="resumeLink hidden" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
              }
            </div>
        </div>
      </div>
    );
  }
}
