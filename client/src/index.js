import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store.js';
import App from './app.js';
import Home from './home.jsx';
import Demo from './features/demo/index.jsx';

//load main css
import './stylesheets/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  (<Provider store={store} >
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="demo" component={Demo} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('app'));
