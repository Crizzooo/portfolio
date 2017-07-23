import React from 'react';
import { connect } from 'react-redux';

import HeroContainer from './features/hero/HeroContainer.jsx';
import ProjectsContainer from './features/projects/ProjectsContainer.jsx';
import ContactContainer from './features/contact/ContactContainer.jsx';
import Footer from './features/footer/';

//load components
// TODO: load normal view into own container and place only children here with normal view on indexRoute
const App = (props) => (
  <div className="appContainer">
    { props.children }
    <HeroContainer />
    <ProjectsContainer />
    <ContactContainer />
    <Footer />
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
