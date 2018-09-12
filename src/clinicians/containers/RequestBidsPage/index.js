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

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h5>Accepted Requests</h5>
            <RequestBidList requestBids={acceptedRequestBids} />

            <h5>Open Requests</h5>
            <RequestBidList requestBids={openRequestBids} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  openRequestBids: getOpenRequestBids(state),
  acceptedRequestBids: getAcceptedRequestBids(state)
})

export default connect(mapStateToProps)(RequestBidsPage)
