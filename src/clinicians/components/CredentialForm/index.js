import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CredentialForm = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit} >
      <Field name="description" component="input" type="text" />
    </form>
  )
}

export default reduxForm({
  form: "CredentialForm",
  enableReinitialize: true,
  initialValues: {
    description: "Testing"
  }
})(CredentialForm)
