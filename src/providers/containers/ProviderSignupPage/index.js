import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProviderForm from '../../components/ProviderForm'
import { createProvider } from '../../store/account'

class ProviderSignupPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(provider) {
    this.props.createProvider(provider)
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Sign Up</h3>
          <ProviderForm 
            submitText="Sign Up"
            onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  createProvider: createProvider(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSignupPage)
