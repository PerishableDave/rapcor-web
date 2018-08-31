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
  const { required, placeholder, input: { name }, meta: {error, touched, submitFailed} } = field


  const className = "form-control" + (error && (touched || submitFailed) ? " is-invalid" : "")
  const type = field.type || "text"
  const requiredMark = required ? (<span class="text-danger">*</span>) : undefined

  const label = field.label ? (<label htmlFor={name} className="h6 small d-block text-uppercase">{ field.label }{ requiredMark }</label>) : ""

  const errorMsg = error ? (<div className="invalid-feedback">{error}</div>) : undefined

  return (
    <div className="form-group">
      { label }
      <input {...field.input} type={type} className={className} placeholder={placeholder} />
      { errorMsg }
    </div>
  )
}

export const renderTextarea = field => {
  const { required, placeholder, input: { name }, meta: {error, touched, submitFailed} } = field


  const className = "form-control" + (error && (touched || submitFailed) ? " is-invalid" : "")
  const type = field.type || "text"
  const requiredMark = required ? (<span class="text-danger">*</span>) : undefined

  const label = field.label ? (<label htmlFor={name} className="h6 small d-block text-uppercase">{ field.label }{ requiredMark }</label>) : ""

  const errorMsg = error ? (<div className="invalid-feedback">{error}</div>) : undefined

  return (
    <div className="form-group">
      { label }
      <textarea {...field.input} type={type} className={className} placeholder={placeholder} />
      { errorMsg }
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

export const validateEmail = value => {
  var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

  return regex.test(value) ? undefined : 'Invalid email address'
}

export const validateRequired = value => {
  return value ? undefined : 'Required'
}

export const validatePhone = value => {
  if (!value) {
    return value
  }

  const numbers = value.replace(/[^\d]/g, '')
  return numbers.length === 10 ? undefined : 'Invalid phone number'
}

export const validatePassword = value => {
  return value.length < 9 ? 'Password must be 9 characters or longer' : undefined
}

export const validateState = value => {
  const chars = value.replace(/[^a-zA-Z]/g, '')
  return chars.length === 2 ? undefined : 'Invalid state'
}

export const validatePostalCode = value => {
  const numbers = value.replace(/[^\d]/g, '')
  return numbers.length === 5 ? undefined : 'Invalid postal code'
}

export const normalizeState = value => {
  const chars = value.replace(/[^a-zA-Z]/g, '')
  return chars.slice(0, 2).toUpperCase()
}

export const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value
  }


  const numbers = value.replace(/[^\d]/g, '')

  if (numbers.length === 0) {
    return ''
  }

  if (numbers.length <= 3) {
    return `${numbers.slice(0, 3)}`
  }

  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
  }

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
}

export const normalizePostalCode = value => {
  const numbers = value.replace(/[^\d]/g, '')
  return numbers.slice(0, 5)
}
