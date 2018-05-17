import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

export default class AccountNav extends Component {
  render() {
    return (
      <ul className="nav nav-pills" id="accountNav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/clinicians/account/info">Info</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/clinicians/account/experience">Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/clinicians/account/credentials">Credentials</NavLink>
        </li>
      </ul>
    )
  }
}
