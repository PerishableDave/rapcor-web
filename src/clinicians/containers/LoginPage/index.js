import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import { 
  login,
  clearClinicianLoginError
} from '../../store/authentication'
import { getClinicianAuthError } from '../../store/authentication/reducer'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    const { email, password } = data

    this.props.login(email, password)
  }

  componentWillUnmount() {
    this.props.clearClinicianLoginError()
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
          <h3>Clinician Login</h3>
          { errorDialog }
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
      </div>    
    )
  }
}

const mapStateToProps = (state) => ({
  error: getClinicianAuthError(state)
})

const mapDispatchToProps = (dispatch) => ({
  login: login(dispatch),
  clearClinicianLoginError: clearClinicianLoginError(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
