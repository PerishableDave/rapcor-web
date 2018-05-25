import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import CredentialForm from '../../components/CredentialForm'

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
            <CredentialForm onSubmit={this.handleSubmit} />
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
