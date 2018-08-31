import React, { Component } from 'react'
import moment from 'moment'

export default class RequestList extends Component {
  render() {
    const { requests } = this.props

    const rows = requests ? requests.map( request => {
      const startDate = moment(request.startDate).format("ddd, MMM Do, h:mm a")
      const endDate = moment(request.endDate).format("ddd, MMM Do, h:mm a")

      let statusClass = ""
      if (request.status === "closed") {
        statusClass = "text-danger"
      } else if (request.status ==="fulfilled") {
        statusClass = "text-primary"
      } else {
        statusClass = "text-secondary"
      }

      return (
        <tr>
          <td><span className={statusClass}>{ request.status }</span></td>
          <td>{ startDate }</td>
          <td>{ endDate }</td>
          <td></td>
        </tr>
      )
    }) : undefined

    return (
      <table className="table table-striped table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Clinician</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }
}
