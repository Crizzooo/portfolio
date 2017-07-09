import React from 'react';
import { connect } from 'react-redux';

import HeroContainer from './features/hero/HeroContainer.jsx';

//load components
const App = () => (
  <div className="appContainer">
    <HeroContainer />
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
