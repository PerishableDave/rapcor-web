import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const title = this.props.title ? (
      <h5 className="card-title">
        {this.props.title}
      </h5>
    ) : ""

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                {title}
                {this.props.children}  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
