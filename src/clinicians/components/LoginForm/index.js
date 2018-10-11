import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  renderField,
  validateRequired,
  validateEmail
} from '../../../components/shared/Form'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  render() {
    const { pristine, submitting, invalid, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <Field
              name="email"
              component={ renderField }
              className="form-control"
              validate={[validateRequired, validateEmail]}
              label="Email" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Field 
              name="password"
              className="form-control"
              component={ renderField }
              validate={validateRequired}
              type="password"
              label="Password" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span className="small text-muted">Don't have an account? </span>
            <Link className="small" to="/clinicians/signup">Sign Up</Link>
          </div>

          <div className="col-md-6">
            <button 
              type="submit"
              className="btn btn-primary float-right">Login</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "LoginForm"
})(LoginForm)
