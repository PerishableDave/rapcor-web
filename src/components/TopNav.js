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
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link className="nav-link" to="/about">Contact</Link>
                  </li>
                </ul>
                <Link className="btn btn-light my-2 my-sm-0" to="/clinicians/signup">Sign Up</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
