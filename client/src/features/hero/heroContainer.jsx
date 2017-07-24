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
      mounted: false
    };
  }

  componentDidMount(){
    this.setState({mounted: true});
  }

  render() {
    return (
      <div className="heroContainer">
        <div className="heroPic">
        </div>
        <div className="textContainer">
            <div className="row center-xs">
              <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 left">
                { this.state.mounted ? <FallingText text="Chris" /> : null }
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-7 col-sm-4 col-lg-2 col-xl-1 right">
                { this.state.mounted ? <FallingText text="Rizzo" /> : null }
              </div>
            </div>
            <div className="row center-xs">
              <a className="resumeLink" href="/resume"><AnimatedButton strokeColor="beige" buttonText="view resume" containerStyle={{"color":"beiege"}}/></a>
            </div>
        </div>
      </div>
    );
  }
}
