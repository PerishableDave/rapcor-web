import React, { Component } from 'react'
import { connect } from 'react-redux'

class AccountPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    }
  }

  render() {
    return (
      <h1>Account</h1>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
