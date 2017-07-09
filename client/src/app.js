import React from 'react';
import { connect } from 'react-redux';

import HeroContainer from './features/hero/HeroContainer.jsx';
import ProjectsContainer from './features/projects/ProjectsContainer.jsx';
import ContactContainer from './features/contact/ContactContainer.jsx';
import Footer from './features/footer/';

//load components
const App = () => (
  <div className="appContainer">
    <HeroContainer />
    <ProjectsContainer />
    <ContactContainer />
    <Footer />
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
