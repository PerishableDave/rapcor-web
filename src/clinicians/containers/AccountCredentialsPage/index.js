import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import RespiratoryCredentialForm from '../../components/RespiratoryCredentialForm'

class AccountCredentialsPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AccountNav />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <RespiratoryCredentialForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountCredentialsPage)
