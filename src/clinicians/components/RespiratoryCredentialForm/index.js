import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import './style.css'

const CredentialForm = props => {
}

class RespiratoryCredentialForm extends Component {
  render() {
    const { handleSubmit, rtcrt } = this.props
    return (
      <form onSubmit={handleSubmit} >
        <div className="card credential-form">
          <div className="card-body">
            <h4 className="card-title">Certified Respiratory Therapist</h4>

            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                <label htmlFor="" className="h6 small d-block text-uppercase">License Number</label>
                <Field 
                  name="rt-crt.number" 
                  component="input" 
                  className="form-control" />
              </div>

            </div>
              
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="" className="h6 small d-block text-uppercase">Exp. Date</label>
                  <Field
                    name="rt-crt.expirationDate" 
                    component="input" 
                    className="form-control" />
                </div>
              </div>

              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="" className="h6 small d-block text-uppercase">State Issued</label>
                  <Field
                    name="rt-crt.state" 
                    component="input"
                    className="form-control" />
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="custom-file">
                  <input type="file" class="custom-file-input"/>
                  <label htmlFor="" className="custom-file-label">License Photo (Front)</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-file">
                  <input type="file" class="custom-file-input"/>
                  <label htmlFor="" className="custom-file-label">License Photo (Back)</label>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">National Board for Respiratory Care Certification</h4>

            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor="" className="h6 small d-block text-uppercase">License Number</label>
                  <Field 
                    name="rt-crt.number" 
                    component="input" 
                    className="form-control" />
                </div>
              </div>
                
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="" className="h5 small d-block text-uppercase">Exp. Date</label>
                  <Field
                    name="rt-crt.expirationDate" 
                    component="input" 
                    className="form-control" />
                </div>
              </div>

              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="" className="h5 small d-block text-uppercase">Type</label>
                  <Field
                    name="rt-crt.number"
                    component="select"
                    className="custom-select">
                    <option />
                    <option value="rt-crt">CRT</option>
                    <option value="rt-rrt">RRT</option>
                  </Field>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="custom-file">
                  <input type="file" class="custom-file-input"/>
                  <label htmlFor="" className="custom-file-label">License Photo (Front)</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-file">
                  <input type="file" class="custom-file-input"/>
                  <label htmlFor="" className="custom-file-label">License Photo (Back)</label>
                </div>

              </div>
            </div>

          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: "RespiratoryCredentialForm",
  enableReinitialize: true
})(RespiratoryCredentialForm)
