import { Switch, Route } from 'react-router'
import React from 'react'

import Home from './components/Home'
import SignUp from './components/clinicians/SignUp'
import Login from './components/clinicians/Login'
import Account from './components/clinicians/Account'
import ClinicianAuth from './components/shared/ClinicianAuth'

export default () => (
  <Switch>
    <Route exact path='/clinicians/account' component={ClinicianAuth(Account)} />
    <Route exact path='/clinicians/signup' component={SignUp} />
    <Route exact path='/clinicians/login' component={Login} />
    <Route exact path='/' component={Home} />
  </Switch>
);
