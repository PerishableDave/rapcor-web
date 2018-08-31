import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import RequestList from '../../components/RequestList'
import { fetchProviderRequests } from '../../store/requests'
import { getRequestsByDate } from '../../store/requests/reducer'

class RequestsPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProviderRequests())
  }

  render() {
    const { requests } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link className="btn u-btn-primary--air transition-3d-hover" to="/providers/requests/new">New Request</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <RequestList requests={requests} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  requests: getRequestsByDate(state)
})

export default connect(mapStateToProps)(RequestsPage)
