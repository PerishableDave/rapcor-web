import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProviderLoginForm from '../../components/ProviderLoginForm'
import { 
  login,
  clearProviderLoginError
} from '../../store/authentication'
import { getProviderAuthError } from '../../store/authentication/reducer'

class ProviderLoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(vals) {
    const { contactEmail, password } = vals

    this.props.login(contactEmail, password)
  }

  componentWillUnmount() {
    this.props.clearProviderLoginError()
  }

  render() {
    const { error } = this.props

    const errorDialog = error ? (
      <div className="alert alert-danger">
        { error.message }
      </div>
    ) : undefined

    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Provider Login</h3>
          { errorDialog }
          <ProviderLoginForm 
            onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: getProviderAuthError(state)
})

const mapDispatchToProps = (dispatch) => ({
  login: login(dispatch),
  clearProviderLoginError: clearProviderLoginError(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProviderLoginPage)
