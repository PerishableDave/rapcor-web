import React, { Component } from 'react'
import { connect } from 'react-redux'

import ClinicianForm from '../../components/ClinicianForm'
import Loader from '../../../components/shared/Loader'
import { createClinician } from '../../store/account'
import { getClinicianIsLoading } from '../../store/account/reducer'

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(clinician) {
    this.props.createClinician(clinician)
  }

  render() {
    const { isLoading } = this.props
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <Loader loading={isLoading} >
            <h3>Sign Up</h3>
            <ClinicianForm
              submitText="Sign Up"
              requirePassword={true}
              onSubmit={this.handleSubmit} />
          </Loader>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: getClinicianIsLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  createClinician: createClinician(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
