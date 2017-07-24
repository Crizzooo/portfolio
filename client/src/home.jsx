import React from 'react';

import HeroContainer from './features/hero/HeroContainer.jsx';
import ProjectsContainer from './features/projects/ProjectsContainer.jsx';
import ContactContainer from './features/contact/ContactContainer.jsx';
import Footer from './features/footer/';


// TODO: load normal view into own container and place only children here with normal view on indexRoute
const Home = (props) => (
  <div className="appContainer">
      <HeroContainer />
      <ProjectsContainer />
      <ContactContainer />
      <Footer />
  </div>
);

export default Home;
