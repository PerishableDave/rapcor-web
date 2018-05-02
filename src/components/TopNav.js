import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import './TopNav.css'

export default class TopNav extends PureComponent {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav id="topNav" className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to='/'>Rapcor</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">Contact</Link>
                  </li>
                </ul>
                <Link className="btn btn-primary my-2 my-sm-0" to="/clinicians/signup">Sign Up</Link>
                <Link className="btn btn-outline-secondary my-2 my-sm-0" to="/clinicians/login">Login</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
