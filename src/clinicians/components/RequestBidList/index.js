import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './style.css'

class RequestBidItem extends Component {
  render() {
    const { requestBid } = this.props
    const startDate = moment(requestBid.startDate).format("ddd, MMM Do, h:mm a")

    return (
			<li>
				<Link className="request-bid-item" to={`/r/${requestBid.slug}`}>
					<div className="row">
						<div className="col-md-1">
							<span className="text-success">{ requestBid.status }</span>
						</div>
						<div className="col-md-4 align-middle">
							{ requestBid.provider.name }
						</div>
						<div className="col-md-4">
							<span className="align-middle">{ startDate }</span>
						</div>
					</div>
				</Link>
      </li>
    )
  }
}

export default class RequestBidList extends Component {
  render() {
    const requestBids = this.props.requestBids || []

    const requestBidItems = requestBids.map(requestBid => (<RequestBidItem key={requestBid.id} requestBid={requestBid} />))

    return (
      <ol className="request-bid-list">
        { requestBidItems }
      </ol>
    )
  }
}


