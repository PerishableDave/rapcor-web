import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProviderForm from '../../components/ProviderForm'
import Loader from '../../../components/shared/Loader'
import { createProvider } from '../../store/account'
import { getProviderAccountIsLoading } from '../../store/account/reducer'

class ProviderSignupPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(provider) {
    this.props.createProvider(provider)
  }

  render() {
    const { isLoading } = this.props

    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <Loader loading={isLoading}>
            <h3>Sign Up</h3>

            <ProviderForm 
              submitText="Sign Up"
              onSubmit={this.handleSubmit} />
          </Loader>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: getProviderAccountIsLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  createProvider: createProvider(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSignupPage)
