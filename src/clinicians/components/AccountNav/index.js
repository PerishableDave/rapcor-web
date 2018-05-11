import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class AccountNav extends Component {
  render() {
    return (
      <ul className="nav nav-pills" id="accountNav">
        <li className="nav-item">
          <Link className="nav-link active" to="/clinicians/account/info">Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clinicians/account/experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/clinicians/account/credentials">Credentials</Link>
        </li>
      </ul>
    )
  }
}
