import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const validateNumber = value => {
  return value === null || value === "" || isNaN(Number(value)) || value < 0 ? "Required" : undefined
}

const createYearInput = field => {
  const className = field.meta.error ? "form-control is-invalid" : "form-control"
  return (
    <input {...field.input} type="number" className={className} />
  )
}

const renderExperience = (member, index, fields) => (
  <div key={index} className="form-group row">
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
  </div>
)

const renderExperiences = ({ fields, meta: { error, submitFailed }}) => (
  <div>
    {fields.map(renderExperience)}
  </div>
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
