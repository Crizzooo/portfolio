import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store.js';
import App from './app.js';

//load main css
import './stylesheets/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  (<Provider store={store} >
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={App} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('app'));
