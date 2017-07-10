import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/card';

export default class ProjectCardControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return(
      <div className="cardHolder">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{"borderRadius":"2px","overflow":"hidden","margin":"2%","backgroundColor":"transparent"}}>
          <CardMedia
            actAsExpander={true}
            showExpandableButton={true}
            openIcon={null}
            closeIcon={null}
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            overlayContentStyle={{"padding":"0",  "textAlign":"left"}}
            style={{"overflow":"hidden",
                    "borderTopLeftRadius":"2px",
                    "borderTopRightRadius":"2px",
                    "borderBottomLeftRadius": (this.state.expanded ? "0px" : "2px"),
                    "borderBottomRightRadius": (this.state.expanded ? "0px" : "2px")}}
          >
            <img src="/assets/heroBackground20003000.jpg"/>
          </CardMedia>
          <CardText expandable={true} style={{"backgroundColor":"grey"}}>
            <p>If I am showing that means state is expanded! If I am showing that means state is expanded! If I am showing that means state is expanded! If I am showing that means state is expanded! </p>
          </CardText>
          <CardActions expandable={true} style={{"backgroundColor":"grey", "borderTop": "black 1px solid", "textAlign":"left", "borderBottomLeftRadius":"2px",
          "borderBottomRightRadius":"2px"}}>
            <span>Github</span>
            <span>Deployed</span>
          </CardActions>
        </Card>
    </div>);
  }
}
