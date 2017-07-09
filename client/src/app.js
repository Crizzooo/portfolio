import React from 'react';
import { connect } from 'react-redux';

import HeroContainer from './features/hero/HeroContainer.jsx';
import ProjectsContainer from './features/projects/ProjectsContainer.jsx'

//load components
const App = () => (
  <div className="appContainer">
    <HeroContainer />
    <ProjectsContainer />
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
