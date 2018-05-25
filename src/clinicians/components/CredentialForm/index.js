import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CredentialForm = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit} >
      <Field name="test.description" component="input" type="text" />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default reduxForm({
  form: "CredentialForm",
  enableReinitialize: true,
})(CredentialForm)
