import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountNav from '../../components/AccountNav'
import RespiratoryCredentialForm from '../../components/RespiratoryCredentialForm'
import { fetchDocuments } from '../../store/documents'

class AccountCredentialsPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchDocuments())
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

export default connect(mapStateToProps)(AccountCredentialsPage)
