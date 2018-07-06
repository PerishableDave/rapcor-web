import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { 
  renderField, 
  validateRequired, 
  validateEmail, 
  validatePhone, 
  validatePassword, 
  validateState,
  validatePostalCode,
  normalizePhone,
  normalizeState,
  normalizePostalCode
} from '../../../components/shared/Form'

class ProviderForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit(this.props.onSubmit)
  }

    
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-md-12">
            <Field 
              name="name"
              component={ renderField }
              className="form-control"
              required={true}
              validate={validateRequired}
              placeholder="e.g. Seattle Grace Hopsital"
              label="Provider Name" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field 
              name="contactEmail"
              component={ renderField }
              type="email"
              required={true}
              validate={[validateRequired, validateEmail]}
              placeholder="some@email.com"
              className="form-control"
              label="Contact Email" />
          </div>

          <div className="col-md-6">
            <Field 
              name="contactNumber"
              component={ renderField }
              type="tel"
              required={true}
              validate={[validateRequired, validatePhone]}
              placeholder="(123) 123-1234"
              className="form-control"
              label="Contact Number"
              normalize={normalizePhone} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field 
              name="password"
              component={ renderField }
              type="password"
              required={true}
              validate={ [validateRequired, validatePassword] }
              className="form-control"
              label="Password" />
          </div>

          <div className="col-md-6">
            <Field 
              name="passwordConfirmation"
              component={ renderField }
              type="password"
              required={true}
              validate={ validateRequired }
              className="form-control"
              label="Confirm Password" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Field
              name="thoroughfare"
              component={ renderField }
              required={true}
              validate={ validateRequired }
              className="form-control"
              label="Address" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Field
              name="premise"
              component={ renderField }
              className="form-control"
              label="Address 2" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field
              name="locality"
              component={ renderField }
              required={true}
              validate={ validateRequired }
              className="form-control"
              label="City" />
          </div>

          <div className="col-md-2">
            <Field
              name="administrativeArea"
              component={ renderField }
              required={true}
              validate={ [validateRequired, validateState] }
              normalize={ normalizeState }
              className="form-control"
              label="State" />
          </div>

          <div className="col-md-4">
            <Field
              name="postalCode"
              component={ renderField }
              required={true}
              validate={ [validateRequired, validatePostalCode] }
              normalize={ normalizePostalCode }
              className="form-control"
              label="Zip" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary float-right">{ this.props.submitText }</button>
          </div>
        </div>
      </form>
    )
  }
}

const validateForm = values => {
  const errors = {}

  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = "Passwords do not match"
  }

  return errors
}

export default reduxForm({
  form: "ProviderForm",
  validate: validateForm
})(ProviderForm)
