import { Switch, Route } from 'react-router'
import React from 'react'

import Home from './components/Home'
import SignUp from './components/SignUp'

export default () => (
  <Switch>
    <Route exact path='/clinicians/signup' component={SignUp} />
    <Route exact path='/' component={Home} />
  </Switch>
);
