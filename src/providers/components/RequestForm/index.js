import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {
  renderField,
  renderSelect,
  renderTextarea,
  validateRequired
} from '../../../components/shared/Form'

import 'react-datepicker/dist/react-datepicker.css'
import './style.css'

const renderExperience = field => {
  const { input: { name }, value } = field
  return (
    <div className="form-check">
      <input {...field.input} type="checkbox" value="42" className="form-check-input" />
      <label className="form-check-label" htmlFor={name}>{field.label}</label>
    </div>
  )
}

class RequestForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit(this.props.onSubmit)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)

    this.state = {
      startDate: null,
      endDate: null
    }
  }

  handleStartDateChange(newDate) {
    this.setState({startDate: newDate})
  }

  handleEndDateChange(newDate) {
    this.setState({endDate: newDate})
  }


  render() {
    const experiences = this.props.experiences || []

    const experienceFields = experiences.map((experience, index) => {
      return (
        <li key={experience.id}>
          <Field
            name={`experiences[${experience.id}]`}
            value={experience.id.toString()}
            component={renderExperience}
            type="checkbox"
            label={experience.description} />
        </li>
      )
    })

    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-md-12">
            <Field 
              name="type"
              component={renderSelect}
              className="form-control" 
              label="I am looking for a"
              validate={validateRequired} >
              <option value="respiratory-therapist">Registered Respiratory Therapist</option>
            </Field>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="h6 small d-block text-uppercase">From</label>
              <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleStartDateChange}
                dateFormat="dddd, MMMM Do, h:mm A"
                minDate={moment()}
                showTimeSelect
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="h6 small d-block text-uppercase">To</label>
              <DatePicker 
                selected={this.state.endDate}
                onChange={this.handleEndDateChange}
                dateFormat="dddd, MMMM Do, h:mm A"
                minDate={moment()}
                showTimeSelect
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h6 className="h6 small d-block text-uppercase">With experience in</h6>

            <ul className="request-experience-list">
              { experienceFields }
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h6 className="h6 small d-block text-uppercase">Notify me by</h6>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field
              name="contactEmail"
              component={renderField}
              label="Email" />
          </div>

          <div className="col-md-6">
            <Field
              name="contactPhone"
              component={renderField}
              label="Phone" />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <Field
              name="contactPhone"
              component={renderTextarea}
              label="Notes" />
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
