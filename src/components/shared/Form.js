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
    const { label, type, placeholder, name, onChange, value, required } = this.props
    const requiredMark = required ? (<span class="text-danger">*</span>) : undefined

    return (
      <div className="form-group">
        <label htmlFor="" className="h6 small d-block text-uppercase">{label}{requiredMark}</label>
        <input 
          className="form-control" 
          type={type} 
          placeholder={placeholder} 
          name={name} 
          onChange={onChange} 
          value={value} />
      </div>
    )
  }
}
