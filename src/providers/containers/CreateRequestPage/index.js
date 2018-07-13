import React, { Component } from 'react'
import { connect } from 'react-redux'

import RequestForm from '../../components/RequestForm'

class CreateRequestPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(vals) {
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-9 mx-auto">
          <RequestForm
            onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequestPage)
