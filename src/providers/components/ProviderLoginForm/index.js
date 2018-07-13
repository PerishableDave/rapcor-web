import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import {
  renderField,
  validateEmail,
  validateRequired
} from '../../../components/shared/Form'

class ProviderLoginForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit(this.props.onSubmit)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col">
            <Field 
              name="contactEmail"
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
              component={ renderField }
              className="form-control"
              type="password"
              validate={ validateRequired }
              label="Password" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <span className="small text-muted">Don't have an account? </span>
            <Link className="small" to="/providers/signup">Sign up</Link>
          </div>

          <div className="col-md-6">
            <button type="submit" className="btn btn-primary float-right">
              Login
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "ProviderLoginForm"
})(ProviderLoginForm)
