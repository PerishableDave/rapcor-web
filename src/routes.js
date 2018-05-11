import { Switch, Route } from 'react-router'
import React from 'react'

import Home from './components/Home'
import SignUpPage from './clinicians/components/SignUpPage'
import LoginPage from './clinicians/components/LoginPage'
import AccountPage from './clinicians/components/AccountPage'
import ClinicianAuth from './clinicians/components/ClinicianAuth'
import AccountExperiencePage from './clinicians/containers/AccountExperiencePage'
import AccountCredentialsPage from './clinicians/containers/AccountCredentialsPage'


export default () => (
  <Switch>
    <Route exact path='/clinicians/account/info' component={ClinicianAuth(AccountPage)} />
    <Route exact path='/clinicians/account/experience' component={ClinicianAuth(AccountExperiencePage)} />
    <Route exact path='/clinicians/account/credentials' component={ClinicianAuth(AccountCredentialsPage)} />
    <Route exact path='/clinicians/signup' component={SignUpPage} />
    <Route exact path='/clinicians/login' component={LoginPage} />
    <Route exact path='/' component={Home} />
  </Switch>
);
