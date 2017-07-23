import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/card';
import Icon from './Icon.jsx';
import AnimatedButton from 'react-animated-button';

export default class ProjectCardControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.generateImage = this.generateImage.bind(this);
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  render() {
    return(
      <div className="cardHolder">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="card" style={{"borderRadius":"2px","overflow":"hidden","margin":"2%","backgroundColor":"transparent"}}>
          <CardMedia
            actAsExpander={true}
            showExpandableButton={true}
            openIcon={null}
            closeIcon={null}
            overlay={<CardTitle title={ this.props.title} subtitle={ this.props.subtitle }/>}
            overlayContentStyle={{"padding":"0",  "textAlign":"left"}}
            style={{"overflow":"hidden",
                    "borderTopLeftRadius":"2px",
                    "borderTopRightRadius":"2px",
                    "borderBottomLeftRadius": (this.state.expanded ? "0px" : "2px"),
                    "borderBottomRightRadius": (this.state.expanded ? "0px" : "2px")}}
          >
          { this.generateImage() }
          </CardMedia>
          <CardText expandable={true} style={{"backgroundColor":"rgb(33, 33, 33)", "color":"white"}}>
            <p>{ this.props.desc }</p>
          </CardText>
          <CardActions expandable={true} style={{"backgroundColor":"rgb(33, 33, 33)", "padding":"0px 8px 4px 8px", "textAlign":"left", "borderBottomLeftRadius":"2px",
          "borderBottomRightRadius":"2px", "color":"white"}}>
            { this.props.links ?
              Object.keys(this.props.links).map( (link) =>
                (<Icon
                  iconType={link}
                  linkTo={this.props.links[link].linkTo}
                  />
                )
              )
              :
              null
            }
          </CardActions>
        </Card>
    </div>);
  }

  generateImage() {
    if (this.props.title === 'react-animated-button'){
      console.log('button!');
      return (
        <div style={{"backgroundImage":"url(/assets/heroBackground20003000.jpg)", "height":"300px","transform":"scale(1.15)", "backgroundSize":"contain"}}>
          <div className="buttonProjOverlay">
            <AnimatedButton />
          </div>
        </div>
      )
    } else {
      return (
        <img src={ this.props.imgSrc ? this.props.imgSrc : "/assets/heroBackground20003000.jpg"}
          style={{"height":"300px", "transform":"scale(1.15)"}}
          />)
    }
  }
}
