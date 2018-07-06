import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer className="container u-space-2">
        <hr className="my-7" />

        <div className="row align-items-md-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center">

              <p className="small mb-0">
                &copy; Rapcor 2018<br />All rights reserved.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 mb-4 mb-sm-0">
            <ul className="list-inline text-md-center u-list">
              <li className="list-inline-item u-list__item">
                <Link className="u-list__link" to="/help">Help</Link>
              </li>
              <li className="list-inline-item u-list__item">
                <Link className="u-list__link" to="/terms">Terms</Link>
              </li>
              <li className="list-inline-item u-list__item">
                <Link className="u-list__link" to="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-4 mb-4 mb-sm-0">
            <ul className="list-inline text-sm-right mb-0">
              <div className="list-inline-item">
                <Link className="u-bg-transparent u-icon u-icon--sm u-icon-secondary--air rounded-circle" to="https://www.twitter.com/rapcor">
                  <span className="fab u-icon__inner fa-facebook-f"></span>
                </Link>
              </div>
              <div className="list-inline-item">
                <Link className="u-bg-transparent u-icon u-icon--sm u-icon-secondary--air rounded-circle" to="https://www.twitter.com/rapcor">
                  <span className="fab u-icon__inner fa-twitter"></span>
                </Link>
              </div>
            </ul>
          </div>

        </div>
      </footer>
    )
  }
}
