import React from 'react';
import { connect } from 'react-redux';

import heroContainer from './features/hero/heroContainer';

//load components
const App = () => (
  <div>
    <heroContainer />
  </div>
);

const mapState = () => ({});

export default connect(mapState)(App);
