import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  renderField,
  renderSelect,
  validateRequired
} from '../../../components/shared/Form'

class RequestForm extends Component {
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
              name="type"
              component={renderSelect}
              className="form-control" 
              label="I am looking for"
              validate={validateRequired} >
              <option value="respiratory-therapist">Respiratory Therapist</option>
            </Field>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary float-right">Submit Request</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "RequestForm"
})(RequestForm)
