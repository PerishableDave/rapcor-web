import React, { Component } from 'react'
import moment from 'moment'

export default class RequestDetails extends Component {
  render() {
    const { 
      startDate, 
      endDate, 
      notes,
      provider: { 
        name,
        thoroughfare,
        premise,
        locality,
        administrativeArea,
        postalCode
      } 
    } = this.props.requestBid

    const startDateText = moment(startDate).format("dddd, MMM Do, h:mm A")
    const endDateText = moment(endDate).format("h:mm A")

    return (
      <div className="container">
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
            <p>
              { thoroughfare }<br />
              { `${locality}, ${administrativeArea} ${postalCode} `}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              { notes }
            </p>
          </div>
        </div>
      </div>
    )
  }
}
