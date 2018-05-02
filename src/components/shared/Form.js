import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        { this.props.children }
      </form>
    )
  }
}

export class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="">{this.props.label}</label>
        <input 
          className="form-control" 
          type={this.props.type} 
          placeholder={this.props.placeholder} 
          name={this.props.name} 
          onChange={this.props.onChange} 
          value={this.props.value} />
      </div>
    )
  }
}
