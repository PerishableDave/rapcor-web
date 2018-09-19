import React, { Component } from 'react'
import moment from 'moment'
import Map from '../Map'

import './style.css'

export default class RequestDetails extends Component {
  render() {
    const requestBid = this.props.requestBid

    const name = requestBid ? requestBid.provider.name : ""
    const startDateText = requestBid ? moment(requestBid.startDate).format("dddd, MMM Do, h:mm A") : ""
    const endDateText = requestBid ? moment(requestBid.endDate).format("h:mm A") : ""
    const address1 = requestBid ? requestBid.provider.thoroughfare : ""
    const address2 = requestBid ? `${requestBid.provider.locality}, ${requestBid.provider.administrativeArea} ${requestBid.provider.postalCode}` : ""
    const notes = requestBid ? requestBid.notes : ""

    const fullAddress = address1 + " " + address2

    return (
      <div className="request-details">
        <div className="row">
          <div className="col">
            <h4>{ name }</h4>
            <p>
              { startDateText } to { endDateText }
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6><i className="fas fa-sticky-note icon"></i> Notes</h6>
            <p>
              { notes }
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6><i className="fas fa-map-marker-alt icon"></i> Address</h6>
            <p>
              { address1 }<br />
              { address2 }
            </p>
            <Map destination={fullAddress} />
          </div>
        </div>


      </div>
    )
  }
}
