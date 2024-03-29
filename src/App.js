import { Router } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import store from './store'
import history from './store/history'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Fragment>
            <TopNav />
            <Routes />
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
