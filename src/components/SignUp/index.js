import React, { Component } from 'react'
import { Form, Input } from '../Form'

export default class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Sign Up
                </h5>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Input label="First Name" type="text" />
                    </div>

                    <div className="col-md-6">
                      <Input label="Last Name" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Input label="Email" type="email" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Input label="Phone Number" type="tel" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Input label="Address" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Input label="Address 2" type="text" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Input label="City" type="text" />
                    </div>

                    <div className="col-md-2">
                      <Input label="State" type="text" />
                    </div>

                    <div className="col-md-4">
                      <Input label="Zip" type="text" />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary float-right">Sign Up</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
