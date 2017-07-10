import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/card';
import Icon from './Icon.jsx';

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
  render() {
    return(
      <div className="cardHolder">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="card" style={{"borderRadius":"2px","overflow":"hidden","margin":"2%","backgroundColor":"transparent"}}>
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
          <CardText expandable={true} style={{"backgroundColor":"rgb(33, 33, 33)", "color":"white"}}>
            <p>If I am showing that means state is expanded! If I am showing that means state is expanded! If I am showing that means state is expanded! If I am showing that means state is expanded! </p>
          </CardText>
          <CardActions expandable={true} style={{"backgroundColor":"rgb(33, 33, 33)", "padding":"0px 8px 4px 8px", "textAlign":"left", "borderBottomLeftRadius":"2px",
          "borderBottomRightRadius":"2px", "color":"white"}}>
            <Icon iconType='github' linkTo="https://www.google.com"/>
            <Icon iconType='chrome' linkTo="https://www.google.com"/>
          </CardActions>
        </Card>
    </div>);
  }
}
