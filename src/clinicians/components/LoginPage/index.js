import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input } from '../../../components/shared/Form'
import { login } from '../../store/authentication'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const email = this.state.email
    const password = this.state.password

    this.props.login(email, password)
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h3>Clinician Login</h3>
          <Form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                <Input label="Email" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Input label="Password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <span className="small text-muted">Do not have an account? </span>
                <Link className="small" to="/clinicians/signup">Sign up</Link>
              </div>

              <div className="col-md-6">
                <button type="submit" className="btn btn-primary float-right">Login</button>
              </div>
            </div>
          </Form>
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
