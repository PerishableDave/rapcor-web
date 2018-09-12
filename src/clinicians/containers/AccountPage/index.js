import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import ClinicianForm from '../../components/ClinicianForm'
import Loader from '../../../components/shared/Loader'
import { fetchCurrentClinician, editClinician } from '../../store/account'
import { getCurrentClinician, getClinicianIsLoading } from '../../store/account/reducer'

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
		const { clinician, loading } = this.props
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <Loader loading={loading}>
              <ClinicianForm
                submitText="save"
                onSubmit={this.handleSubmit}
                initialValues={clinician} />
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clinician: getCurrentClinician(state),
	loading: getClinicianIsLoading(state)
})

export default connect(mapStateToProps)(AccountPage)
