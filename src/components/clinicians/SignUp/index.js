import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClinicianAccountForm from '../ClinicianAccountForm'
import Card from '../../shared/Card'
import { createClinician } from '../../../store/clinicians/account'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(clinician) {
    this.props.createClinician(clinician)
  }

  render() {
    return (
      <Card title="Sign Up">
        <ClinicianAccountForm onSubmit={this.handleSubmit} />
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  createClinician: createClinician(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
