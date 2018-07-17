import React, { Component } from 'react'
import { connect } from 'react-redux'

class RequestsPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-lg-9 mx-auto">
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestsPage)
