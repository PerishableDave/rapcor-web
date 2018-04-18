import { BrowserRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Routes from './routes';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Fragment>
            <TopNav />
            <Routes />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
