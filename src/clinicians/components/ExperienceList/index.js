import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray, reduxForm } from 'redux-form'

const validateNumber = value => {
  return value === null || value === "" || isNaN(Number(value)) || value < 0 ? "Required" : undefined
}

const createDescription = (field) => (
  <div className={field.className}>{field.input.value}</div>
)

const createYearInput = field => {
  const className = field.meta.error ? "form-control is-invalid" : "form-control"
  return (
    <input {...field.input} type="number" className={className} />
  )
}

const renderExperience = (member, index, fields) => (
  <li key={index} className="form-group row experience-list-item">
    <Field
      name={`${member}.experienceId`}
      component="input"
      type="hidden" />
    <Field
      name={`${member}.description`}
      component="input"
      type="text"
      className="col-md-8 col-form-label form-control-plaintext"
      readOnly />
    <div className="col-md-4">
      <Field
        name={`${member}.years`}
        component={createYearInput}
        type="number"
        className="form-control" 
        validate={validateNumber} />
    </div>
  </li>
)

const renderExperiences = ({ fields, meta: { error, submitFailed }}) => (
  <ul>
    {fields.map(renderExperience)}
  </ul>
)

const ExperienceList = props => {
  const { handleSubmit, pristine, submitting, invalid} = props

  return (
    <form onSubmit={handleSubmit} >
      <FieldArray name="experiences" component={renderExperiences} />
      <button type="submit" className="btn btn-primary float-right" disabled={pristine || submitting || invalid} >Save</button>
    </form>
  )
}

export default reduxForm({
  form: "ExperienceList",
  enableReinitialize: true
})(ExperienceList)
