import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../AccountNav'
import ClinicianForm from '../ClinicianForm'
import Loader from '../../../components/shared/Loader'
import { fetchCurrentClinician, editClinician } from '../../store/account'
import { getCurrentClinician } from '../../store/account/reducer'

class AccountPage extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentClinician())
  }

  handleSubmit(clinician) {
    this.props.dispatch(editClinician(clinician))
  }

  render() {
    let form = this.props.clinician ? (
      <ClinicianForm 
        submitText="Save"
        onSubmit={this.handleSubmit}
        initialValues={this.props.clinician} />
    ) : (
      <Loader />
    )

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            { form }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clinician: getCurrentClinician(state)
})

export default connect(mapStateToProps)(AccountPage)
