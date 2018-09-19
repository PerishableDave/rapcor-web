import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchClinicianRequestBids } from '../../store/requests'
import { getOpenRequestBids, getAcceptedRequestBids } from '../../store/requests/reducer'
import RequestBidList from '../../components/RequestBidList'

class RequestBidsPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchClinicianRequestBids())
  }

  render() {
    const { openRequestBids, acceptedRequestBids } = this.props

    const acceptedRequestsList = acceptedRequestBids && acceptedRequestBids.length > 0 ? (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h5>Accepted Requests</h5>
          <RequestBidList requestBids={acceptedRequestBids} />
        </div>
      </div>
    ) : null

    const openRequestsList = openRequestBids && openRequestBids.length > 0 ? (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h5>Open Requests</h5>
          <RequestBidList requestBids={openRequestBids} />
        </div>
      </div>
    ) : (
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h5>Open Requests</h5>
          <p className="text-muted">No current open requests.</p>
        </div>
      </div>
    )

    return (
      <div className="container">
        { acceptedRequestsList }
        { openRequestsList }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  openRequestBids: getOpenRequestBids(state),
  acceptedRequestBids: getAcceptedRequestBids(state)
})

export default connect(mapStateToProps)(RequestBidsPage)
