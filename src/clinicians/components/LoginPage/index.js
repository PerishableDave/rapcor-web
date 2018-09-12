import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import { login } from '../../store/authentication'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    const { email, password } = data

    this.props.login(email, password)
  }

  render() {

    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Clinician Login</h3>
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
      </div>    
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  login: login(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
