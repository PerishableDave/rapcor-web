import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash/object'

import PhotoField from '../PhotoField'
import { renderField, renderSelect } from '../../../components/shared/Form'

import './style.css'

const validateNumeric = (value) => {
  return value && !isNaN(value) && value > 0 ? undefined : "Invalid license number."
}

const required = value => (value ? undefined : 'Required')


class RespiratoryCredentialForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit(this.handleSubmit.bind(this))

    this.state = {
      "rt-rcp": {
        frontPhoto: null,
        backPhoto: null
      },
      "rt-rcc": {
        frontPhoto: null,
        backPhoto: null
      }
    }
  }

  handlePhotoChange(fieldName) {
    return (file) => {
      const newState = _.set(this.state, fieldName, file)

      this.setState(newState)
    }
  }

  handleSubmit(data) {
    data["rt-rcp"].frontPhoto = _.get(this.state, "rt-rcp.frontPhoto", null)
    data["rt-rcp"].backPhoto = _.get(this.state, "rt-rcp.backPhoto", null)
    data["rt-rcc"].backPhoto = _.get(this.state, "rt-rcc.frontPhoto", null)
    data["rt-rcc"].frontPhoto = _.get(this.state, "rt-rcc.backPhoto", null)

    this.props.onSubmit(data)
  }

  render() {
    const rcpFrontThumbnail = _.get(this.props.documents, "rt-rcp.frontPhoto")
    const rcpBackThumbnail = _.get(this.props.documents, "rt-rcp.backPhoto")
    const rccFrontThumbnail = _.get(this.props.documents, "rt-rcc.frontPhoto")
    const rccBackThumbnail = _.get(this.props.documents, "rt-rcc.backPhoto")

    return (
      <form onSubmit={this.handleSubmit} >
        <div className="card credential-form">
          <div className="card-body">
            <h4 className="card-title">Respiratory Care Practicioner</h4>

            <div className="row">
              <div className="col-md-8">
                <Field 
                  name="rt-rcp.number" 
                  component={renderField}
                  className="form-control"
                  label="License Number"
                  validate={[required, validateNumeric]} />
              </div>

              <div className="col-md-2">
                <Field
                  name="rt-rcp.expiration"
                  component={renderField}
                  className="form-control"
                  placeholder="YYYY-MM-DD"
                  label="Exp. Date"
                  validate={required} />
              </div>

              <div className="col-md-2">
                <Field
                  name="rt-rcp.state" 
                  component={renderField}
                  className="form-control"
                  label="State"
                  validate={required} />

              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <PhotoField 
                    label="Front photo"
                    thumbnail={rcpFrontThumbnail}
                    onDrop={this.handlePhotoChange("rt-rcp.frontPhoto").bind(this)} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <PhotoField 
                    label="Back photo"
                    thumbnail={rcpBackThumbnail}
                    onDrop={this.handlePhotoChange("rt-rcp.backPhoto").bind(this)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Field
          name="rt-rcp.slug"
          component="input"
          type="hidden" />

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">National Board for Respiratory Care Certification</h4>

            <div className="row">
              <div className="col-md-8">
                <Field 
                  name="rt-rcc.number" 
                  component={renderField}
                  className="form-control"
                  label="License Number"
                  validate={[required, validateNumeric]}/>
              </div>

              <div className="col-md-2">
                <Field
                  name="rt-rcc.expiration" 
                  component={renderField}
                  className="form-control" 
                  placeholder="YYYY-MM-DD"
                  label="Exp. Date"
                  validate={required} />
              </div>

              <div className="col-md-2">
                <Field
                  name="rt-rcc.slug"
                  component={renderSelect}
                  type="select"
                  className="custom-select"
                  label="Type"
                  validate={required} >
                  <option />
                  <option value="rt-crt">CRT</option>
                  <option value="rt-rrt">RRT</option>
                </Field>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <PhotoField 
                    label="Front photo"
                    thumbnail={rccFrontThumbnail}
                    onDrop={this.handlePhotoChange("rt-rcc.frontPhoto").bind(this)} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <PhotoField 
                    label="Back photo"
                    thumbnail={rccBackThumbnail}
                    onDrop={this.handlePhotoChange("rt-rcc.backPhoto").bind(this)} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <Field
          name="rt-rcc.id"
          component="input"
          type="hidden" />

        <button type="submit" className="btn btn-primary float-right" >Save</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "RespiratoryCredentialForm",
  enableReinitialize: true
})(RespiratoryCredentialForm)
