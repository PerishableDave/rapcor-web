import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.css'
import { isClinicianLoggedIn } from '../../clinicians/store/authentication'

class TopNav extends PureComponent {
  render () {
    const navMenu = this.props.isClinicianLoggedIn ? (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link u-header__nav-link" to="/clinicians/requests">Requests</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clinicians/account/info">Account</Link>
        </li>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link u-header__nav-link" to="/clinicians/login">Clinicians</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link u-header__nav-link" to="/providers/login">Providers</Link>
        </li>
      </React.Fragment>
    )

    return (
      <header className="u-header">
        <div className="u-header__section">
          <div className="container">
            <nav id="topNav" className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand u-header__navbar-brand u-header__navbar-brand-top-space" to='/'>Rapcor</Link>

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
  isClinicianLoggedIn: isClinicianLoggedIn(state)
})

export default connect(mapStateToProps)(TopNav)
