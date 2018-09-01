import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClinicianAccountForm from '../../components/ClinicianForm'
import { createClinician } from '../../store/account'

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(clinician) {
    this.props.createClinician(clinician)
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Sign Up</h3>
          <ClinicianAccountForm
            submitText="Sign Up"
            onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  createClinician: createClinician(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
