import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';

import theme from './theme';
import App from './App';
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>   
        <Provider store={store}>         
          <App />
      </Provider>
     </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

