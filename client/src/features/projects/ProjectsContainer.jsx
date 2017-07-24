import React from 'react';

//load components
import ProjectCardsRow from './ProjectCardsRow.jsx';

import './ProjectsStylesheet.scss';

//TODO: move out meat of project container to own file and wrap it with trackvisibility
// switch className between 'hidden' and the desired animate.css className
export default class ProjectsContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="projectSection">
                <div className="row bottom-xs triangleRowTop">
                    <div className="col-xs-6 triangleHolder">
                        <div className="triangle">
                        </div>
                    </div>
                    <div className="right projectsHeaderContainer col-xs-6">
                        <div className="projectsHeader">Projects</div>
                    </div>
                </div>
                <ProjectCardsRow />
                <div className="row triangleRow bottomTriangle">
                </div>
            </div>
        );
    }
}
