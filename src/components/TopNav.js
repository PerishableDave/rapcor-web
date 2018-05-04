import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './TopNav.css'
import { isClinicianLoggedIn } from '../clinicians/store/authentication'

class TopNav extends PureComponent {
  render () {
    const navMenu = this.props.isClinicianLoggedIn ? (
      <div className="collapse navbar-collapse" id="navbarToggleMenu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clinicians/account">Account</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div className="collapse navbar-collapse" id="navbarToggleMenu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">Contact</Link>
          </li>
        </ul>

        <Link className="btn btn-primary my-2 my-sm-0" to="/clinicians/signup">Sign Up</Link>
        <Link className="btn btn-outline-secondary my-2 my-sm-0" to="/clinicians/login">Login</Link>
      </div>
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav id="topNav" className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to='/'>Rapcor</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleMenu" aria-controls="navbarToggleMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              { navMenu }
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isClinicianLoggedIn: isClinicianLoggedIn(state)
})

export default connect(mapStateToProps)(TopNav)
