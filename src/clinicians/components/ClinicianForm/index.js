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

class ClinicianForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit(this.props.onSubmit)
  }

  render() {
    const { pristine, submitting, invalid, requirePassword } = this.props
    const passwordValidation = requirePassword ? [validateRequired, validatePassword] : [validatePassword]

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Field
              name="firstName"
              component={ renderField }
              className="form-control"
              required={true}
              validate={validateRequired}
              label="First Name" />
          </div>

          <div className="col-md-6">
            <Field
              name="lastName"
              component={ renderField }
              className="form-control"
              required={true}
              validate={validateRequired}
              label="Last Name" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Field 
              name="email"
              component={ renderField }
              type="email"
              required={true}
              validate={[validateRequired, validateEmail]}
              placeholder="some@email.com"
              className="form-control"
              label="Email" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Field 
              name="password"
              component={ renderField }
              type="password"
              required={requirePassword}
              validate={passwordValidation}
              className="form-control"
              label="Password" />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <Field 
              name="phoneNumber"
              component={ renderField }
              type="tel"
              required={true}
              validate={[validateRequired, validatePhone]}
              placeholder="(123) 123-1234"
              className="form-control"
              label="Phone Number"
              normalize={normalizePhone} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Field
              name="address"
              component={ renderField }
              required={true}
              validate={ validateRequired }
              className="form-control"
              label="Address" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Field
              name="address2"
              component={ renderField }
              className="form-control"
              label="Address 2" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field
              name="city"
              component={ renderField }
              required={true}
              validate={ validateRequired }
              className="form-control"
              label="City" />
          </div>

          <div className="col-md-2">
            <Field
              name="state"
              component={ renderField }
              required={true}
              validate={ [validateRequired, validateState] }
              normalize={ normalizeState }
              className="form-control"
              label="State" />
          </div>

          <div className="col-md-4">
            <Field
              name="zip"
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
            <button 
              type="submit"
              className="btn btn-primary float-right" 
              disabled={ pristine || submitting || invalid} >
              { this.props.submitText }
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "ClinicianForm",
})(ClinicianForm)
