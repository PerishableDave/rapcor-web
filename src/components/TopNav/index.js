import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.css'
import { isClinicianLoggedIn } from '../../clinicians/store/authentication'
import { getProviderToken } from '../../providers/store/authentication/reducer'

const guestMenu = props => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link className="nav-link u-header__nav-link" to="/clinicians/login">Clinicians</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link u-header__nav-link" to="/providers/login">Providers</Link>
      </li>
    </React.Fragment>
  )
}

const clinicianMenu = props => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link className="nav-link u-header__nav-link" to="/clinicians/requests">Requests</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/clinicians/account/info">Account</Link>
      </li>
    </React.Fragment>
  )
}

const providerMenu = props => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link className="nav-link u-header__nav-link" to="/providers/requests/">Requests</Link>
      </li>
    </React.Fragment>
  )
}

class TopNav extends PureComponent {
  render () {
    const { isClinicianLoggedIn, isProviderLoggedIn } = this.props

    let navMenu
    if (isClinicianLoggedIn) {
      navMenu = clinicianMenu()
    } else if (isProviderLoggedIn) {
      navMenu = providerMenu()
    } else {
      navMenu = guestMenu()
    }

    return (
      <header className="u-header">
        <div className="u-header__section">
          <div className="container">
            <nav id="topNav" className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand u-header__navbar-brand u-header__navbar-brand-top-space" to='/'>
                <img src="/images/logo.png" width="50" height="50" />
                &nbsp;Rapcor
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleMenu" aria-controls="navbarToggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse py-0" id="navbarToggleMenu">
                <ul className="navbar-nav u-header__navbar-nav ml-lg-auto">
                  { navMenu }
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </header>    
    )
  }
}

const mapStateToProps = (state) => ({
  isClinicianLoggedIn: isClinicianLoggedIn(state),
  isProviderLoggedIn: getProviderToken(state) !== null
})

export default connect(mapStateToProps)(TopNav)
