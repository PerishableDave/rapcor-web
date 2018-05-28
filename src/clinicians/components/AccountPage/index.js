import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../AccountNav'
import ClinicianForm from '../ClinicianForm'
import Loader from '../../../components/shared/Loader'
import { getClinicianToken } from '../../store/authentication'
import { fetchCurrentClinician, editClinician } from '../../store/account'
import { getCurrentClinician, getClinicianIsLoading } from '../../store/account/reducer'

class AccountPage extends Component {

  componentDidMount() {
    this.props.fetchCurrentClinician()
  }

  render() {
    let form = this.props.clinician ? (
      <ClinicianForm submitText="Save" onSubmit={this.props.editClinician} {...this.props.clinician} />
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
  clinician: getCurrentClinician(state),
  token: getClinicianToken(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentClinician: fetchCurrentClinician(dispatch),
  editClinician: editClinician(dispatch)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  editClinician: dispatchProps.editClinician(stateProps.token)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AccountPage)
