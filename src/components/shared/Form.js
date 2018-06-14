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

export const renderField = field => {
  const { placeholder, input: { name }, meta: {error, dirty, submitFailed} } = field


  const className = "form-control" + (error && (dirty || submitFailed) ? " is-invalid" : "")
  const type = field.type || "text"

  const label = field.label ? (<label htmlFor={name} className="h6 small d-block text-uppercase">{ field.label }</label>) : ""

  return (
    <div className="form-group">
      { label }
      <input {...field.input} type={type} className={className} placeholder={placeholder} />
    </div>
  )
}

export const renderSelect = field => {
  const { input: { name }, meta: { error, dirty, submitFailed } } = field
  const className = "form-control custom-select" + (error && (dirty || submitFailed) ? " is-invalid" : "")

  const label = field.label ? (<label htmlFor={name} className="h6 small d-block text-uppercase">{ field.label }</label>) : ""

  return (
    <div className="form-group">
      { label }
      <select {...field.input} className={className} >
        { field.children }
      </select>
  </div>
  )
}

