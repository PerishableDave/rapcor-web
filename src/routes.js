import { Switch, Route } from 'react-router'
import React from 'react'

import Home from './components/Home'
import SignUpPage from './clinicians/components/SignUpPage'
import LoginPage from './clinicians/components/LoginPage'
import AccountPage from './clinicians/components/AccountPage'
import ClinicianAuth from './clinicians/components/ClinicianAuth'

export default () => (
  <Switch>
    <Route exact path='/clinicians/account' component={ClinicianAuth(AccountPage)} />
    <Route exact path='/clinicians/signup' component={SignUpPage} />
    <Route exact path='/clinicians/login' component={LoginPage} />
    <Route exact path='/' component={Home} />
  </Switch>
);
