import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from '../../../components/shared/Form'
import { formatNumber, AsYouType } from 'libphonenumber-js'

export default class ClinicianForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    submitText: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      email: props.email || "",
      phoneNumber: props.phoneNumber || "",
      address: props.address || "",
      address2: props.address2 || "",
      city: props.city || "",
      state: props.state || "",
      zip: props.zip || "",
      password: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePhoneInput(event) {
    const input = event.target.value
    const formattedVal = new AsYouType('US').input(input)

    this.setState({
      phoneNumber: formattedVal
    })
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const formattedPhone = formatNumber({ country: 'US', phone: this.state.phoneNumber }, 'International')

    const clinician = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: formattedPhone,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      country: 'US',
      password: this.state.password
    }

    this.props.onSubmit(clinician)

    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Input label="First Name" type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
          </div>

          <div className="col-md-6">
            <Input label="Last Name" type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input label="Email" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input label="Password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <Input label="Phone Number" type="tel" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneInput} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input label="Address" type="text" name="address" value={this.state.address} onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input label="Address 2" type="text" name="address2" value={this.state.address2} onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input label="City" type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
          </div>

          <div className="col-md-2">
            <Input label="State" type="text" name="state" value={this.state.state} onChange={this.handleInputChange} />
          </div>

          <div className="col-md-4">
            <Input label="Zip" type="text" name="zip" value={this.state.zip} onChange={this.handleInputChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary float-right">{ this.props.submitText }</button>
      </Form>
    )
  }
}
