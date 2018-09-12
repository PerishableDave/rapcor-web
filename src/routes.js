import { Switch, Route } from 'react-router'
import React from 'react'

import Home from './components/Home'
import SignUpPage from './clinicians/containers/SignUpPage'
import LoginPage from './clinicians/containers/LoginPage'
import AccountPage from './clinicians/containers/AccountPage'
import ClinicianAuth from './clinicians/components/ClinicianAuth'
import AccountExperiencePage from './clinicians/containers/AccountExperiencePage'
import AccountCredentialsPage from './clinicians/containers/AccountCredentialsPage'
import RequestBidPage from './clinicians/containers/RequestBidPage'
import RequestBidsPage from './clinicians/containers/RequestBidsPage'

import ProviderSignupPage from './providers/containers/ProviderSignupPage'
import ProviderLoginPage from './providers/containers/ProviderLoginPage'
import CreateRequestPage from './providers/containers/CreateRequestPage'
import ProviderRequestsPage from './providers/containers/RequestsPage'
import withProviderAuth from './providers/components/auth-helper'


export default (params) => {
  return (
    <Switch>
      <Route exact path='/clinicians/requests' component={ClinicianAuth(RequestBidsPage)} />
      <Route exact path='/clinicians/account/info' component={ClinicianAuth(AccountPage)} />
      <Route exact path='/clinicians/account/experience' component={ClinicianAuth(AccountExperiencePage)} />
      <Route exact path='/clinicians/account/credentials' component={ClinicianAuth(AccountCredentialsPage)} />
      <Route exact path='/clinicians/signup' component={SignUpPage} />
      <Route exact path='/clinicians/login' component={LoginPage} />
      <Route path='/r/:slug' component={RequestBidPage} />

      <Route exact path='/providers/signup' component={ProviderSignupPage} />
      <Route exact path='/providers/login' component={ProviderLoginPage} />
      <Route exact path='/providers/requests' component={withProviderAuth(ProviderRequestsPage)} />
      <Route exact path='/providers/requests/new' component={withProviderAuth(CreateRequestPage)} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
}
