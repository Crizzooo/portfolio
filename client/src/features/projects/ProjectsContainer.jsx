import React from 'react';
import { SparkScroll, SparkProxy } from '../../animatedContainers/app-spark';

//load components
import ProjectCardsRow from './ProjectCardsRow.jsx';

import './ProjectsStylesheet.scss';


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
                    <SparkProxy.div className="right projectsHeaderContainer col-xs-6">
                        <SparkScroll.div
                            className="projectsHeader"
                            timeline={{
                              topBottom: { transform: 'translateY(-10vh)', opacity: 0, ease: 'easeOutExpo' },
                              topCenter: { transform: 'translateY(0vh)', opacity: 1, ease: 'easeOutExpo' }
                        }}>
                            projects
                        </SparkScroll.div>
                    </SparkProxy.div>
                </div>
                <ProjectCardsRow />
                <div className="row triangleRow bottomTriangle">
                </div>
            </div>
        );
    }
}
