import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render() {
    return (
      <form>
        { this.props.children }
      </form>
    )
  }
}

export class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
  }

  render() {
    return (
      <div className="form-group">
        <label for="">{this.props.label}</label>
        <input className="form-control" type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}
