import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProviderLoginForm from '../../components/ProviderLoginForm'
import { login } from '../../store/authentication'

class ProviderLoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(vals) {
    const { contactEmail, password } = vals

    this.props.login(contactEmail, password)
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Provider Login</h3>
          <ProviderLoginForm 
            onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => ({
  login: login(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProviderLoginPage)
